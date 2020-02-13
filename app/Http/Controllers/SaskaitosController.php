<?php

namespace App\Http\Controllers;

use App\Saskaitos;
use Illuminate\Http\Request;

class SaskaitosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            'status' => true,
            'saskaitos' => Saskaitos::with(['imones' => function($q){
                return $q->select('imones_pavadinimas');
            }])->get(),
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
        $saskaitos = new Saskaitos;
        $saskaitos->ukininkas_id = 1;
        $saskaitos->operacija = $request->operacija;
        $saskaitos->pinigai = $request->pinigai;
        $saskaitos->imones_id = $request->imones_pavadinimas;
        $saskaitos->data = $request->data;
        $saskaitos->numeris = $request->numeris;
        $saskaitos->op_pavadinimas = $request->op_pavadinimas;
        $saskaitos->kiekis = $request->kiekis;
        $saskaitos->suma = $request->suma;
        $saskaitos->pvm = $request->pvm;
        $saskaitos->save();

        return response()->json([
            'status' => true,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Saskaitos  $saskaitos
     * @return \Illuminate\Http\Response
     */
    public function show(Saskaitos $saskaitos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Saskaitos  $saskaitos
     * @return \Illuminate\Http\Response
     */
    public function edit(Saskaitos $saskaitos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Saskaitos  $saskaitos
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Saskaitos $saskaitos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Saskaitos  $saskaitos
     * @return \Illuminate\Http\Response
     */
    public function destroy(Saskaitos $saskaitos)
    {
        //
    }
}
