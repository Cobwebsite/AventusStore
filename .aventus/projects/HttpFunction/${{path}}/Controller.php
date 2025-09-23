<?php

namespace ${{_namespace}};

use Aventus\Laraventus\Attributes\Rename;

#[Rename("${{rename}}")]
class Controller
{
    public function request(Request $request): Error|Response
    {
        

        return new Response();
    }
}
