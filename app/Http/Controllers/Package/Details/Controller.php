<?php

namespace App\Http\Controllers\Package\Details;

use App\Http\Controllers\Package\PackageDetailsResource;
use App\Models\Package;
use Aventus\Laraventus\Attributes\Rename;

#[Rename("PackageDetailsController")]
class Controller
{
    public function request(string $name): Error|PackageDetailsResource
    {
        $package = Package::with([
            "user",
            "organization",
            "tags.tag"
        ])->where('name', $name)->first();
        if (!$package) {
            return new Error(ErrorEnum::NotFound, "Package not found");
        }

        return new PackageDetailsResource($package);
    }
}
