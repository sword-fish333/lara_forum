<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResource('/category','CategoryController');
Route::apiResource('/question','QuestionController');
Route::apiResource('/{question}/reply','ReplyController');


Route::post('/like/{reply}','LikeController@likeIt');
Route::delete('/like/{reply}','LikeController@unLikeIt');

Route::group([

    'prefix' => 'auth'

], function () {
    Route::post('signup', 'AuthController@signup');
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('payload', 'AuthController@payload');

});
