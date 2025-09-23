<?php

namespace App\Http\Controllers\Org;

use App\Http\Controllers\Package\PackageSimpleResource;
use App\Http\Controllers\Template\TemplateSimpleResource;
use App\Models\Organization;
use App\Models\OrganizationPicture;
use Aventus\Laraventus\Resources\AventusModelResource;

/**
 * @extends AventusModelResource<Organization>
 * @property PackageSimpleResource[] $packages
 * @property TemplateSimpleResource[] $templates
 */
class OrgDetailsResource extends AventusModelResource
{
    public string $name;
    public ?string $bio;
    public ?OrganizationPicture $picture;

    public array $packages = [];
    public array $templates = [];


    protected function bind($item): void
    {
        $this->name = $item->name;
        $this->bio = $item->bio;
        $this->picture = $item->picture;
        $this->packages = PackageSimpleResource::collection($item->packages);
        $this->templates = TemplateSimpleResource::collection($item->templates);
    }
}
