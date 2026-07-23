<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'example' => '06-laravel-php',
        'message' => 'Hello from Laravel and MySQL',
        'checks' => DB::table('deploy_checks')->orderBy('id')->get(),
    ]);
});

Route::get('/health', fn () => response()->json(['status' => 'ok']));
