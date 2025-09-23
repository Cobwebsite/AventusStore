<?php

namespace App\Http\Controllers\Org;

use App\Http\Controllers\Package\PackageSimpleResource;
use App\Models\Organization;
use App\Models\OrganizationPicture;
use App\Models\OrganizationUser;
use App\Models\UserPicture;
use Aventus\Laraventus\Attributes\Rename;
use Aventus\Laraventus\Resources\AventusModelResource;
use DateTime;

/**
 * @extends AventusModelResource<OrganizationUser>
 * @property PackageSimpleResource[] $packages
 */
class OrgUserResource extends AventusModelResource
{
    public string $name;
    public string $role;
    public ?string $bio;
    public ?OrganizationPicture $picture;

    protected function bind($item): void
    {
        $this->role = $item->role->name;
        $this->name = $item->organization->name;
        $this->bio = $item->organization->bio;
        $this->picture = $item->organization->picture;
    }
}
