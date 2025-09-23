<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Aventus\Laraventus\Models\AventusModel;
use DateTime;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * The package that user can download
 * @property int $id
 * @property int $package_id
 * @property string $version
 * @property DateTime $date
 */
class PackageVersion extends AventusModel
{
    
}
