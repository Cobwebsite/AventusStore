<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Aventus\Laraventus\Models\AventusModel;
use DateTime;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * The package that user can download
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string $readme
 * @property string $version
 * @property int $downloads
 * @property ?int $user_id
 * @property ?User $user
 * @property ?int $organization_id
 * @property ?Organization $organization
 * @property DateTime $release_date
 * @property PackageTag[] $tags
 */
class Package extends AventusModel
{

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [];

    protected function casts(): array
    {
        return [
            "release_date" => 'datetime'
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, "user_id");
    }

    public function organization(): BelongsTo
    {
        return $this->belongsTo(Organization::class, "organization_id");
    }

    public function tags(): HasMany
    {
        return $this->hasMany(PackageTag::class, "package_id");
    }
}
