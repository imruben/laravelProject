<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\PostHasTags;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return view('posts.index', [
            'posts' => Post::where('user_id', '!=',  $request->user()->id)->orderBy('created_at', 'desc')->get(),
            'user' => Auth::user(),
            'comments' => Comment::all(),
            'users' => User::where('id', '!=', $request->user()->id)->inRandomOrder()->take(3)->get(),
            'tags' => Tag::all(),
            'tagfilter' => "all",
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
        $validated = $request->validate([
            'content' => 'required|string|max:500',
            'tags' => 'required|array',
        ]);


        $post = new Post;
        // $post->user_id = Auth::user()->id;
        $post->user_id = $request->user()->id;
        $post->title = 'titulo';
        $post->content = $validated['content'];
        // $post->created_at = now();
        $post->save();

        foreach ($validated['tags'] as $tag) {
            $posthastags = new PostHasTags();
            $posthastags->post_id = $post->id;
            $posthastags->tag_id = $tag;
            $posthastags->save();
        }

        // $post->$request->user()->post()->create($validated);
        return redirect(route("posts.index"));
    }

    public function getTimestampPost(Post $post)
    {
        return $post->created_at->format('j M Y, g:i a');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $tagfilter)
    {
        return view('posts.index', [
            'posts' => Post::where('user_id', '!=',  $request->user()->id)->orderBy('created_at', 'desc')->get(),
            'user' => Auth::user(),
            'comments' => Comment::all(),
            'users' => User::where('id', '!=', $request->user()->id)->inRandomOrder()->take(3)->get(),
            'tags' => Tag::all(),
            'tagfilter' => $tagfilter,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        $this->autorize('update', $post);
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
        Post::find($id)->delete($id);

        return response()->json([
            'success' => 'Post eliminado correctamente!'
        ]);
    }
}
