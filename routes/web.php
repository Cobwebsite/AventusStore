<?php

use App\Http\Controllers\WebController;
use App\Mail\ConfirmAccountMail;
use App\Mail\Generic\MailData;
use App\Models\User;
use Aventus\Laraventus\Resources\TextResponse;
use Illuminate\Support\Facades\Route;



Route::get('/login', [WebController::class, "index"])->name("login");

Route::get('/', [WebController::class, "index"]);

Route::get('/package/download/{name}/{version}', [\App\Http\Controllers\Package\Download\Controller::class, "request"]);
Route::get('/template/download/{name}/{version}', [\App\Http\Controllers\Template\Download\Controller::class, "request"]);

Route::match(["get"], '/{any}', [WebController::class, "index"])->where('any', '.*');
