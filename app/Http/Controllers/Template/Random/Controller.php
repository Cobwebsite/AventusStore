<?php

namespace App\Http\Controllers\Template\Random;

use App\Http\Controllers\Template\TemplateSimpleResource;
use App\Models\Template;
use Aventus\Laraventus\Attributes\Rename;
use Aventus\Laraventus\Helpers\AventusError;
use Exception;

#[Rename("TemplateRandomController")]
class Controller
{
    /**
     * @return TemplateSimpleResource[]
     */
    public function request(Request $request): array
    {
        $total = Template::count();

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
            $packages->push(Template::with([
                "user",
                "organization",
                "tags.tag"
            ])->skip($offset)->take(1)->first());
        }

        return TemplateSimpleResource::collection($packages);
    }
}
