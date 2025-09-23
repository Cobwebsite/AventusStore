<?php

namespace App\Http\Controllers\Org\Create;

enum ErrorEnum: int
{
    case NamedUsed = 1;
}