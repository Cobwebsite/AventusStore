<?php

namespace App\Http\Controllers\Template\Edit\Readme;

use App\Models\Template;
use Aventus\Laraventus\Attributes\Rename;
use Aventus\Laraventus\Helpers\AventusError;

#[Rename("TemplateEditReadmeController")]
class Controller
{
    public function request(Request $request, string $name): AventusError|Response
    {
        if(!Template::isAdmin($name)) {
            return new AventusError(403, "Forbidden");
        }

        /** @var Template */
        $template = Template::where('name', $name)->first();
        if($template) {
            $template->readme = $request->readme;
            $template->save();
        }

        $response = new Response();
        $response->success = true;

        return $response;
    }
}
