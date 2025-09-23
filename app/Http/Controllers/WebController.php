<?php

namespace App\Http\Controllers;

use App\Http\Resources\Web\IndexResource;
use App\Models\User;
use Aventus\Laraventus\Attributes\NoExport;
use Aventus\Laraventus\Tools\Type;

class WebController
{
    #[NoExport]
    public function index()
    {
        $resource = new IndexResource();
        $resource->user = User::current();
        $resource = Type::enrich($resource);
        return view('index', ["indexResource" => $resource->jsonSerialize()]);
    }
}
