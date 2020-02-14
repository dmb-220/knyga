<?php

namespace App\Http\Controllers;

use App\Imones;
use Illuminate\Http\Request;

class ImonesController extends Controller
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
            'imones' => Imones::all(),
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
        $imones = new Imones;
        $imones->ukininkas_id = 1;
        $imones->imones_pavadinimas = $request->pavadinimas;
        $imones->imones_kodas = $request->kodas;
        $imones->pvm_kodas = $request->pvm;
        $imones->save();

        return response()->json([
            'status' => true,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Imones  $imones
     * @return \Illuminate\Http\Response
     */
    public function show(Imones $imones)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Imones  $imones
     * @return \Illuminate\Http\Response
     */
    public function edit(Imones $imones)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Imones  $imones
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Imones $imones)
    {
        $update = [
            'imones_pavadinimas' => $request->pavadinimas, 
            'imones_kodas' => $request->kodas,
            'pvm_kodas' => $request->pvm,
        ];
        Imones::where('id',$imones->id)->update($update);

        return response()->json([
            'status' => true,
            //'saskaitos' => $request->all()
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Imones  $imones
     * @return \Illuminate\Http\Response
     */
    public function destroy(Imones $imones)
    {
        Imones::where('id',$imones->id)->delete();
        return response()->json([
            'status' => true,
            //'saskaitos' => $request->all()
        ]);
    }
}
