<?php

namespace App\Http\Controllers\Org\Create;

use Aventus\Laraventus\Requests\AventusRequest;
use Illuminate\Http\UploadedFile;

/**
 * 
 */
class Request extends AventusRequest
{
    public string $name;
    public ?string $bio;
    public ?UploadedFile $picture;
}
