@extends('layouts.layout')

@section('content')

<table class="table">
    <thead class="thead-dark">
        <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Detail</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($polls as $poll)

        <tr>
            <th scope="row">{{ $poll->id }}</th>
            <td>{{$poll->title}}</td>
            <td>{{$poll->description}}</td>
            <td><form method="GET" action="{{action('PollController@edit',$poll->id)}}">
                    @csrf
                <input type="submit" value="Edit"></form></td>
            <td><form method="POST" action="{{action('PollController@destroy',$poll->id)}}">
                @method('DELETE')
                @csrf
            <input type="submit" value="Delete"></form></td>
            <td><form method="GET" action="{{action('PollController@show',$poll->id)}}">
                    @csrf
                <input type="submit" value="Detail"></form><td>
        </tr>
            
        @endforeach

    </tbody>
</table>


@endsection