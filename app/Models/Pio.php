<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pio extends Model
{
    use HasFactory;

    protected $fillable = ['message'];

    function user()
    {
        return $this->belongsTo(User::class);
    }
}
