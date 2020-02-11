<template>
<div>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Žalia knyga</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="container-fluid">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Valdymas</h3>
                </div>

                <div class="card-body text-center">
                    <router-link tag="a" to="/saskaitos" class="btn btn-app">
                        <i class="fa fa-edit"></i> Sąskaitos
                    </router-link>
                    <a class="btn btn-app">
                        <i class="fa fa-play"></i> Įmonės
                    </a>
                    <a class="btn btn-app">
                        <i class="fa fa-repeat"></i> Bankas
                    </a>
                    <a class="btn btn-app">
                        <i class="fa fa-pause"></i> Kasa
                    </a>
                    <a class="btn btn-app">
                        <i class="fa fa-save"></i> Skolos
                    </a>
                    <a class="btn btn-app">
                        <i class="fa fa-inbox"></i>Ūkininko duomenys
                    </a>
                    <a class="btn btn-app">
                        <i class="fa fa-envelope"></i> Veiklos ataskaita
                    </a>
                </div>
                <!-- /.card-body -->
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">PINIGŲ, PIRKIMO IR PARDAVIMO OPERACIJOS</h3>
                </div>
                <hr>
                <div class="btn-group">
                        <button type="button" class="btn btn-default">Sausis</button>
                        <button type="button" class="btn btn-default">Vasaris</button>
                        <button type="button" class="btn btn-default">Kovas</button>
                        <button type="button" class="btn btn-default">Balandis</button>
                        <button type="button" class="btn btn-default">Gegužė</button>
                        <button type="button" class="btn btn-default">Birželis</button>
                        <button type="button" class="btn btn-default">Liepa</button>
                        <button type="button" class="btn btn-default">Rugpjūtis</button>
                        <button type="button" class="btn btn-default">Rugsėjis</button>
                        <button type="button" class="btn btn-default">Spalis</button>
                        <button type="button" class="btn btn-default">Lapkritis</button>
                        <button type="button" class="btn btn-default">Gruodis</button>
                      </div>
                      <hr>
                <div class="card-body text-center">
                    <table class="table table-sm">
                        <thead>
                                <tr>
                                    <th rowspan="3">Eil. nr.</th>
                                    <th rowspan="3">Diena</th>
                                    <th rowspan="3">Dokumento nr.</th>
                                    <th rowspan="3">Op. pavadinimas</th>
                                    <th rowspan="3">Kiekis</th>
                                    <th colspan="2">Pirkimas</th>
                                    <th colspan="2">Pardavimas</th>
                                    <th rowspan="3"> </th>
                                    <th colspan="4">Pinigai</th>
                                    <th colspan="3">Skolos</th>
                                    <th rowspan="3">Įmonės pavadinimas</th>
                                    <th rowspan="3">Įmonės kodas</th>
                                </tr>
                                <tr>
                                    <th rowspan="2">Suma </th>
                                    <th rowspan="2">PVM</th>
                                    <th rowspan="2">Suma</th>
                                    <th rowspan="2">PVM</th>
                                    <th colspan="2">Kasa</th>
                                    <th colspan="2">Bankas</th>
                                    <th rowspan="2">Ūkininkui</th>
                                    <th rowspan="2">Ūkininko</th>
                                    <th rowspan="2">Atsiskaitymo data</th>
                                </tr>
                                <tr>
                                    <th>Pajamos</th>
                                    <th>Išlaidos</th>
                                    <th>Pajamos</th>
                                    <th>Išlaidos</th>
                                </tr>
                                
                            </thead>
                        <tbody>
                        <tr>
                            <td> </td>
                            <td>1</td>    
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td> 
                            <td>16</td>

                        </tr>        
                        <tr class="bg-yellow">
                            <td colspan="4">Pradinis likutis</td>
                            <td>x</td>    
                            <td>x</td>
                            <td>x</td>
                            <td>x</td>
                            <td>x</td>
                            <td>x</td>
                            <td>462,86</td>
                            <td>x</td>
                            <td>12,61</td>
                            <td>x</td>
                            <td>0.00</td>
                            <td>x</td>
                            <td>x</td>
                            <td></td>
                            <td></td> 
                        </tr>
                        <tr v-for="(qua, key) in row" :key='key'>
                            <td>{{ qua }}</td>
                            <td>1/31</td>    
                            <td>Mokėjimas banke</td>
                            <td>Paėmimas savo reikėms</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>1522,37</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td> 
                            <td> </td> 
                        </tr> 
                        <tr class="bg-teal">
                            <td class="bg-white border-0" colspan="2"></td>
                            <td colspan="2">Iš viso per mėnesį</td>
                            <td>x</td>    
                            <td>x</td>
                            <td>x</td>
                            <td>x</td>
                            <td>x</td>
                            <td>x</td>
                            <td>462,86</td>
                            <td>x</td>
                            <td>12,61</td>
                            <td>1522,37</td>
                            <td>x</td>
                            <td>x</td>
                            <td>x</td> 
                        </tr> 
                        <tr class="bg-yellow">
                            <td class="bg-white border-0" colspan="2"></td>
                            <td colspan="2">Likutis mėnesio pabaigoje</td>
                            <td>x</td>    
                            <td>x</td>
                            <td>x</td>
                            <td>x</td>
                            <td>x</td>
                            <td>x</td>
                            <td>462,86</td>
                            <td>x</td>
                            <td>12,61</td>
                            <td>x</td>
                            <td>0.00</td>
                            <td>x</td>
                            <td>x</td> 
                        </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<style>
.table > thead > tr > th {
     vertical-align: middle;
    }
</style>

<script>

    export default {

        data() {

            return {
                row: ['1', '2', '3', '4', '5', '6', '7'],
            }

        },


        created() {
            
        },

        methods: {
            
    }
    }
</script>
