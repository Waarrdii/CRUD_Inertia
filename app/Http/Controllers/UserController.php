<?php

namespace App\Http\Controllers;

use App\Http\Resources\UsersResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('User/UserIndex', [
            'users' => UsersResource::collection(User::all())->resolve(),
        ]);
    }

    public function create ()
    {
        return Inertia::render('User/UserCreate');
    }

    public function store(Request $request)
    {
        $user = User::create($request->all());

        return redirect(route('users.index'));
    }
}
