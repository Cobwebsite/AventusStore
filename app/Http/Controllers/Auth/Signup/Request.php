<?php

namespace App\Http\Controllers\Auth\Signup;

use Aventus\Laraventus\Requests\AventusRequest;

/**
 * 
 */
class Request extends AventusRequest
{
    public string $username;
    public string $email;
    public string $password;


    public function rules(): array
    {
        return [
            'username' => ['required', 'unique:organizations,name', 'unique:users,username'],
        ];
    }
}
