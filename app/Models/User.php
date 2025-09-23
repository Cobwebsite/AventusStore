<?php

namespace App\Models;

use App\Casts\ToBoolCast;
use Aventus\Laraventus\Models\AventusModel;
use DateTime;
use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\HasApiTokens;

/**
 * @property int $id
 * @property string $username
 * @property string $email
 * @property ?string $bio
 * @property string $password
 * @property bool $verified
 * @property ?UserPicture $picture
 * @property string $token_action
 * @property DateTime $created_date
 * @property OrganizationUser[] organizations
 * @property Package[] $packages
 * @property Template[] $templates
 */
class User extends AventusModel implements AuthenticatableContract, AuthorizableContract
{
    use HasApiTokens, Authenticatable, Authorizable;

    private static User|null $_current = null;
    public static int|null $_current_id = null;
    public static function current(): User|null
    {
        if (!isset(self::$_current)) {
            if (!isset(self::$_current_id)) {
                $user = Auth::user();
                if ($user) {
                    self::$_current = User::where('id', $user->id)->first();
                }
            } else {
                self::$_current = User::where('id', self::$_current_id)->first();
            }
        }
        return self::$_current;
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'username',
        'email',
        'bio',
        'password',
        'verified',
        'token_action'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'verified',
        'token_action',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'verified' => ToBoolCast::class,
            'picture' => UserPicture::class,
            'created_date' => 'datetime'
        ];
    }


    public function organizations(): HasMany
    {
        return $this->hasMany(OrganizationUser::class, "user_id");
    }

    public function packages(): HasMany
    {
        return $this->hasMany(Package::class, "user_id");
    }

    public function templates(): HasMany
    {
        return $this->hasMany(Template::class, "user_id");
    }
}
