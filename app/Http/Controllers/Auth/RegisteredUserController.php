<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\View\View;
use App\Models\Post;
use App\Models\Comment;
use App\Models\Rating;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): View
    {
        return view('auth.register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            // 'name' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:255', 'unique:' . User::class],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:' . User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()->min(4)],
        ]);

        $user = User::create([
            // 'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'rol_id' => 2,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }

    public function destroy(User $user)
    {

        $user->delete();
        Post::where('user_id', $user->id)->delete();
        Comment::where('user_id', $user->id)->delete();
        Rating::where('user_id', $user->id)->delete();
        return redirect()->route('admin.userspanel');
    }
}
