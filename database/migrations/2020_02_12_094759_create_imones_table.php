<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImonesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('imones', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('ukininkas_id');
            $table->string('imones_pavadinimas');
            $table->string('imones_kodas');
            $table->string('pvm_kodas');
            //$table->text('adresas');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('imones');
    }
}
