@extends('layouts.layout')

@section('title')
    @include('layouts.navigation')

    @section('content')
    <div class="container">
    <h1 class="display-1">users </h1>


    <div>

        @foreach ($users as $user)
            <h3> {{$user->name}} </h3>
        @endforeach
            <a href="{{url('/poll/create')}} " class="btn btn-info my-4 ">Vote</a>

    </div>


            <h4 class="display-4"> polls</h4>

            <div class="row">
            @foreach ($polls as $poll)
            <div class="col-md-4">
                <div class="card border-primary mb-3" style="max-width: 20rem;">
                        <div class="card-header"> {{$poll->title}} </div>
                        <div class="card-body">
                            <h4 class="card-title"> {{$poll->title}} </h4>
                            <p class="card-text"> {{$poll->description}} </p>
                        </div>
                        <a href="{{action('ResourceController@show',$poll->id)}}" class="btn btn-info">details</a>
                    </div>
                </div>
                @endforeach
        </div>

        {{-- <h4 class="display-4">All the available Options</h4>
            <ul>
        @foreach ($options as $option)
                <li> {{$option->description}} </li>
        @endforeach
        </ul> --}}
</div>
    @endsection
