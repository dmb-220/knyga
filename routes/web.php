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
    if (Auth::check()) {return view('admin');}
    return redirect('/login');
});

Route::prefix('/company')->group(function () {
    Route::get('', 'CompanyController@index');
    Route::get('{company}', 'CompanyController@show');
    Route::post('store', 'CompanyController@store');
    Route::patch('{company}', 'CompanyController@update');
    Route::delete('{company}/destroy', 'CompanyController@destroy');
});

Route::prefix('/invoice')->group(function () {
    Route::get('', 'InvoiceController@index');
    Route::get('{invoice}', 'InvoiceController@show');
    Route::post('store', 'InvoiceController@store');
    Route::patch('{invoice}', 'InvoiceController@update');
    Route::delete('{invoice}/destroy', 'InvoiceController@destroy');
});


Route::get('/users', 'UsersController@index');
Route::post('/users', 'UsersController@create');
