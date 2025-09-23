<?php

namespace App\Http\Controllers\Remote\Template\Publish;

use App\Http\Middlewares\Transaction;
use App\Models\Tag;
use App\Models\Template;
use App\Models\TemplateTag;
use App\Models\TemplateVersion;
use App\Models\User;
use Aventus\Laraventus\Attributes\Rename;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;

#[Rename("RemoteTemplatePublishController")]
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


        // create or update template
        $template = Template::with([])->where('name', $request->name)->first();
        if (!$template) {
            $template = new Template();
            $template->name = $request->name;
            $template->downloads = 0;
            $template->version = null;
            if ($org == null) {
                $template->user_id = $user->id;
                $template->organization_id = null;
            } else {
                $template->user_id = null;
                $template->organization_id = $org->id;
            }
        } else {
            // check permission
            if (isset($template->user_id)) {
                if ($template->user_id != $user->id) {
                    return new Error(ErrorEnum::Forbidden, "Forbidden");
                }
            } else {
                if ($org == null) {
                    return new Error(ErrorEnum::Forbidden, "Forbidden");
                }
                if ($template->organization_id != $org->id) {
                    return new Error(ErrorEnum::Forbidden, "Forbidden");
                }
            }
        }

        if ($template->version) {
            $ver = explode(".", $request->version);
            $v = explode(".", $template->version);
            if (intval($v[0]) > intval($ver[0])) {
                return new Error(ErrorEnum::VersionBigger, "You must provide a version bigger than " . $template->version);
            } else if (intval($v[0]) == intval($ver[0]) && intval($v[1]) > intval($ver[1])) {
                return new Error(ErrorEnum::VersionBigger, "You must provide a version bigger than " . $template->version);
            } else if (intval($v[0]) == intval($ver[0]) && intval($v[1]) == intval($ver[1]) && intval($v[2]) >= intval($ver[2])) {
                return new Error(ErrorEnum::VersionBigger, "You must provide a version bigger than " . $template->version);
            }
        }

        $template->description = $request->description ?? "";
        if ($request->readMe) {
            $template->readme = file_get_contents($request->readMe->getRealPath());
        }
        $now = Carbon::now();
        $template->version = $request->version;
        $template->release_date = $now;
        $template->is_project = $request->is_project;
        $template->save();

        $versionSlug = str_replace(".", "_", $template->version);

        $fs = Storage::disk('local');
        $fs->put('templates/' . $template->name . '/' . $versionSlug . '.zip', file_get_contents($request->templateFile->getRealPath()));



        $templateVersion = new TemplateVersion();
        $templateVersion->template_id = $template->id;
        $templateVersion->version = $request->version;
        $templateVersion->date = $now;
        $templateVersion->save();

        TemplateTag::where('template_id', $template->id)->delete();
        if (isset($request->tags)) {
            foreach ($request->tags as $tag) {
                $tagClass = Tag::where('name', $tag)->first();
                if ($tagClass == null) {
                    $tagClass = new Tag();
                    $tagClass->name = $tag;
                    $tagClass->save();
                }
                $link = new TemplateTag();
                $link->template_id = $template->id;
                $link->tag_id = $tagClass->id;
                $link->save();
            }
        }
        return new Response();
    }
}
