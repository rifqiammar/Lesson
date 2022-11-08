<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\UpdateBlogRequest;
use App\Models\Blog;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $blog = [[ 
            'title' => 'London to Paris',
            'excerpt' => 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            'slug' => '',
            'img' => 'espresso',
            'body' => '',
            'time' => 'Last updated 3 mins ago' ],
            ['title' => 'London to Paris',
            'excerpt' => 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            'slug' => '',
            'img' => 'espresso',
            'body' => '',
            'time' => 'Last updated 3 mins ago']
        ];

        return view('blog.posts', [
            'title' => 'Halaman Blog',
            'active' => 'Blog',
            'blogs' => $blog
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
      

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreBlogRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBlogRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function show(Blog $blog)
    {
        return view('', [
            'title' => 'Judul',
            'active' => "blog"
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function edit(Blog $blog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateBlogRequest  $request
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateBlogRequest $request, Blog $blog)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function destroy(Blog $blog)
    {
        //
    }
}
