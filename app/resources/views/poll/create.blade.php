@extends('name')

@section('content')

<form method="post" action="{{action('')}}">
    @csrf

    <div class="form-group">
        <label for="formGroupExampleInput">Title</label>
        <input type="text" class="form-control" name="title" id="title" placeholder="Title of your Poll">
    </div>
    <div class="form-group">
        <label for="formGroupExampleInput2">Text</label>
        <input type="text" class="form-control" id="text" name="text" placeholder="Text of your Poll">
    </div>
    <div class="form-group">
        <label for="formGroupExampleInput2">Option #1</label>
        <input type="text" class="form-control" id="option1"  name="option1"placeholder="description of option #1">
    </div>
    <div class="form-group">
        <label for="formGroupExampleInput2">Option #2</label>
        <input type="text" class="form-control" id="option2" name="option2"placeholder="description of option #2">
    </div>
</form>

@endsection