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

    function getTimestampPost()
    {
        // return $this->created_at->format('j M Y, g:i a');
        $olddate = $this->created_at;
        $now = time();                  //pick present time from server     
        $old = strtotime($olddate);  //create integer value of old time
        $diff =  $now - $old;             //calculate difference
        $old = $this->created_at;
        $old = $old->format('Y M d');       //format date to "2015 Aug 2015" format
        $timestamp = '';
        if ($diff / 60 < 1)                       //check the difference and do echo as required
        {
            $timestamp =  round(intval($diff % 60)) . " seconds ago";
        } else if (intval($diff / 60) == 1) {
            $timestamp =  " 1 minute ago";
        } else if ($diff / 60 < 60) {
            $timestamp = round(($diff / 60)) . " minutes ago";
        } else if (intval($diff / 3600) == 1) {
            $timestamp =  "1 hour ago";
        } else if ($diff / 3600 < 24) {
            $timestamp =  round(intval($diff / 3600)) . " hours ago";
        } else if ($diff / 86400 < 30) {
            $timestamp =  round(intval($diff / 86400)) . " days ago";
        } else {
            $timestamp =  $old;  ////format date to "2015 Aug 2015" format
        }
        return $timestamp;


        // dd(gettype($this->message));
    }
}
