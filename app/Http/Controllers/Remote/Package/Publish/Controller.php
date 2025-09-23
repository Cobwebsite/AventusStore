<?php

namespace App\Http\Controllers\Remote\Package\Publish;

use App\Helpers\DB;
use App\Http\Middlewares\Transaction;
use App\Models\Organization;
use App\Models\Package;
use App\Models\PackageTag;
use App\Models\PackageVersion;
use App\Models\Tag;
use App\Models\User;
use Aventus\Laraventus\Tools\Console;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use ZipArchive;

class Controller
{
    #[Transaction]
    public function request(Request $request): Error|Response
    {
        $user = User::current();
        if (!$user) {
            return new Error(ErrorEnum::AuthenticationError, "User can't be found");
        }
        $user->load(['organizations.organization']);

        /** @var Organization|null */
        $org = null;
        if (isset($request->organization)) {
            foreach ($user->organizations as $_org) {
                if ($_org->organization->name == $request->organization) {
                    $org = $_org->organization;
                    break;
                }
            }
            if ($org == null) {
                return new Error(ErrorEnum::OrganizationNotFound, "Organization can't be found");
            }
        }

        $firstLine = fgets(fopen($request->packageFile->getRealPath(), 'r'));
        $pattern = '/\/\/ (\S+):([0-9]+)\.([0-9]+)\.([0-9]+)/';
        if (preg_match($pattern, $firstLine, $matches)) {
            $nameInsideFile = $matches[1];
            $v1 = (int) $matches[2];
            $v2 = (int) $matches[3];
            $v3 = (int) $matches[4];
            $versionInsideFile = $v1 . "." . $v2 . "." . $v3;

            if ($nameInsideFile != $request->name) {
                return new Error(ErrorEnum::NameMissedMatch, "The name inside package.avt isn't the same as the name provided");
            }
            if ($versionInsideFile != $request->version) {
                return new Error(ErrorEnum::VersionMissedMatch, "The version inside package.avt isn't the same as the version provided");
            }

            // create or update package
            $package = Package::with([])->where('name', $request->name)->first();
            if (!$package) {
                $package = new Package();
                $package->name = $request->name;
                $package->downloads = 0;
                $package->version = null;
                if ($org == null) {
                    $package->user_id = $user->id;
                    $package->organization_id = null;
                } else {
                    $package->user_id = null;
                    $package->organization_id = $org->id;
                }
            } else {
                // check permission
                if (isset($package->user_id)) {
                    if ($package->user_id != $user->id) {
                        return new Error(ErrorEnum::Forbidden, "Forbidden");
                    }
                } else {
                    if ($org == null) {
                        return new Error(ErrorEnum::Forbidden, "Forbidden");
                    }
                    if ($package->organization_id != $org->id) {
                        return new Error(ErrorEnum::Forbidden, "Forbidden");
                    }
                }
            }

            if ($package->version) {
                $v = explode(".", $package->version);
                if (intval($v[0]) > $v1) {
                    return new Error(ErrorEnum::VersionBigger, "You must provide a version bigger than " . $package->version);
                } else if (intval($v[0]) == $v1 && intval($v[1]) > $v2) {
                    return new Error(ErrorEnum::VersionBigger, "You must provide a version bigger than " . $package->version);
                } else if (intval($v[0]) == $v1 && intval($v[1]) == $v2 && intval($v[2]) >= $v3) {
                    return new Error(ErrorEnum::VersionBigger, "You must provide a version bigger than " . $package->version);
                }
            }

            $package->description = $request->description ?? "";
            if ($request->readMe) {
                $package->readme = file_get_contents($request->readMe->getRealPath());
            }
            $now = Carbon::now();
            $package->version = $request->version;
            $package->release_date = $now;
            $package->save();

            $versionSlug = str_replace(".", "_", $package->version);

            $tmpZip = tempnam(sys_get_temp_dir(), 'zip');
            $zip = new ZipArchive;
            if ($zip->open($tmpZip, ZipArchive::CREATE | ZipArchive::OVERWRITE) === TRUE) {
                // Récupérer le chemin absolu du fichier stocké

                // Ajouter le fichier dans le ZIP
                $zip->addFile($request->packageFile->getRealPath(), $request->packageFile->getClientOriginalName());

                $zip->close();

                $fs = Storage::disk('local');
                $fs->put('packages/' . $package->name . '/' . $versionSlug . '.zip', file_get_contents($tmpZip));
                unlink($tmpZip);
            } else {
                throw new \Exception("Impossible de créer l'archive ZIP");
            }

            $packageVersion = new PackageVersion();
            $packageVersion->package_id = $package->id;
            $packageVersion->version = $request->version;
            $packageVersion->date = $now;
            $packageVersion->save();

            PackageTag::where('package_id', $package->id)->delete();
            foreach ($request->tags as $tag) {
                $tagClass = Tag::where('name', $tag)->first();
                if ($tagClass == null) {
                    $tagClass = new Tag();
                    $tagClass->name = $tag;
                    $tagClass->save();
                }
                $link = new PackageTag();
                $link->package_id = $package->id;
                $link->tag_id = $tagClass->id;
                $link->save();
            }
        }
        return new Response();
    }
}
