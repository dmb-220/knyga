<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSaskaitosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('saskaitos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('ukininkas_id');
            $table->integer('operacija');
            $table->integer('pinigai');
            $table->unsignedBigInteger('imones_id');
            $table->date('data');
            $table->string('numeris');
            $table->text('op_pavadinimas');
            $table->string('kiekis');
            $table->float('suma', 8, 2);
            $table->float('pvm', 8, 2);
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
        Schema::dropIfExists('saskaitos');
    }
}
