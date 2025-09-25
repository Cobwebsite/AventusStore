<?php

namespace App\Http\Controllers\Remote\Package\Publish;

use Aventus\Laraventus\Requests\AventusRequest;
use Illuminate\Http\UploadedFile;

/**
 * Summary of UserStoreRequest
 * @property string[] $tags
 */
class Request extends AventusRequest
{
    public string $name;
    public ?string $description;
    public string $version;
    public ?string $organization;
    public UploadedFile $packageFile;
    public ?UploadedFile $readMe;
    public array $tags = [];
    public ?string $repository;
    public ?string $documentation;
}
