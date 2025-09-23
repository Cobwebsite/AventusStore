<?php

namespace App\Models;

use Aventus\Laraventus\Models\AventusModel;
use DateTime;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $package_id
 * @property string $version
 * @property DateTime $date
 * @property int $downloads
 * @property Package $package
 */
class PackageDownload extends AventusModel
{

    public function package(): BelongsTo
    {
        return $this->belongsTo(Package::class, "package_id");
    }

    
}
