<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Žalia knyga</h1>
                </div>
            </div>
        </div>
            <div class="container-fluid">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Valdymas</h3>
                </div>

                <div class="card-body text-center">
                    <a v-b-modal.create_invoice class="btn btn-app">
                        <i class="fas fa-file-invoice"></i> Įkelti sąskaitą
                    </a>
                    <router-link tag="a" to="/invoices" class="btn btn-app">
                        <i class="fas fa-th-list"></i> Sąskaitos
                    </router-link>
                    <router-link tag="a" to="/companies" class="btn btn-app">
                        <i class="fa fa-address-card"></i> Įmonės
                    </router-link>
                    <a class="btn btn-app">
                        <i class="fas fa-piggy-bank"></i> Bankas
                    </a>
                    <a class="btn btn-app">
                        <i class="fas fa-cash-register"></i> Kasa
                    </a>
                    <a class="btn btn-app">
                        <i class="fas fa-hand-holding-usd"></i> Skolos
                    </a>
                    <a class="btn btn-app">
                        <i class="fas fa-tractor"></i>Ūkininkas
                    </a>
                    <a class="btn btn-app">
                        <i class="fas fa-clipboard-check"></i> Veiklos ataskaita
                    </a>
                    <a class="btn btn-app">
                        <i class="fas fa-tools"></i>Nustatymai
                    </a>
                </div>
                <!-- /.card-body -->
            </div>
            
            <b-modal id="create_invoice" size="lg" title="Sąskaitų įkėlimas"
                ok-title="Išsaugoti"
                cancel-title="Uždaryti"
                no-close-on-esc
                no-close-on-backdrop
                @ok="handleOk">
                    <form class="form-horizontal" @submit.stop.prevent="handleSubmit">
                        <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Operacija:</label>
                        <div class="col-sm-9">
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model='invoice.operation' value="1">
                            <label class="form-check-label">Pardavimai</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model='invoice.operation' value="2">
                            <label class="form-check-label">Pirkimai</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Pinigai:</label>
                        <div class="col-sm-9">
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model='invoice.money' value="1">
                            <label class="form-check-label">Kasa</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model='invoice.money' value="2">
                            <label class="form-check-label">Bankas</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model='invoice.money' value="3">
                            <label class="form-check-label">Skola</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Imonė:</label>
                        <div class="col-sm-9">
                            <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                <input v-model="imone" type="checkbox">
                                </span>
                            </div>
                            <b-form-select v-if="imone" v-model="invoice.company_id" 
                            :options="companies"
                            value-field="id"
                            text-field="company_name">
                            </b-form-select>
                            <!-- PAdaryti 3 input ivesti naujai imonei, arba issokanti langa kur ivesime imone nauja -->
                            <input v-else type="text" v-model="invoice.company_id" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Data:</label>
                        <div class="col-sm-9">
                        <input type="date" v-model='invoice.invoice_data' class="form-control">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Sąskaitos numeris:</label>
                        <div class="col-sm-9">
                        <input type="text" v-model='invoice.invoice_number' class="form-control">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Op. pavadinimas:</label>
                        <div class="col-sm-9">
                        <input type="text" v-model='invoice.operation_name' class="form-control">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Kiekis, mato. vnt:</label>
                        <div class="col-sm-5">
                            <input type="text" v-model='invoice.invoice_amount' class="form-control">
                        </div>
                        <div class="col-sm-4">
                            <select v-model='invoice.invoice_unit'  class="form-control">
                                <option value="0" disabled>Pasirinkite</option>
                                <option value="1">Vienetai</option>
                                <option value="2">Litrai</option>
                                <option value="3">Kilogramai</option>
                                <option value="4">Kubai</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Suma:</label>
                        <div class="col-sm-9">
                        <input type="text" v-model='invoice.invoice_sum' class="form-control">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">PVM:</label>
                        <div class="col-sm-9">
                        <input type="text" v-model='invoice.invoice_pvm' class="form-control">
                        </div>
                    </div>
                </form>
                </b-modal>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">PINIGŲ, PIRKIMO IR PARDAVIMO OPERACIJOS</h3>
                </div>
                <hr>
                <div class="btn-group">
                    <button v-for='(idx, key) in menesiai' :key='key' @click='pasirinkti_menesi(key)' type="button" class="btn"
                    :class="menuo == key ? 'btn-info': 'btn-secondary'">
                        {{ idx }}
                    </button>
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
                        <tr v-for="(idx, key) in sortedData" :key='key'>
                            <td>{{ key+1 }}</td>
                            <td>{{ idx.invoice_data.split('-')[2] }}</td>    
                            <td>{{ idx.invoice_number }}</td>
                            <td>{{ idx.operation_name }}</td>
                            <td>{{ idx.invoice_amount }}</td>
                            <!-- PIRKIMAS -->
                            <td v-if="idx.operation == 2">{{ idx.invoice_sum }}</td>
                            <td v-else> </td>
                            <td v-if="idx.operation == 2">{{ idx.invoice_pvm }}</td>
                            <td v-else> </td>
                            <!-- PARDAVIMAS -->
                            <td v-if="idx.operation == 1">{{ idx.invoice_sum }}</td>
                            <td v-else> </td>
                            <td v-if="idx.operation == 1">{{ idx.invoice_pvm }}</td>
                            <td v-else> </td>

                            <td> </td>
                            <!-- KASA -->
                            <td v-if="idx.money == 1 && idx.opertion == 1">{{ idx.invoice_sum }}</td>
                            <td v-else> </td>
                            <td v-if="idx.money == 1 && idx.operation == 2">{{ idx.invoice_sum }}</td>
                            <td v-else> </td>
                            <!-- BANKAS -->
                            <td v-if="idx.money == 2 && idx.operation == 1">{{ idx.invoice_sum }}</td>
                            <td v-else> </td>
                            <td v-if="idx.money == 2 && idx.operation == 2">{{ idx.invoice_sum }}</td>
                            <td v-else> </td>
                            <!-- SKOLOS -->
                            <td class="bg-danger" v-if="idx.money == 3 && idx.operation == 1">{{ idx.invoice_sum }}</td>
                            <!-- <td class="bg-success" v-else-if="idx.money == 2 && idx.operation == 1">{{ idx.invoice_sum }} €</td> -->
                            <td v-else> </td>
                            <td class="bg-danger" v-if="idx.money == 3 && idx.operation == 2">{{ idx.invoice_sum }}</td>
                            <!-- <td class="bg-success" v-else-if="idx.money == 2 && idx.operation == 2">{{ idx.invoice_sum }}</td> -->
                            <td v-else> </td>
                            <td> </td>

                            <td>{{ idx.company.company_name }}</td> 
                            <td>{{ idx.company.company_code }}</td> 
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
                menesiai: ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 
                'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'],
                men: new Date().getMonth(),
                menuo: new Date().getMonth(),
                metai: new Date().getFullYear(),
                set_metai: 2020,

                invoice: {
                    operation: '',
                    money: '',
                    company_id: '',
                    invoice_data: '',
                    invoice_number: '',
                    operation_name: '',
                    invoice_amount: '',
                    invoice_unit: '0',
                    invoice_sum: '',
                    invoice_pvm: ''
                },
                //ivesti, arba pasirinkti imonę is saraso
                //ivedus, nauj1 imone, ja irasyti i duomenu baze, ir priskirti jai ID
                imone: true,
                companies: [],
                invoices: [],
            }
        },
        computed: {
            sortedData: function() {
            function compare(a, b) {
                if (a.invoice_data < b.invoice_data)
                return -1;
                if (a.invoice_data > b.invoice_data)
                return 1;
                return 0;
            }

            return this.invoices.sort(compare);
            }
        },
        mounted(){
            this.menuo = this.men;
        },

        created() {
            this.getCompanies();
            this.getInvoices();
        },

        methods: {
            pasirinkti_menesi(menesis){
                //DAR TIKRINTI IR METUS NES UZ 2019 TURI LEISTI RINKTI VISUS MENESIUS
                if(this.metai == this.set_metai){
                    if(menesis <= this.men){
                        this.menuo = menesis;
                        this.getInvoices();
                        this.$bvToast.toast(`${this.menesiai[menesis]} pasirinktas`, {
                            title: `Atlikta`,
                            variant: "info",
                            solid: true
                        })
                    }else{
                    this.$bvToast.toast(`${this.menesiai[menesis]} negalite rinktis!`, {
                            title: `Įspėjimas`,
                            variant: "warning",
                            solid: true
                        }) 
                    }
                }else{
                    this.menuo = menesis;
                    this.getInvoices();
                    this.$bvToast.toast(`${this.menesiai[menesis]} pasirinktas`, {
                        title: `Atlikta`,
                        variant: "info",
                        solid: true
                    })
                }
            },
            getCompanies() {
            //this.isLoading = true
            this.axios
            .get('/company')
            .then(response => {
                //this.isLoading = false
                this.companies = response.data.company;
                console.log(response.data.company);
            })
            .catch( err => {
                console.log("GET:");
                console.log(err.message);
                })
            },
            getInvoices() {
            this.axios
            .get(`/invoice?month=${this.menuo+1}`)
            .then(response => {
                this.invoices = response.data.invoice;
            })
            .catch( err => {
                 this.$bvToast.toast(`Klaida: ${err.message}`, {
                        title: `Klaida`,
                        variant: "danger",
                        solid: true
                    }) 
                })
            },
            invoice_post(){
                axios
                .post(`/invoice/store`, {
                    operation: this.invoice.operation,
                    money: this.invoice.money,
                    company_id: this.invoice.company_id,
                    invoice_data: this.invoice.invoice_data,
                    invoice_number: this.invoice.invoice_number,
                    operation_name: this.invoice.operation_name,
                    invoice_amount: this.invoice.invoice_amount,
                    invoice_unit: this.invoice.invoice_unit,
                    invoice_sum: this.invoice.invoice_sum,
                    invoice_pvm: this.invoice.invoice_pvm
                    })
                .then(response => {
                    this.$bvToast.toast(`Nauja sąskaita įkelta`, {
                        title: `Atlikta`,
                        variant: "info",
                        solid: true
                    })
                    this.getInvoices()
                })
                .catch( err => {
                console.log("POST:");
                console.log(err.message);
                })
            },
              
            handleOk(bvModalEvt) {
                // Prevent modal from closing
                bvModalEvt.preventDefault()
                this.invoice_post();
                // Trigger submit handler
                this.$nextTick(() => {
                this.$bvModal.hide('create_invoice')
                })
            },        
        }
    }
</script>
