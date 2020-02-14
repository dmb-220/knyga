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
    public function index(Request $request)
    {
        $data = $request->all();

        //reikia uzdeti kriteju kad rinkti ir pagal nustatytus metus
        $query = Saskaitos::with(['imones']);
        //jei nurodytas menesis
        if(array_key_exists('menesis', $data) && $data['menesis']){
            $query->whereMonth('data', $data['menesis']);
        }
        $saskaitos = $query->get();

        return response()->json([
            'status' => true,
            'saskaitos' => $saskaitos,
            //'menesis' => $data['menesis']
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
        /*$query = Saskaitos::with(['imones']);
        $query->where('id', $request->$saskaitos);
        $saskaitos = $query->get();

        return response()->json([
            'status' => true,
            'saskaitos' => $saskaitos,
            //'menesis' => $data['menesis']
        ]);*/
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
        $update = [
            'operacija' => $request->operacija, 
            'pinigai' => $request->pinigai,
            'imones_id' => $request->imones_id,
            'data' => $request->data,
            'numeris' => $request->numeris,
            'op_pavadinimas' => $request->op_pavadinimas,
            'kiekis' => $request->kiekis,
            'suma' => $request->suma,
            'pvm' => $request->pvm
        ];
        Saskaitos::where('id',$saskaitos->id)->update($update);

        return response()->json([
            'status' => true,
            //'saskaitos' => $request->all()
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Saskaitos  $saskaitos
     * @return \Illuminate\Http\Response
     */
    public function destroy(Saskaitos $saskaitos)
    {
        Saskaitos::where('id',$saskaitos->id)->delete();
        return response()->json([
            'status' => true,
            //'saskaitos' => $request->all()
        ]);
    }
}
