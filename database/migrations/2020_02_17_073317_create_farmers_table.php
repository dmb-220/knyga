<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFarmersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('farmers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('vardas');
            $table->string('pavarde');
            $table->string('valdos_nr');
            $table->string('viclt');
            $table->string('VIC_vartotojo_vardas');
            $table->string('VIC_slaptazodis');
            $table->string('user_id');
            $table->string('asmens_kodas');
            $table->text('adresas');
            $table->string('saskaitos_nr');
            $table->string('bankas');
            $table->string('email');
            $table->string('telefonas');
            $table->string('banda');
            $table->string('ukio_tipas');
            $table->string('dydis');
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
        Schema::dropIfExists('farmers');
    }
}
