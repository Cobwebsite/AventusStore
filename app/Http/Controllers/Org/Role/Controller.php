<?php

namespace App\Http\Controllers\Org\Role;

use App\Enums\RoleEnum;
use App\Models\Organization;
use App\Models\User;
use Aventus\Laraventus\Attributes\Rename;
use Aventus\Laraventus\Helpers\AventusError;

#[Rename("OrgRoleController")]
class Controller
{
    public function request(string $name): Response|AventusError
    {
        /** @var Organization|null */
        $org = Organization::where('name', $name)->first();
        if (!$org) {
            return new AventusError(404, "Organization not found");
        }
        $user = User::current();
        if ($user == null) {
            return new Response();
        }
        $users = $org->users;
        foreach ($users as $u) {
            if ($u->user_id == $user->id) {
                $roleEnum = RoleEnum::from($u->role_id);
                return new Response($roleEnum);
            }
        }
        return new Response();
    }
}
