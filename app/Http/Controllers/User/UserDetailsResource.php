<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Org\OrgSimpleResource;
use App\Http\Controllers\Org\OrgUserResource;
use App\Http\Controllers\Package\PackageSimpleResource;
use App\Http\Controllers\Template\TemplateSimpleResource;
use App\Models\User;
use App\Models\UserPicture;
use Aventus\Laraventus\Attributes\Rename;
use Aventus\Laraventus\Resources\AventusModelResource;
use DateTime;

/**
 * @extends AventusModelResource<User>
 * @property PackageSimpleResource[] $packages
 * @property TemplateSimpleResource[] $templates
 * @property OrgUserResource[] $organizations
 */
class UserDetailsResource extends AventusModelResource
{
    public string $username;
    public string $email;
    public ?string $bio;
    public ?UserPicture $picture;
    public DateTime $created_date;

    public array $packages = [];
    public array $templates = [];
    public array $organizations = [];


    protected function bind($item): void
    {
        $this->username = $item->username;
        $this->email = $item->email;
        $this->bio = $item->bio;
        $this->picture = $item->picture;
        $this->packages = PackageSimpleResource::collection($item->packages);
        $this->templates = TemplateSimpleResource::collection($item->templates);
        $this->organizations = OrgUserResource::collection($item->organizations);
        $this->created_date = $item->created_date;
    }
}
