<?php

namespace App\Http\Controllers\Auth\Logout;

use App\Models\User;
use Aventus\Laraventus\Attributes\Rename;
use Aventus\Laraventus\Tools\Console;
use Illuminate\Support\Facades\Auth;

#[Rename("AuthLogoutController")]
class Controller
{
    public function request(): bool
    {
        session(['api_token' => null]);
        Auth::logout();
        return true;
    }
}
