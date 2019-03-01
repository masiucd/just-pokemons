<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="/">Poll App</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        @if(!Auth::id())
        <li class="nav-item active">
            <a class="nav-link" href="{{route('login')}} ">Login</a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="{{route('register')}} ">Register</a>
        </li>
        @endif
        <li class="nav-item active">
            <a class="nav-link" href="{{action('PollController@index')}} ">List of Your Polls</a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="{{action('PollController@create')}} ">Create a Poll</a>
        </li>
      </ul>
    </div>
  </nav>


