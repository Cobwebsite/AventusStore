<?php

namespace App\Http\Controllers\Org\EditPicture;

use Aventus\Laraventus\Requests\AventusRequest;
use Illuminate\Http\UploadedFile;

/**
 * 
 */
class Request extends AventusRequest
{
    public UploadedFile $file;
    public string $name;
}
