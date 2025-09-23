<?php

namespace App\Http\Controllers\Package\Random;

use App\Http\Controllers\Package\PackageSimpleResource;
use App\Models\Package;
use Aventus\Laraventus\Attributes\Rename;

#[Rename("PackageRandomController")]
class Controller
{
    /**
     * @return PackageSimpleResource[]
     */
    public function request(Request $request): array
    {
        $total = Package::count();

        $nb = min($request->number, $total);

        $offsets = [];
        while (count($offsets) < $nb) {
            $rand = random_int(0, $total - 1);
            if (!in_array($rand, $offsets)) {
                $offsets[] = $rand;
            }
        }

        $packages = collect();
        foreach ($offsets as $offset) {
            $packages->push(Package::with([
                "user",
                "organization",
                "tags.tag"
            ])->skip($offset)->take(1)->first());
        }

        return PackageSimpleResource::collection($packages);
    }
}
