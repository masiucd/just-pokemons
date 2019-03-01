@extends('layouts.layout')

@section('content')

<form method="post" action="{{action('PollController@store')}}">
    @csrf

    <div class="form-group">
        <label for="formGroupExampleInput">Title</label>
        <input type="text" class="form-control" name="title" id="title" placeholder="Title of your Poll">
    </div>
    <div class="form-group">
        <label for="formGroupExampleInput2">Text</label>
        <input type="text" class="form-control" id="description" name="description" placeholder="Text of your Poll">
    </div>
    <div class="form-group">
        <label for="formGroupExampleInput2">Option #1</label>
        <input type="text" class="form-control" id="option1"  name="option[1]"placeholder="description of option #1">
    </div>
    <div class="form-group">
        <label for="formGroupExampleInput2">Option #2</label>
        <input type="text" class="form-control" id="option2" name="option[2]"placeholder="description of option #2">
    </div>
    <div class="form-group">
        <label for="formGroupExampleInput2">Option #3</label>
        <input type="text" class="form-control" id="option3" name="option[3]"placeholder="description of option #3">
    </div>
    <br>
    <div class="form-group">
        <input type="submit" class="form-control" value="Submit Your Poll">
    </div>

</form>

@endsection