<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Imones;

class Saskaitos extends Model
{
    protected $table = 'saskaitos';
    //protected $fillable = ['imones_pavadinimas'];

    public function imones(){
        return $this->belongsTo(Imones::class, 'imones_id');
    }
}
