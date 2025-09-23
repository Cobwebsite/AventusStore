<?php

namespace App\Http\Controllers\User\EditPicture;

use App\Http\Controllers\User\Details\Controller as DetailsController;
use App\Http\Controllers\User\UserDetailsResource;
use App\Models\User;
use App\Models\UserPicture;
use Aventus\Laraventus\Attributes\Rename;
use Illuminate\Support\Facades\Auth;

#[Rename("UserEditPictureController")]
class Controller
{
    public function request(Request $request): UserDetailsResource
    {
        $user = User::current();
        $user->picture = new UserPicture();
        $user->picture->upload = $request->file;
        $user->save();

        return new UserDetailsResource($user);
    }
}
