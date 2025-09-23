<?php

namespace App\Http\Controllers\Remote\Auth\Login;

enum ErrorEnum: int
{
    case ValidationError = 422;
    case ValidateEmailFirst = 302;
}