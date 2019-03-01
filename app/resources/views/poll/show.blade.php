@extends('layouts.layout')
@section('title', 'Detail of a Poll')

@include('layouts.navigation')
@section('content')


<div class="jumbotron jumbotron-fluid">
    <div class="container">
    <h1 class="display-3">{{$poll->titel}}</h1>
        <p class="lead">{{$poll->description}}</p>
        @foreach ($poll->options as $options)
        <a href="">{{$options->description}}</a>
        <p>{{$options->votes}}</p><br>         
        @endforeach
    </div>
</div>

@endsection