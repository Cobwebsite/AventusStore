<?php

namespace App\Http\Controllers\Remote\Template\Publish;

enum ErrorEnum: int
{
    case AuthenticationError = 1;
    case UserNotFound = 2;
    case OrganizationNotFound = 3;
    case NameMissedMatch = 4;
    case VersionMissedMatch = 5;
    case VersionBigger = 6;
    case Forbidden = 7;
}