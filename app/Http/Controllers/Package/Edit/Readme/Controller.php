<?php

namespace App\Http\Controllers\Package\Edit\Readme;

use App\Models\Package;
use Aventus\Laraventus\Attributes\Rename;
use Aventus\Laraventus\Helpers\AventusError;

#[Rename("PackageEditReadmeController")]
class Controller
{
    public function request(Request $request, string $name): AventusError|Response
    {
        if(!Package::isAdmin($name)) {
            return new AventusError(403, "Forbidden");
        }

        /** @var Package */
        $package = Package::where('name', $name)->first();
        if($package) {
            $package->readme = $request->readme;
            $package->save();
        }

        $response = new Response();
        $response->success = true;

        return $response;
    }
}
