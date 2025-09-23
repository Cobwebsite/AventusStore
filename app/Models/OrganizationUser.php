<?php

namespace App\Models;

use Aventus\Laraventus\Models\AventusModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $user_id
 * @property User $user
 * @property int $organization_id
 * @property Organization $organization
 * @property int $role_id
 * @property Role $role
 */
class OrganizationUser extends AventusModel
{

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [];


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, "user_id");
    }
    public function organization(): BelongsTo
    {
        return $this->belongsTo(Organization::class, "organization_id");
    }
    public function role(): BelongsTo
    {
        return $this->belongsTo(Role::class, "role_id");
    }
}
