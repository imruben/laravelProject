<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PioController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\UserProfileController;

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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::redirect('/', 'login');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::resource('userprofile', UserProfileController::class)
    ->only(['index', 'store', 'edit', 'update', 'show'])
    ->middleware(['auth', 'verified']);

Route::post('rating/like/{id}', [RatingController::class, 'likePost'])->name('rating.likepost');

Route::post('rating/dislike/{id}', [RatingController::class, 'dislikePost'])->name('rating.dislikepost');

// Route::patch('rating/{id}', [RatingController::class, 'rating'])->name('rating.dislike');


// Route::get('/user/profile/{username}', [UserProfileController::class, 'indexUser'])->name('user.profile');

Route::resource('posts', PostController::class)
    ->only(['index', 'store', 'edit', 'update', 'getTimestampPost'])
    ->middleware(['auth', 'verified']);

Route::delete('posts/{id}', [PostController::class, 'destroy'])->name('post.destroy');

require __DIR__ . '/auth.php';
