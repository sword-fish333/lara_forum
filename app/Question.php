<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Question extends Model
{
    protected $guarded=['created_at','updated_at'];

    protected $with=['replies'];
    protected static function boot(){
        parent::boot();
        static::creating(function($question){
            $question->slug=Str::slug($question->title);
        });
    }
    public function user(){
        return $this->belongsTo(User::class);
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function replies(){
        return $this->hasMany(Reply::class)->latest();
    }


    public function getRouteKeyName()
    {
        return 'slug';
    }

//    public function setTitleAttribute($value)
//    {
//        $this->attributes['title'] = $value;
//        $this->attributes['slug'] = Str::slug($value);
//    }

    public function getPathAttribute(){
        return "/question/$this->slug";
    }
}
