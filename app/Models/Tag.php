<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Aventus\Laraventus\Models\AventusModel;

/**
 * The package that user can download
 * @property string $name
 */
class Tag extends AventusModel
{

    protected $fillable = [
        'name'
    ];

    protected function casts(): array
    {
        return [];
    }
}
