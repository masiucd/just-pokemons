<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Poll;
use App\Option;

class PollController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // dd(Auth::id());
        $polls = Poll::where('user_id', Auth::id())->get();
        $list = view('poll.index',compact('polls'));
        return $list;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $form = view('poll.create');
        return $form;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $poll = new Poll;
        
        


        // $this->validate($request, [
        //     'title' => 'required|min:10',
        //     'text' => 'required',
        //     'option1' => 'required',
        //     'option2' => 'required'
        // ]);

        $poll->fill($request->only([
            'title', 
            'description'
        ]));
        $poll->user_id = Auth::id();     
        $poll->save();


        foreach($request->option as $o){
            $option = new Option;
            $option->description = $o;
            $option->poll_id = $poll->id;
            $option->votes = 0;
            $option->save();
        }

        return redirect(action('PollController@index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $poll = Poll::find($id);

        $detail = view('poll.show',compact('poll'));
        return $detail;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
        $poll = Poll::findOrFail($id);
        $options = Option::where($poll->id, 'user_id');
        foreach($request->options as $option){
            $options = Option::where($poll->id, 'user_id');
        }

        $poll = $poll->update($request->all());



        return redirect(action('PollController@update',$poll->id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $poll = Poll::findOrFail($id);

        $poll->delete();

        return redirect(action('PollController@index'));
    }
}
