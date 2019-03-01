<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    public function Poll()
    {
        return $this->belongsTo(Poll::class);
    }
}
