<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\PagesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Halaman Statis
Route::get('/', [PagesController::class, 'home']);
Route::get('/about', [PagesController::class, 'about']);


// Halaman Blog
Route::get('/blog', [BlogController::class, 'index']);

// Route::get('/blog/{blog:slug}', [BlogController::class, 'show']);
Route::get('/blog/slug', function(){
    return view('/blog/post', [
        'title' => 'Judul',
        'active' => "Blog"
    ]);
});

Route::get('/category', function(){
    return view('/blog/category', [
        'title' => 'Judul',
        'active' => "Category"
    ]);
});


