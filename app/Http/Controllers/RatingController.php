<?php

namespace App\Http\Controllers;

use App\Models\Rating;
use Illuminate\Http\Request;

class RatingController extends Controller
{

    public function likePost(Request $request, $idpost)
    {
        //check if user has already liked or disliked the post
        $rating = Rating::where('user_id', $request->user()->id)->where('post_id', $idpost)->first();

        if ($rating != null) {
            $rating->delete();
        }

        $rating = new Rating();
        $rating->user_id = $request->user()->id;
        $rating->post_id = $idpost;
        $rating->rating = 'like';

        $rating->save();

        return redirect(route("posts.index"));
    }


    public function dislikePost(Request $request, $idpost)
    {
        //check if user has already liked or disliked the post
        $rating = Rating::where('user_id', $request->user()->id)->where('post_id', $idpost)->first();

        if ($rating != null) {
            $rating->delete();
        }

        $rating = new Rating();
        $rating->user_id = $request->user()->id;
        $rating->post_id = $idpost;
        $rating->rating = 'dislike';

        $rating->save();

        return redirect(route("posts.index"));
    }
}
