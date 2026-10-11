<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TaskController extends Controller 
{
    private $tasks = [
        ['id' => 1, 'title' => 'Aprender arquitectura modular en Laravel', 'completed' => false],
        ['id' => 2, 'title' => 'Conectar Laravel con el portafolio Full Stack', 'completed' => false],
    ];

    public function index()
    {
        return response()->json([
            'status' => 'success',
            'data' => $this->tasks
        ], 200);
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
        ]);

        $newTask = [
            'id' => count($this->tasks) +1,
            'title' => $validated['title'],
            'completed' => false
        ];

        return response()->json([
            'status' => 'success',
            'message' => 'Tarea creada exitosamente',
            'data' => $newTask
        ], 201);
    }

}