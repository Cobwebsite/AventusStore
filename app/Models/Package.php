<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Enums\RoleEnum;
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
 * @property ?string $repos
 * @property ?string $doc
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
    public static function isAdmin(int|Package|string $package): bool
    {
        $user = User::current();
        if (!$user) return false;

        if (is_string($package)) {
            $package = Package::where('name', $package)->first();
        } else if (is_int($package)) {
            $package = Package::where('id', $package)->first();
        }

        if (!$package) return false;
        /** @var Package $package */
        if ($package->organization_id) {
            $orgs = $user->organizations;
            foreach($orgs as $org) {
                if($org->organization_id == $package->organization_id && $org->role_id == RoleEnum::Admin->value) {
                    return true;
                }
            }
        }
        else if($package->user_id == $user->id) {
            return true;
        }
        return false;
    }
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
