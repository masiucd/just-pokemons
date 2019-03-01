@extends('layouts.layout')

@section('content')

<form method="post" action="{{action('PollController@update',$poll->id)}}">
    @csrf
    @method('PUT')
    <div class="form-group">
        <label for="formGroupExampleInput">Title</label>
    <input type="text" class="form-control" name="title" id="title" value="{{$poll->title}}">
    </div>
    <div class="form-group">
        <label for="formGroupExampleInput2">Text</label>
        <input type="text" class="form-control" id="description" name="description" value="{{$poll->description}}">
    </div>
    <div class="form-group">
        <label for="formGroupExampleInput2">Option #1</label>
        <input type="text" class="form-control" id="option1"  name="option[1]" value="{{$poll->options[1]}}">
    </div>
    <div class="form-group">
        <label for="formGroupExampleInput2">Option #2</label>
        <input type="text" class="form-control" id="option2" name="option[2]" value="{{$poll->options[2]}}">
    </div>
    <div class="form-group">
        <label for="formGroupExampleInput2">Option #3</label>
        <input type="text" class="form-control" id="option3" name="option[3]" value="{{$poll->options[3]}}">
    </div>
    <br>
    <div class="form-group">
        <input type="submit" class="form-control" value="Submit Your Poll">
    </div>

</form>

@endsection