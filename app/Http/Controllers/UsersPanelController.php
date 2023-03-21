<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UsersPanelController extends Controller
{

    public function index(Request $request)
    {
        if (Auth::user()->getRolId() == 1) {
            return view('adminpanels.userspanel', [
                'users' => User::all(),
            ]);
        } else {
            return redirect()->route('posts.index');
        }

        return view('adminpanels.userspanel', [
            'users' => User::all(),
        ]);
    }
}
