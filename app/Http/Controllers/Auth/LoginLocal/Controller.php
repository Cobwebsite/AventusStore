<?php

namespace App\Http\Controllers\Auth\LoginLocal;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Auth\Login\Request;
use App\Http\Controllers\Auth\Login\Error;
use App\Http\Controllers\Auth\Login\ErrorEnum;
use Aventus\Laraventus\Attributes\Rename;

#[Rename("AuthLoginLocalController")]
class Controller
{
    public function request(Request $request): Error|string
    {
        if (!Auth::attempt($request->all())) {
            return new Error(ErrorEnum::ValidationError, "Wrong credentials");
        }
        $request->session()->regenerate();
        return "Authenticated";
    }
}
