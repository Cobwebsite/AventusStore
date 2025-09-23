<?php

namespace App\Models;

use App\Casts\ToBoolCast;
use Aventus\Laraventus\Models\AventusModel;
use DateTime;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * The template that user can download
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string $readme
 * @property string $version
 * @property int $downloads
 * @property bool $is_project
 * @property ?int $user_id
 * @property ?User $user
 * @property ?int $organization_id
 * @property ?Organization $organization
 * @property DateTime $release_date
 * @property TemplateTag[] $tags
 */
class Template extends AventusModel
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
            "release_date" => 'datetime',
            "is_project" => ToBoolCast::class
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
        return $this->hasMany(TemplateTag::class, "template_id");
    }
}
