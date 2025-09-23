<?php

namespace App\Http\Controllers\Auth\Login;

enum ErrorEnum: int
{
    case ValidationError = 422;
    case ValidateEmailFirst = 302;
}