<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('farmer_id');
            $table->unsignedBigInteger('company_id');
            $table->unsignedBigInteger('invoice_unit');
            $table->integer('operation');
            $table->integer('money');
            $table->date('invoice_data');
            $table->string('invoice_number');
            $table->text('operation_name');
            $table->string('invoice_amount');
            $table->float('invoice_sum', 8, 2);
            $table->float('invoice_pvm', 8, 2);
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
        Schema::dropIfExists('invoices');
    }
}
