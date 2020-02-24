<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    protected $guarded=[];

    public function likes(){
        return $this->hasMany(Like::class,'reply_id');
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

}
