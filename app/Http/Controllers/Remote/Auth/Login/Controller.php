<?php

namespace App\Http\Controllers\Remote\Auth\Login;

use App\Models\RemoteAccess;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class Controller
{
    public function request(Request $request): Error|string
    {
        if (!Auth::attempt(["username" => $request->username, "password" => $request->password])) {
            return new Error(ErrorEnum::ValidationError, "Wrong credentials");
        }
        $user = User::current();
        if (!$user->verified) {
            return new Error(ErrorEnum::ValidateEmailFirst, "You must verify your email first");
        }

        $uid = str_replace("-", "", Str::uuid()->toString());

        $access = new RemoteAccess();
        $access->token = $uid;
        $access->machine_id = $request->machineId;
        $access->machine_name = $request->machineName;
        $access->user_id = $user->id;
        $access->save();
        return $uid;
    }
}
