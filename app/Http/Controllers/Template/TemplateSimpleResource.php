<?php

namespace App\Http\Controllers\Template;

use App\Models\Template;
use Aventus\Laraventus\Resources\AventusModelResource;

/**
 * @extends AventusModelResource<Template>
 * @property string[] $tags
 */
class TemplateSimpleResource extends AventusModelResource
{
    public string $name;
    public string $description;
    public string $version;
    public int $downloads;
    public string $fromName;
    public ?string $fromImg;
    public string $isUser;
    public array $tags = [];

    protected function bind($item): void
    {
        $this->name = $item->name;
        $this->description = $item->description;
        $this->version = $item->version;
        $this->downloads = $item->downloads;

        if ($item->user != null) {
            $this->fromName = $item->user->username;
            $this->fromImg = $item->user->picture?->uri;
            $this->isUser = true;
        } else if ($item->organization != null) {
            $this->fromName = $item->organization->name;
            $this->fromImg = $item->organization->picture?->uri;
            $this->isUser = false;
        }

        foreach ($item->tags as $tag) {
            $this->tags[] = $tag->tag->name;
        }
    }
}
