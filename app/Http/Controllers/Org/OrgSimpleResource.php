<?php

namespace App\Http\Controllers\Org;

use App\Http\Controllers\Package\PackageSimpleResource;
use App\Models\Organization;
use App\Models\UserPicture;
use Aventus\Laraventus\Attributes\Rename;
use Aventus\Laraventus\Resources\AventusModelResource;
use DateTime;

/**
 * @extends AventusModelResource<Organization>
 * @property PackageSimpleResource[] $packages
 */
class OrgSimpleResource extends AventusModelResource
{
    public string $name;
    public ?string $bio;
    public ?UserPicture $picture;

    public array $packages = [];


    protected function bind($item): void
    {
        $this->name = $item->name;
        $this->bio = $item->bio;
        $this->picture = $item->picture;
        $this->packages = PackageSimpleResource::collection($item->packages);
    }
}
