<?php

namespace App\Http\Controllers\User\EditBio;

use Aventus\Laraventus\Requests\AventusRequest;
use Illuminate\Http\UploadedFile;

/**
 * 
 */
class Request extends AventusRequest
{
    public ?string $bio;
}
