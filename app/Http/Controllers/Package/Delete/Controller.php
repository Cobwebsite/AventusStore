<?php

namespace App\Http\Controllers\Package\Delete;

use App\Models\Package;
use Aventus\Laraventus\Attributes\Rename;
use Aventus\Laraventus\Helpers\AventusError;

#[Rename("PackageDeleteController")]
class Controller
{
    public function request(string $name): AventusError|Response
    {
        if(!Package::isAdmin($name)) {
            return new AventusError(403, "Forbidden");
        }

        $package = Package::where('name', $name)->first();
        if($package) {
            $package->delete();
        }

        $response = new Response();
        $response->success = true;
        return $response;
    }
}
