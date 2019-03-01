@extends('layouts.layout')

@section('title', 'userpage')
    @include('layouts.navigation')

    @section('content')

        <div class="container h-100">
                {{-- <h3 class="display-3"> {{$user->name}}'s options  </h3>
            @foreach ($poll->options as $options)
            <blockquote class="blockquote">
                    <h4 class="mb-0"> {{$options->description}} </h4>
                    <footer class="blockquote-footer">  {{$user->name}} <cite title="Source Title"></cite></footer>
                  </blockquote>
            @endforeach --}}

            <div class="jumbotron">
                <h1 class="display-3">{{$user->name }}' options</h1>
            @foreach ($poll->options as $options)
                    <p class="lead">{{$options->description}}</p>
                    <hr class="my-4">
                    <p></p>
                    <p class="lead">
                        @endforeach

                        @if ($poll->id != 0)
                        <a class="btn btn-primary btn-lg" href="{{action('ResourceController@show',$poll->id -1)}}" role="button">back</a>
                        <a class="btn btn-primary btn-lg" href="{{action('ResourceController@show',$poll->id +1)}}" role="button">next</a>
                        @endif
                    </p>
                </div>


        </div>



    @endsection
