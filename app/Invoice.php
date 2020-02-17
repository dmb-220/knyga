<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    public function company(){
        return $this->belongsTo(Company::class, 'imones_id');
    }
}
