<?php

namespace App\Http\Controllers\Package;

use App\Enums\RoleEnum;
use App\Models\Package;
use App\Models\User;
use Aventus\Laraventus\Resources\AventusModelResource;

/**
 * @extends AventusModelResource<Package>
 */
class PackageDetailsResource extends AventusModelResource
{
    public string $name;
    public string $description;
    public string $version;
    public int $downloads;
    public string $fromName;
    public ?string $fromImg;
    public string $isUser;
    public string $readme;
    public array $tags = [];
    public bool $isOwner = false;
    public ?string $repos;
    public ?string $doc;

    protected function bind($item): void
    {
        $this->name = $item->name;
        $this->description = $item->description;
        $this->version = $item->version;
        $this->downloads = $item->downloads;
        $this->readme = $item->readme;
        $this->repos = $item->repos;
        $this->doc = $item->doc;

        if ($item->user != null) {
            $this->fromName = $item->user->username;
            $this->fromImg = $item->user->picture?->uri;
            $this->isUser = true;

            $currentUser = User::current();
            if ($currentUser?->id == $item->user_id) {
                $this->isOwner = true;
            }
        } else if ($item->organization != null) {
            $this->fromName = $item->organization->name;
            $this->fromImg = $item->organization->picture?->uri;
            $this->isUser = false;

            $currentUser = User::current();
            if ($currentUser != null) {
                $orgs = $currentUser->organizations;
                foreach ($orgs as $org) {
                    if ($org->organization_id == $item->organization_id && $org->role_id == RoleEnum::Admin->value) {
                        $this->isOwner = true;
                        break;
                    }
                }
            }
        }

        foreach ($item->tags as $tag) {
            $this->tags[] = $tag->tag->name;
        }
    }
}
