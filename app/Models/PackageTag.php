<?php

namespace App\Models;

use Aventus\Laraventus\Models\AventusModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $package_id
 * @property int $tag_id
 * @property Tag $tag
 * @property Package $package
 */
class PackageTag extends AventusModel
{

    public function package(): BelongsTo
    {
        return $this->belongsTo(Package::class, "package_id");
    }

    public function tag(): BelongsTo
    {
        return $this->belongsTo(Tag::class, "tag_id");
    }
}
