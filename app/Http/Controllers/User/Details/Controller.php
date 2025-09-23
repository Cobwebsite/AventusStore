<?php

namespace App\Http\Controllers\User\Details;

use App\Http\Controllers\User\UserDetailsResource;
use App\Models\User;
use Aventus\Laraventus\Attributes\Rename;
use Aventus\Laraventus\Helpers\AventusError;
use Aventus\Laraventus\Tools\Console;

#[Rename("UserDetailsController")]
class Controller
{
    public function request(string $name): AventusError|UserDetailsResource
    {
        $user = User::with(['organizations'])->where('username', $name)->first();
        if(!$user) {
            return new AventusError(404, "User not found");
        }
        return new UserDetailsResource($user);
    }
}
