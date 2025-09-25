<?php

namespace App\Http\Controllers\Template\Delete;

use App\Models\Template;
use Aventus\Laraventus\Attributes\Rename;
use Aventus\Laraventus\Helpers\AventusError;

#[Rename("TemplateDeleteController")]
class Controller
{
    public function request(string $name): AventusError|Response
    {
        if(!Template::isAdmin($name)) {
            return new AventusError(403, "Forbidden");
        }

        $package = Template::where('name', $name)->first();
        if($package) {
            $package->delete();
        }

        $response = new Response();
        $response->success = true;
        return $response;
    }
}
