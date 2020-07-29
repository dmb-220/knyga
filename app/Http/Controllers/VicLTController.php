<?php

namespace App\Http\Controllers;

use App\VicLT;
use Illuminate\Http\Request;

class VicLTController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data1 = $this->input->post('data1');
        $data2 = $this->input->post('data2');

        $menesis = explode("-", $data2);
        $menesis = $menesis[1];

        $metai = explode("-", $data2);
        $metai = $metai[0];

        $gyvi_url = "https://www.vic.lt:8102/pls/gris/private.gyvuliu_sarasas";
        $visi_url = "https://www.vic.lt:8102/pls/gris/private.laikytojo_gyvuliai_frame";

        //$ukis = $this->ukininkai_model->ukininkas($ukininkas);
        //$auth = $ukis[0]['VIC_vartotojo_vardas'].":".$ukis[0]['VIC_slaptazodis'];

        $post1 = ['v_data' => $data2, 'v_rus' => 1];
        $post2 = ['v_nuo' => $data1,'v_iki' => $data2, 'v_rus' => 1];

        $page = VicLT::get_VIC($gyvi_url, $post1, $auth);
        $page2 = VicLT::get_VIC($visi_url, $post2, $auth);

        $data_gyvi = VicLT::Gyvi_gyvunai($page['content']);
        $data_visi = VicLT::Visi_gyvunai($page2['content']);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\VicLT  $vicLT
     * @return \Illuminate\Http\Response
     */
    public function show(VicLT $vicLT)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\VicLT  $vicLT
     * @return \Illuminate\Http\Response
     */
    public function edit(VicLT $vicLT)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\VicLT  $vicLT
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, VicLT $vicLT)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\VicLT  $vicLT
     * @return \Illuminate\Http\Response
     */
    public function destroy(VicLT $vicLT)
    {
        //
    }
}
