<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PioController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\UserProfileController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\UsersPanelController;
use App\Models\User;
use Illuminate\Support\Facades\Artisan;

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
    Route::post('rating/like/{id}', [RatingController::class, 'likePost'])->name('rating.likepost');
    Route::post('rating/dislike/{id}', [RatingController::class, 'dislikePost'])->name('rating.dislikepost');
    Route::post('comments/{id}', [CommentController::class, 'store'])->name('comments.store');
    Route::delete('posts/{id}', [PostController::class, 'destroy'])->name('post.destroy');
});
Route::resource('userprofile', UserProfileController::class)
    ->only(['index', 'store', 'edit', 'update', 'show'])
    ->middleware(['auth']);

Route::resource('posts', PostController::class)
    ->only(['index', 'show', 'store', 'edit', 'update', 'getTimestampPost'])
    ->middleware(['auth']);

Route::get('migrate', function () {
    Artisan::call('migrate:fresh', [
        '--seed' => true,
    ]);

    return redirect()->route('posts.index');
});

// Rutas administrador
Route::get('userspanel', [UsersPanelController::class, 'index'])->name('admin.userspanel')->middleware('auth');
Route::delete('userspanel/delete/{user}', [RegisteredUserController::class, 'destroy'])->name('admin.userspanel.destroy')->middleware('auth');



require __DIR__ . '/auth.php';
