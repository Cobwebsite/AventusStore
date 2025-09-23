<?php

namespace App\Models;

use Aventus\Laraventus\Models\AventusModel;

/**
 * @property int $user_id
 * @property string $token
 * @property string $machine_id
 * @property string $machine_name
 */
class RemoteAccess extends AventusModel
{
    protected $fillable = [
        "token",
        "machine_id",
        "machine_name"
    ];

    protected function casts(): array
    {
        return [];
    }
}
