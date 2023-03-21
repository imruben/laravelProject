<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'email',
        'password',
    ];


    public function post()
    {
        return $this->hasMany(Post::class);
    }

    public function comment()
    {
        return $this->hasMany(Comment::class);
    }

    public function rating()
    {
        return $this->hasMany(Rating::class);
    }


    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getAvatar()
    {
        if (str_contains($this->avatar, 'http')) {
            return $this->avatar;
        } else {
            return '/uploads/avatars/' . $this->avatar;
        }
    }

    public function getNumberofPosts()
    {
        return $this->post()->count();
    }
    public function getNumberofComments()
    {
        return $this->comment()->count();
    }
    public function getNumberofLikes()
    {
        return $this->rating()->where('rating', "like")->count();
    }
    public function getNumberofDislikes()
    {
        return $this->rating()->where('rating', "dislike")->count();
    }
}
