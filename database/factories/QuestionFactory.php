<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(\App\Question::class, function (Faker $faker) {
    $title = $faker->sentence;
    return [
        'title' => $title,
        'slug' => \Illuminate\Support\Str::slug($title),
        'body' => $faker->text,
        'category_id' => function () {
            return \App\Category::all()->random();
        },
        'user_id' => function () {
            return \App\User::all()->random();
        }

    ];
});
