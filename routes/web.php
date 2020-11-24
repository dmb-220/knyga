<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\FarmerController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\UsersController;

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

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});


Route::redirect('/', '/adm');

Auth::routes();

Route::get('/home', [HomeController::class, 'index']);
Route::redirect('/home', '/adm');

Route::get('/adm/', function () {
    if (Auth::check()) {
        return view('admin');
    }
    return redirect('/login');
});

//Ukininkai
Route::prefix('/farmer')->group(function () {
    Route::get('', [FarmerController::class, 'index']);
    Route::get('{farmer}', [FarmerController::class, 'show']);
    Route::post('store', [FarmerController::class, 'store']);
    Route::patch('{farmer}', [FarmerController::class, 'update']);
    Route::delete('{farmer}/destroy', [FarmerController::class, 'destroy']);
});

//Imones
Route::prefix('/company')->group(function () {
    Route::get('', [CompanyController::class, 'index']);
    Route::get('{company}', [CompanyController::class, 'show']);
    Route::post('store', [CompanyController::class, 'store']);
    Route::patch('{company}', [CompanyController::class, 'update']);
    Route::delete('{company}/destroy', [CompanyController::class, 'destroy']);
});

//Saskaitos
Route::prefix('/invoice')->group(function () {
    Route::get('', [InvoiceController::class, 'index']);
    Route::get('{invoice}', [InvoiceController::class, 'show']);
    Route::post('store', [InvoiceController::class, 'store']);
    Route::patch('{invoice}', [InvoiceController::class, 'update']);
    Route::delete('{invoice}/destroy', [InvoiceController::class, 'destroy']);
});


Route::get('/users', [UsersController::class, 'index']);
Route::post('/users', [UsersController::class, 'create']);
