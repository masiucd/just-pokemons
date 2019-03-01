@extends('layouts.layout')

@section('title', 'userpage')
    @include('layouts.navigation')

    @section('content')

        <div class="container h-100">

          <div class="user-profile mx-auto">
                    <h2> {{$user->name}} </h2>
                    <h3> {{$user->email}} </h3>
                    <p> {{$user->email}} </p>
                    <p> {{$user->created_at}} </p>

                    <a href="{{url('/resource/update')}}" class="btn btn-info">update</a>

            </div>
        </div>

    @endsection
