<?php

namespace App\Http\Controllers\Package\Edit\Readme;

use Aventus\Laraventus\Requests\AventusRequest;
use Illuminate\Http\UploadedFile;

/**
 * 
 */
class Request extends AventusRequest
{
    public string $readme;
}
