<?php

namespace App\Http\Controllers\Org\EditBio;

use Aventus\Laraventus\Requests\AventusRequest;

/**
 * 
 */
class Request extends AventusRequest
{
    public ?string $bio;
    public string $name;
}
