@extends('/layout/main')

@section('tittle', $title)
    
@section('container')
    <div class="container">
        <div class="row">
            
        {{-- Card Post --}}

                    {{-- Hero Post --}}
                    <div class="mb-3 mt-4">
                        <a href="/blog/slug"><img src="/asset/img/post/coffee/espresso.jpg" class="card-img-top mt-2" alt=""></a>
                        <div class="card-body text-center">
                        <a href="/blog/slug" style="text-decoration: none; color:black; " ><h5 class="card-title">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h5> </a>
                        <p class="card-text"><small class="text-muted" >By: <a href="" style="text-decoration: none; color:black" >Rifqi Ammar Ramadhan</a> in <a href="" style="text-decoration: none; color:black; ">Coffee</a> <small class="text-muted"> updated 3 mins ago</small></small></p>
                        
                        </div>
                    </div>
                    {{-- End HeroPost --}} 

                    @foreach ($blogs as $blog)
                    {{--Post --}}
                    <div class="mb-3 mt-3" style="max-width: 780px;">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img src="/asset/img/post/coffee/{{ $blog['img'] }}.jpg" class="img-fluid rounded-start" alt="...">
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">{{ $blog['title'] }}</h5>
                              <p class="card-text">{{ $blog['excerpt'] }}</p>
                              <p class="card-text"><small class="text-muted">{{ $blog['time'] }}</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {{--End-Post--}}
                      @endforeach
                    
        </div>
    </div>    
@endsection