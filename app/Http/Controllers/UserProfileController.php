<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;
use App\Models\Rating;
use Illuminate\View\View;

class UserProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request): View
    {
        return view('userprofile.index', [
            'user' => $request->user(),
            'users' => User::where('id', '!=', $request->user()->id)->inRandomOrder()->take(3)->get(),
            'posts' => Post::where('user_id', $request->user()->id)->orderBy('created_at', 'desc')->paginate(5),
            'filter' => 'all',
        ]);
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $username)
    {
        $user = User::where('username', $username)->firstOrFail();
        $filter = $request->filter;

        $posts = Post::where('user_id', $user->id)->orderBy('created_at', 'desc')->paginate(5);

        if ($filter == 'likes') {
            $userRatings = $user->rating;
            $postsLiked = [];
            foreach ($userRatings as $rating) {
                if ($rating->rating == "like") {
                    $postsLiked[] =  $rating->post_id;
                }
            }

            $posts = Post::whereIn('id', $postsLiked)->orderBy('created_at', 'desc')->get();
        } elseif ($filter == 'dislikes') {
            $userRatings = $user->rating;
            $postsDisliked = [];
            foreach ($userRatings as $rating) {
                if ($rating->rating == "dislike") {
                    $postsDisliked[] =  $rating->post_id;
                }
            }

            $posts = Post::whereIn('id', $postsDisliked)->orderBy('created_at', 'desc')->get();
        } elseif ($filter == 'comments') {
        }



        return view('userprofile.index', [
            'user' => $user,
            'users' => User::where('id', '!=', $user->id)->inRandomOrder()->take(3)->get(),
            'posts' => $posts,
            'filter' => $filter ?? 'all',
            'comments' => $user->comment,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
