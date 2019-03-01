<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Poll extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function options()
    {
        return $this->hasMany(Option::class);
    }
}
