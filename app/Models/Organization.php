<?php

namespace App\Models;

use Aventus\Laraventus\Models\AventusModel;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property string $name
 * @property ?string $bio
 * @property ?OrganizationPicture $picture
 * @property OrganizationUser[] $users
 * @property Package[] $packages
 * @property Template[] $templates
 */
class Organization extends AventusModel
{

    protected $fillable = [];


    protected function casts(): array
    {
        return [
            "picture" => OrganizationPicture::class
        ];
    }

    public function users(): HasMany
    {
        return $this->hasMany(OrganizationUser::class, "organization_id");
    }

    public function packages(): HasMany
    {
        return $this->hasMany(Package::class, "organization_id");
    }

    public function templates(): HasMany
    {
        return $this->hasMany(Template::class, "organization_id");
    }
}
