<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct()
    {
        // $this->middleware(['auth:sanctum']);
    }
    /**
     * Get info of logged in user.
     *
     * @return \Illuminate\Http\Response
     */
    public function getUserInfo(User $user)
    {
        return $user;
    }

    /**
     * Update user info.
     *
     * @return \Illuminate\Http\Response
     */
    public function updateUserInfo(Request $request, User $user)
    {
        $user->update($request->all());
        return "Updated";
    }
}
