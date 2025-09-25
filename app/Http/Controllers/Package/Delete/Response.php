<?php

namespace App\Http\Controllers\Package\Delete;

use Aventus\Laraventus\Resources\AventusResource;

/**
 * @extends AventusResource
 */
class Response extends AventusResource
{
    public bool $success;
}
