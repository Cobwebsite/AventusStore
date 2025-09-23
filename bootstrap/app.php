<?php

use Aventus\Laraventus\Exceptions\AventusExceptionCatcher;
use Aventus\Laraventus\Middlewares\AventusAttributesMiddleware;
use Aventus\Laraventus\Middlewares\AventusMiddleware;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        // $middleware->statefulApi();
        $middleware->prependToGroup('api', [
            EncryptCookies::class,
            AddQueuedCookiesToResponse::class,
            StartSession::class,
            ShareErrorsFromSession::class,
        ]);
        $middleware->append(AventusMiddleware::class);
        $middleware->appendToGroup('api', AventusAttributesMiddleware::class);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        AventusExceptionCatcher::use($exceptions);
    })->create();
