<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostHasTags extends Model
{
    use HasFactory;

    function post()
    {
        return $this->belongsTo(Post::class);
    }

    function tag()
    {
        return $this->belongsTo(Tag::class);
    }
}
