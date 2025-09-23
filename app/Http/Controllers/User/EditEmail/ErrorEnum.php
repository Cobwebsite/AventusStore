<?php

namespace App\Http\Controllers\User\EditEmail;

enum ErrorEnum: int
{
    case ValidationError = 422;
}