<?php

namespace App\Http\Controllers\Auth\Login;

use App\Models\User;
use Aventus\Laraventus\Attributes\Rename;
use Illuminate\Support\Facades\Auth;

#[Rename("AuthLoginController")]

class Controller
{
    public function request(Request $request): Error|string
    {
        if (!Auth::attempt($request->all())) {
            return new Error(ErrorEnum::ValidationError, "Wrong credentials");
        }
        $user = User::current();
        if (!$user->verified) {
            return new Error(ErrorEnum::ValidateEmailFirst, "You must verify your email first");
        }
        $token = $user->createToken('API Token', ["*"], now()->addHours(8))->plainTextToken;
        session(['api_token' => $token]);
        return $token;
    }
}
