<?php

namespace App\Http\Controllers\User\EditEmail;

use App\Http\Controllers\User\UserDetailsResource;
use App\Models\User;
use Aventus\Laraventus\Attributes\Rename;

#[Rename("UserEditEmailController")]
class Controller
{
    public function request(Request $request): Error|UserDetailsResource
    {
        $user = User::current();
        if (User::where('email', $request->email)->where('id', '!=', $user->id)->first()) {
            return new Error(ErrorEnum::ValidationError, "Email already used");
        }
        $user->email = $request->email;
        $user->save();
        return new UserDetailsResource($user);
    }
}
