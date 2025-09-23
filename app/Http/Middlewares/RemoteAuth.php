<?php


namespace App\Http\Middlewares;

use App\Models\RemoteAccess;
use App\Models\User;
use Illuminate\Http\Request;
use Closure;
use Symfony\Component\HttpFoundation\Response;

class RemoteAuth
{

    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->bearerToken();
        if (!$token) {
            return response('Not authorized', 401);
        }

        $parts = explode("|", $token);
        if (
            count($parts) == 2
        ) {
            /** @var RemoteAccess|null */
            $access = RemoteAccess::where('token', $parts[0])->where('machine_id', $parts[1])->first();
            if ($access != null) {
                User::$_current_id = $access->user_id;
                return $next($request);
            }
        }


        return response('Invalid token', 403);
    }
}
