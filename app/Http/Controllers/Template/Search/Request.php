<?php

namespace App\Http\Controllers\Template\Search;

use Aventus\Laraventus\Requests\AventusRequest;
use Illuminate\Http\UploadedFile;

/**
 * 
 */
class Request extends AventusRequest
{
    public ?string $txt;
    public int $limit;
    public int $offset;
}
