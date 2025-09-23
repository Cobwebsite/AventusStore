<?php

namespace App\Models;

use Aventus\Laraventus\Attributes\NoExport;
use Aventus\Laraventus\Models\AventusModel;

/**
 * @property int $id
 * @property string $name
 */
class Role extends AventusModel
{
    protected $fillable = [
        "name",
    ];

    protected function casts(): array
    {
        return [];
    }
}
