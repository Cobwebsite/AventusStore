<?php

namespace App\Http\Controllers\Package\Download;

use App\Models\Package;
use App\Models\PackageDownload;
use App\Models\PackageVersion;
use Aventus\Laraventus\Attributes\NoExport;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;

#[NoExport]
class Controller
{
    public function request(Request $request, string $name, string $version): Error|StreamedResponse
    {
        /** @var Package|null $package */
        $package = Package::where('name', $name)->first();
        if (!$package) {
            return new Error(ErrorEnum::NotFound, "Package doesn't exist");
        }
        if ($version == "@latest" || $version == "@last") {
            $version = $package->version;
        }
        /** @var PackageVersion|null $packageVersion */
        $packageVersion = PackageVersion::where('version', $version)->where('package_id', $package->id)->first();
        if (!$packageVersion) {
            return new Error(ErrorEnum::NotFound, "Package version doesn't exist");
        }

        $package->downloads++;
        $package->save();

        $packageDownload = PackageDownload::where('date', Carbon::now()->startOfDay())->where('package_id', $package->id)->where('version', $version)->first();
        if ($packageDownload == null) {
            $packageDownload = new PackageDownload();
            $packageDownload->date = Carbon::now()->startOfDay();
            $packageDownload->package_id = $package->id;
            $packageDownload->version = $version;
            $packageDownload->downloads = 0;
        }
        $packageDownload->downloads++;
        $packageDownload->save();


        $versionSlug = str_replace(".", "_", $version);
        $fs = Storage::disk('local');

        return $fs->download('packages/' . $package->name . '/' . $versionSlug . ".zip");
    }
}
