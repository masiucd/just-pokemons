@extends('layouts.layout')

@section('title')
    @include('layouts.navigation')

    @section('content')
    <div class="container">
    <h1 class="display-1"> All the votes </h1>

    <div>
        <ul>
        @foreach ($users as $user)
            <li> {{$user->name}} </li>
            <li> {{$user->email}} </li>
        @endforeach
        </ul>
    </div>

</div>
    @endsection
