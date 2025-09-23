<?php

namespace App\Http\Controllers\User\Current;

use App\Http\Controllers\User\UserDetailsResource;
use App\Models\User;
use Aventus\Laraventus\Attributes\Rename;

#[Rename("UserCurrentController")]
class Controller
{
    public function request(): UserDetailsResource
    {
        $user = User::current();
        return new UserDetailsResource($user);
    }
}
