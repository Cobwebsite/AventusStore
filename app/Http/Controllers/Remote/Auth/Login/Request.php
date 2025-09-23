<?php

namespace App\Http\Controllers\Remote\Auth\Login;

use Aventus\Laraventus\Requests\AventusRequest;
use Illuminate\Http\UploadedFile;

/**
 * 
 */
class Request extends AventusRequest
{
    public string $username;
    public string $password;
    public string $machineId;
    public string $machineName;
}
