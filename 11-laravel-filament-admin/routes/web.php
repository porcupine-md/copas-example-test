<?php
use Illuminate\Support\Facades\Route;
Route::get('/', fn () => response()->json(['example' => '11-laravel-filament-admin', 'admin' => '/admin']));
Route::get('/health', fn () => response()->json(['status' => 'ok']));
