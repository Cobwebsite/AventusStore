<?php

namespace App\Http\Resources\Web;

use App\Models\User;
use Aventus\Laraventus\Attributes\Export;
use Aventus\Laraventus\Resources\AventusResource;

/**
 * Summary of UserResource
 */
#[Export]
class IndexResource extends AventusResource
{
    public ?User $user;   
}
