<?php

namespace App\Http\Controllers\Org\Create;

use App\Enums\RoleEnum;
use App\Http\Controllers\Org\OrgSimpleResource;
use App\Http\Controllers\Org\OrgUserResource;
use App\Http\Middlewares\Transaction;
use App\Models\Organization;
use App\Models\OrganizationPicture;
use App\Models\OrganizationUser;
use App\Models\User;
use Aventus\Laraventus\Attributes\Middleware;
use Aventus\Laraventus\Attributes\Rename;

#[Rename("OrgCreateController")]
class Controller
{
    #[Transaction]
    public function request(Request $request): Error|OrgUserResource
    {
        if (Organization::where("name", $request->name)->first() != null) {
            return new Error(ErrorEnum::NamedUsed, "Name is already used");
        }
        $org = new Organization();
        $org->name = $request->name;
        $org->bio = $request->bio ?? '';
        if ($request->picture) {
            $org->picture = new OrganizationPicture();
            $org->picture->upload = $request->picture;
        }
        $org->save();

        $orgUser = new OrganizationUser();
        $orgUser->user_id = User::current()->id;
        $orgUser->organization_id = $org->id;
        $orgUser->role_id = RoleEnum::Admin->value;
        $orgUser->save();

        return new OrgUserResource($orgUser);
    }
}
