<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;

    protected $fillable = ['rating'];

    function post()
    {
        return $this->belongsTo(Post::class);
    }

    function user()
    {
        return $this->belongsTo(User::class);
    }

    function getPostofRating()
    {
        return $this->post()->first();
    }
}
