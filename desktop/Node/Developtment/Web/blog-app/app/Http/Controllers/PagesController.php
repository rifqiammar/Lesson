<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function home()
    {
        return view('home', [
            'title' => 'Halaman Home', 
            'active' => "Home",
        ]);
    }

    public function about()
    {
        return view('about', [
            'title' => 'Halaman About',
            'active' => "About",
        ]);
    }
}
