<?php

namespace App\Http\Controllers\Remote\Template\Publish;

use Aventus\Laraventus\Requests\AventusRequest;
use Illuminate\Http\UploadedFile;

/**
 * @property string[] $tags
 */
class Request extends AventusRequest
{
    public string $name;
    public ?string $description;
    public string $version;
    public bool $is_project;
    public ?string $organization;
    public UploadedFile $templateFile;
    public ?UploadedFile $readMe;
    public ?array $tags = [];
    public ?string $repository;
    public ?string $documentation;
}
