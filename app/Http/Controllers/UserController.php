<?php

namespace App\Http\Controllers;

// use App\Models\User;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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
        $request->validate([
            'name' => 'required',
            'lastname' => 'required',
            'email' => 'required|email',
            // 'password' => 'min:8'
        ]);

        $values = [
            'name' => $request->name,
            'lastname' => $request->lastname,
            'email' => $request->email,
        ];

        if ($request->password) {
            $values['password'] = Hash::make($request->password);
        }

        $user->update($values);
        return Response($user);
    }
}
