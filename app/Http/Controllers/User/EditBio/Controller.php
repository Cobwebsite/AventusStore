<?php

namespace App\Http\Controllers\User\EditBio;

use App\Http\Controllers\User\UserDetailsResource;
use App\Models\User;
use Aventus\Laraventus\Attributes\Rename;

#[Rename("UserEditBioController")]
class Controller
{
    public function request(Request $request): UserDetailsResource
    {
        $user = User::current();
        $user->bio = $request->bio;
        $user->save();
        return new UserDetailsResource($user);
    }
}
