<?php

namespace App\Http\Controllers;

use App\Invoice;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = $request->all();

        $query = Invoice::with(['company']);
        //jei nurodytas menesis
        if(array_key_exists('month', $data) && $data['month']){
            $query->whereMonth('data', $data['month']);
        }
        $invoice = $query->get();

        return response()->json([
            'status' => true,
            'invoice' => $invoice,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $q = new Invoice;
        $q->farmer_id = 1;
        $q->company_id = $request->company_id;
        $q->operation = $request->operation;
        $q->money = $request->money;
        $q->invoice_data = $request->invoice_data;
        $q->invoice_number = $request->invoice_number;
        $q->operation_name = $request->operation_name;
        $q->invoice_amount = $request->invoice_amount;
        $q->invoice_unit = $request->invoice_amount;
        $q->invoice_sum = $request->invoice_sum;
        $q->invoice_pvm = $request->invoice_pvm;
        $q->save();

        return response()->json([
            'status' => true,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function show(Invoice $invoice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function edit(Invoice $invoice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Invoice $invoice)
    {
        $update = [
            'company_id' => $request->company_id,
            'operation' => $request->operation, 
            'money' => $request->money,
            'invoice_data' => $request->invoice_data,
            'invoice_number' => $request->invoice_number,
            'operation_name' => $request->operation_name,
            'invoice_amount' => $request->invoice_amount,
            'invoice_unit' => $request->invoice_unit,
            'invoice_sum' => $request->invoice_sum,
            'invoice_pvm' => $request->invoice_pvm
        ];
        Invoice::where('id',$invoice->id)->update($update);

        return response()->json([
            'status' => true,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function destroy(Invoice $invoice)
    {
        Invoice::where('id',$invoice->id)->delete();
        return response()->json([
            'status' => true,
        ]);
    }
}
