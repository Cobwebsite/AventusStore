<?php

namespace App\Http\Controllers\Template\Download;

use App\Models\Template;
use App\Models\TemplateDownload;
use App\Models\TemplateVersion;
use Aventus\Laraventus\Attributes\NoExport;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;

#[NoExport]
class Controller
{
    public function request(Request $request, string $name, string $version): Error|StreamedResponse
    {
        /** @var Template|null $template */
        $template = Template::where('name', $name)->first();
        if (!$template) {
            return new Error(ErrorEnum::NotFound, "Template doesn't exist");
        }
        if ($version == "@latest" || $version == "@last") {
            $version = $template->version;
        }
        /** @var TemplateVersion|null $templateVersion */
        $templateVersion = TemplateVersion::where('version', $version)->where('template_id', $template->id)->first();
        if (!$templateVersion) {
            return new Error(ErrorEnum::NotFound, "Template version doesn't exist");
        }

        $template->downloads++;
        $template->save();

        $templateDownload = TemplateDownload::where('date', Carbon::now()->startOfDay())->where('template_id', $template->id)->where('version', $version)->first();
        if ($templateDownload == null) {
            $templateDownload = new TemplateDownload();
            $templateDownload->date = Carbon::now()->startOfDay();
            $templateDownload->template_id = $template->id;
            $templateDownload->version = $version;
            $templateDownload->downloads = 0;
        }
        $templateDownload->downloads++;
        $templateDownload->save();


        $versionSlug = str_replace(".", "_", $version);
        $fs = Storage::disk('local');

        return $fs->download('templates/' . $template->name . '/' . $versionSlug . ".zip");
    }
}
