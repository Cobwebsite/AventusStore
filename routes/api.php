<?php

use App\Http\Middlewares\RemoteAuth;
use Illuminate\Support\Facades\Route;

Route::post('/login', [\App\Http\Controllers\Auth\Login\Controller::class, "request"]);
Route::post('/logout', [\App\Http\Controllers\Auth\Logout\Controller::class, "request"]);
Route::get('/validate/{token}', [\App\Http\Controllers\Auth\ValidateEmail\Controller::class, "request"]);
Route::post('/signup', [\App\Http\Controllers\Auth\Signup\Controller::class, "request"]);

Route::post('/package/random', [\App\Http\Controllers\Package\Random\Controller::class, "request"]);
Route::post('/package/search', [\App\Http\Controllers\Package\Search\Controller::class, "request"]);
Route::get('/package/details/{name}', [\App\Http\Controllers\Package\Details\Controller::class, "request"]);

Route::post('/template/random', [\App\Http\Controllers\Template\Random\Controller::class, "request"]);
Route::post('/template/search', [\App\Http\Controllers\Template\Search\Controller::class, "request"]);
Route::get('/template/details/{name}', [\App\Http\Controllers\Template\Details\Controller::class, "request"]);


Route::get('/user/details/{name}', [\App\Http\Controllers\User\Details\Controller::class, "request"]);
Route::get('/user/current', [\App\Http\Controllers\User\Current\Controller::class, "request"]);

Route::get('/orgs/role/{name}', [\App\Http\Controllers\Org\Role\Controller::class, "request"]);
Route::get('/orgs/details/{name}', [\App\Http\Controllers\Org\Details\Controller::class, "request"]);


Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/user/edit_picture', [\App\Http\Controllers\User\EditPicture\Controller::class, "request"]);
    Route::post('/user/edit_bio', [\App\Http\Controllers\User\EditBio\Controller::class, "request"]);
    Route::post('/user/edit_email', [\App\Http\Controllers\User\EditEmail\Controller::class, "request"]);

    Route::post('/org/create', [\App\Http\Controllers\Org\Create\Controller::class, "request"]);
    Route::post('/org/edit_bio', [\App\Http\Controllers\Org\EditBio\Controller::class, "request"]);
    Route::post('/org/edit_picture', [\App\Http\Controllers\Org\EditPicture\Controller::class, "request"]);
});

Route::prefix("remote")->group(function () {
    Route::post('/login', [\App\Http\Controllers\Remote\Auth\Login\Controller::class, "request"]);
    Route::middleware([RemoteAuth::class])->group(function () {
        Route::post('/logout', [\App\Http\Controllers\Remote\Auth\Logout\Controller::class, "request"]);
        Route::post('/package/publish', [\App\Http\Controllers\Remote\Package\Publish\Controller::class, "request"]);
        Route::post('/template/publish', [\App\Http\Controllers\Remote\Template\Publish\Controller::class, "request"]);
    });
});
