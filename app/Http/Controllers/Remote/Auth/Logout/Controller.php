<?php

namespace App\Http\Controllers\Remote\Auth\Logout;

use App\Models\RemoteAccess;
use Aventus\Laraventus\Requests\AventusRequest;

class Controller
{
    public function request(AventusRequest $request): bool
    {
        $token = $request->bearerToken();
        $parts = explode("|", $token);
        if (
            count($parts) == 2
        ) {
            RemoteAccess::where('token', $parts[0])->where('machine_id', $parts[1])->delete();
            return true;
        }
        return false;
    }
}
