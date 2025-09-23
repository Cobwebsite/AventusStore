<?php

namespace App\Http\Controllers\User\EditPicture;

use Aventus\Laraventus\Requests\AventusRequest;
use Illuminate\Http\UploadedFile;

/**
 * 
 */
class Request extends AventusRequest
{
    public UploadedFile $file;
}
