<?php

namespace App\Http\Controllers\Package\Search;

use App\Http\Controllers\Package\PackageSimpleResource;
use App\Models\Package;
use Aventus\Laraventus\Attributes\Rename;
use Illuminate\Database\Eloquent\Builder;

#[Rename("PackageSearchController")]
class Controller
{
    /**
     * @return Error|PackageSimpleResource[]
     */
    public function request(Request $request): Error|array
    {
        if ($request->txt == "") {
            return PackageSimpleResource::collection([]);
        }
        $explodedFilters = preg_split('/( |\')/', $request->txt);
        $query = Package::with([
            "user",
            "organization",
            "tags.tag"
        ]);
        $tags = [];
        $groupByFilter = null;
        $query->where(function ($query) use (&$explodedFilters, &$tags) {
            for ($i = 0; $i < count($explodedFilters); $i++) {
                $explodedFilter = $explodedFilters[$i];

                if (str_starts_with($explodedFilter, "#")) {
                    $tags[] = substr($explodedFilter, 1);
                    array_splice($explodedFilters, $i);
                    $i--;
                    continue;
                }

                $query->orWhere('packages.name', 'LIKE', '%' . $explodedFilter . '%')
                    ->orWhere('users.username', 'LIKE', '%' . $explodedFilter . '%')
                    ->orWhere('organizations.name', 'LIKE', '%' . $explodedFilter . '%');
            }
        });


        if (count($explodedFilters) > 0) {
            // calcule le poids de chaque résultat avec le nombre d'itération du mot dans le retour
            $ordersFilters = [];
            $bindings = [];
            for ($i = 0; $i < count($explodedFilters); $i++) {
                $explodedFilter = $explodedFilters[$i];

                $ordersFilters[] = "CASE WHEN (LENGTH(packages.name) - LENGTH(REPLACE(LOWER(packages.name), ?, ''))) > 0 THEN " . (strlen($explodedFilter) * 2) . " ELSE 0 END";
                $bindings[] = $explodedFilter;

                // si match total on met plus fort que le nom
                $ordersFilters[] = "CASE WHEN users.username = ? THEN " . (strlen($explodedFilter) * 3) . " ELSE 0 END";
                $bindings[] = $explodedFilter;

                $ordersFilters[] = "CASE WHEN users.username != ? AND (LENGTH(users.username) - LENGTH(REPLACE(LOWER(users.username), ?, ''))) > 0 THEN " . strlen($explodedFilter) . " ELSE 0 END";
                $bindings[] = $explodedFilter;
                $bindings[] = $explodedFilter;

                // si match total on met plus fort que le nom
                $ordersFilters[] = "CASE WHEN organizations.name = ? THEN " . (strlen($explodedFilter) * 3) . " ELSE 0 END";
                $bindings[] = $explodedFilter;

                $ordersFilters[] = "CASE WHEN organizations.name != ? AND (LENGTH(organizations.name) - LENGTH(REPLACE(LOWER(organizations.name), ?, ''))) > 0 THEN " . strlen($explodedFilter) . " ELSE 0 END";
                $bindings[] = $explodedFilter;
                $bindings[] = $explodedFilter;
            }


            $groupByFilter = [
                'sql' => implode(" + ", $ordersFilters) . ' DESC',
                'bindings' => $bindings,
            ];
        }

        if (count($tags) > 0) {
            $query->whereHas('tags.tag', function (Builder $subquery) use ($tags) {
                // $query->whereHas('tags', function (Builder $subquery) use ($tags) {});
                $subquery->whereIn('name',  $tags);
            });
        }

        $query->leftJoin('users', function ($join) {
            $join->on('users.id', '=', 'packages.user_id');
        });
        $query->leftJoin('organizations', function ($join) {
            $join->on('organizations.id', '=', 'packages.organization_id');
        });

        if ($groupByFilter != null) {
            $query->orderByRaw($groupByFilter['sql'], $groupByFilter['bindings']); // score selon recherche
        }

        $query->selectRaw('packages.*');

        $packages = $query
            ->skip($request->offset)
            ->take($request->limit)
            ->get();

        // $result = [];
        // for ($i = 0; $i < 21; $i++) {
        //     foreach($packages as $p) {
        //         $result[] = $p;
        //     }
        // }

        return PackageSimpleResource::collection($packages);
    }
}
