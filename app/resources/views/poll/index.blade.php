@extends('layouts.layout')

@section('content')

<table class="table">
    <thead class="thead-dark">
        <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($poll as $item)

        <tr>
            <th scope="row">{{ $poll }}</th>
            <td>{{$item->title}}</td>
            <td>{{$item->description}}</td>
        </tr>
            
        @endforeach

    </tbody>
</table>


@endsection