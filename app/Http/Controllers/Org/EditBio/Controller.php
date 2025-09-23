<?php

namespace App\Http\Controllers\Org\EditBio;

use App\Enums\RoleEnum;
use App\Http\Controllers\Org\OrgDetailsResource;
use App\Models\Organization;
use App\Models\User;
use Aventus\Laraventus\Attributes\Rename;
use Aventus\Laraventus\Helpers\AventusError;

#[Rename("OrgEditBioController")]
class Controller
{
    public function request(Request $request): AventusError | OrgDetailsResource
    {
        $user = User::current();
        if (!$user) return new AventusError(404, "User not found");

        /** @var Organization | null */
        $org = Organization::where('name', $request->name)->first();
        if (!$org) return new AventusError(404, "Org not found");

        $found = false;
        foreach ($user->organizations as $orgTemp) {
            if ($orgTemp->organization_id == $org->id && $orgTemp->role_id == RoleEnum::Admin->value) {
                $found = true;
                break;
            }
        }
        if (!$found) {
            return new AventusError(403, "Forbidden");
        }

        $org->bio = $request->bio;
        $org->save();
        return new OrgDetailsResource($org);
    }
}
