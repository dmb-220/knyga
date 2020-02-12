<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::redirect('/', '/adm');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::redirect('/home', '/adm');

Route::get('/adm/', function () {
    if (Auth::check()) {
        return view('admin');
    }
    return redirect('/login');

});

//Route::resource('/imones', 'ImonesController');
Route::prefix('/imones')->group(function () {
    Route::get('', 'ImonesController@index');
    Route::get('{imones}', 'ImonesController@show');
    Route::post('store', 'ImonesController@store');
    Route::patch('{imones}', 'ImonesController@update');
    Route::delete('{imones}/destroy', 'ImonesController@destroy');
});
Route::resource('/saskaitos', 'SaskaitosController');

Route::get('/users', 'UsersController@index');
Route::post('/users', 'UsersController@create');
