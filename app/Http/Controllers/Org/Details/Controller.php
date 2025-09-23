<?php

namespace App\Http\Controllers\Org\Details;

use App\Http\Controllers\Org\OrgDetailsResource;
use App\Models\Organization;
use Aventus\Laraventus\Attributes\Rename;
use Aventus\Laraventus\Helpers\AventusError;

#[Rename("OrgDetailsController")]
class Controller
{
    public function request(string $name): AventusError|OrgDetailsResource
    {
        $org = Organization::where('name', $name)->first();
        if (!$org) {
            return new AventusError(404, "Organization not found");
        }
        return new OrgDetailsResource($org);
    }
}
