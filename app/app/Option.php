<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    protected $fillable = ['option'];

    public function Poll()
    {
        return $this->belongsTo(Poll::class);
    }
}
