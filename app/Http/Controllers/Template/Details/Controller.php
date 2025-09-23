<?php

namespace App\Http\Controllers\Template\Details;

use App\Http\Controllers\Template\TemplateDetailsResource;
use App\Models\Template;
use Aventus\Laraventus\Attributes\Rename;

#[Rename("TemplateDetailsController")]
class Controller
{
    public function request(string $name): Error|TemplateDetailsResource
    {
        $template = Template::with([
            "user",
            "organization",
            "tags.tag"
        ])->where('name', $name)->first();
        if (!$template) {
            return new Error(ErrorEnum::NotFound, "Template not found");
        }

        return new TemplateDetailsResource($template);
    }
}
