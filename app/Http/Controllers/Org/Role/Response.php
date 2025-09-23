<?php

namespace App\Http\Controllers\Org\Role;

use App\Enums\RoleEnum;
use App\Models\Organization;
use App\Models\User;
use Aventus\Laraventus\Attributes\Rename;
use Aventus\Laraventus\Helpers\AventusError;
use Aventus\Laraventus\Resources\AventusResource;

class Response extends AventusResource
{

    public function __construct(
        public ?RoleEnum $role = null
    ) {}
}
