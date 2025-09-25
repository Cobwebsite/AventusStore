<?php

namespace App\Models;

use App\Casts\ToBoolCast;
use App\Enums\RoleEnum;
use Aventus\Laraventus\Models\AventusModel;
use Aventus\Laraventus\Tools\Console;
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
 * @property ?string $repos
 * @property ?string $doc
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
    public static function isAdmin(int|Template|string $template): bool
    {
        $user = User::current();
        if (!$user) return false;

        if (is_string($template)) {
            $template = Template::where('name', $template)->first();
        } else if (is_int($template)) {
            $template = Template::where('id', $template)->first();
        }

        if (!$template) return false;
        /** @var Template $template */
        if ($template->organization_id) {
            $orgs = $user->organizations;
            foreach($orgs as $org) {
                if($org->organization_id == $template->organization_id && $org->role_id == RoleEnum::Admin->value) {
                    return true;
                }
            }
        }
        else if($template->user_id == $user->id) {
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
