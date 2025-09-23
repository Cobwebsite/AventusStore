<?php

namespace App\Http\Controllers\Auth\Signup;

use App\Mail\ConfirmAccountMail;
use App\Models\User;
use Aventus\Laraventus\Attributes\Rename;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

#[Rename("AuthSignupController")]
class Controller
{
    public function request(Request $request): Error|bool
    {
        $user = $request->toModel(User::class);
        // $user->verified = true;
        $user->token_action =  Str::uuid()->toString();
        $user->save();
        if (Mail::to([$user->email])->send(new ConfirmAccountMail($user)) == null)
            return false;
        return true;
    }
}
