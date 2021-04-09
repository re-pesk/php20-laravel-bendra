<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

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

/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
return $request->user();
});
 */
/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
return $request->user();
});*/

// Route::get('/search', [MaterialController::class, 'searchMaterials']);
Route::get('/users/{user}', [UserController::class, 'getUserInfo']);
Route::put('/users/{user}', [UserController::class, 'updateUserInfo']);
