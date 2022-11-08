@extends('layout.main')

@section('title', $title)
    
@section('container')
    <div class="container">
        <div class="col">
            <h1 class="mt-4">{{ $title }}</h1>
        </div>
    </div>
@endsection