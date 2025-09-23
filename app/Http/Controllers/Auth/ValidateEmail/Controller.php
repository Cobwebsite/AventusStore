<?php

namespace App\Http\Controllers\Auth\ValidateEmail;

use App\Models\User;
use Aventus\Laraventus\Attributes\NoExport;
use Aventus\Laraventus\Attributes\Rename;
use Illuminate\Support\Facades\Request;

#[Rename("AuthValidateEmailController")]
class Controller
{
    #[NoExport]
    public function request(Request $request, string $token)
    {
        $user = User::where('token_action', $token)->first();
        if ($user) {
            $user->update([
                "token_action" => null,
                "verified" => true
            ]);
            return Redirect("/validation/success");
        }
        return Redirect("/validation/failure");
    }
}
