<template>
<div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Sąskaitos</h1>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Valdymas</h3>
                </div>

                <div class="card-body text-left">
                    <router-link tag="a" to="/" class="btn btn-app">
                        <i class="fa fa-arrow-left"></i> Atgal
                    </router-link>
                </div>
            </div>
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Sąskaitų sąrašas</h3>
              </div>
              <div class="card-body">
                <b-row>
                <b-col sm="5" md="6" class="my-1">
                    <b-form-group
                    label="Rodyti:"
                    label-cols-sm="6"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label-align-sm="right"
                    label-size="sm"
                    label-for="perPageSelect"
                    class="mb-0"
                    >
                    <b-form-select
                        v-model="perPage"
                        id="perPageSelect"
                        size="sm"
                        :options="pageOptions"
                    ></b-form-select>
                    </b-form-group>
                </b-col>

                <b-col sm="7" md="6" class="my-1">
                    <b-pagination
                    v-model="currentPage"
                    :total-rows="totalRows"
                    :per-page="perPage"
                    align="fill"
                    size="sm"
                    class="my-0"
                    ></b-pagination>
                </b-col>
                </b-row>
                <b-table
                    show-empty
                    small
                    stacked="md"
                    :items="invoices"
                    :fields="fields"
                    :current-page="currentPage"
                    :per-page="perPage"
                    :sort-by.sync="sortBy"
                    :sort-desc.sync="sortDesc"
                    :sort-direction="sortDirection">

                <template v-slot:cell(name)="row">
                    {{ row.value.first }} {{ row.value.last }}
                </template>

                <template v-slot:cell(actions)="row">
                    <b-button @click='edit_invoice(row.item)' size="sm" variant="info">
                    Redaguoti
                    </b-button>
                    <b-button @click='delete_invoice(row.item)' variant="danger" size="sm">
                    Ištrinti
                    </b-button>
                </template>
                </b-table>
              </div>
            </div>
        </div>
        <!-- Redaguojam -->
        <b-modal ref="edit_invoice" size="lg" title="Sąskaitos redagavimas"
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
                    <label class="col-sm-3 col-form-label">Kiekis, mat. vnt:</label>
                    <div class="col-sm-9">
                    <input type="text" v-model='invoice.invoice_amount' class="form-control">
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            invoice: {
                    operation: '',
                    money: '',
                    company_id: '',
                    invoice_data: '',
                    invoice_number: '',
                    operation_name: '',
                    invoice_amount: '',
                    invoice_unit: '',
                    invoice_sum: '',
                    invoice_pvm: ''
                },

            imone: true,
            companies: [],
            invoices: [],
            fields: [
                { key: 'id', label: 'ID', sortable: true, sortDirection: 'desc' },
                { key: 'operation', label: 'Operacija', sortable: true, 
                    formatter: (value, key, item) => {
                        if(value == 1){return "Pardavimas";}
                        if(value == 2){return "Pirkimas";}
                        },
                    },
                { key: 'money', label: 'Pinigai', sortable: true,
                    formatter: (value, key, item) => {
                        if(value == 1){return "Kasa";}
                        if(value == 2){return "Bankas";}
                        if(value == 3){return "Skola";}
                        },
                    },
                { key: 'companies.company_name', label: 'Įmonės pavadinimas', sortable: true, class: 'text-center' },
                { key: 'invoice_data', label: 'Data', sortable: true},
                { key: 'invoice_number', label: 'Sąskaitos numeris', sortable: false},
                { key: 'operation_name', label: 'Operacijos pavadinimas', sortable: true},
                { key: 'invoice_amount', label: 'Kiekis', sortable: false},
                { key: 'invoice_unit', label: 'Mat. vnt.', sortable: false},
                { key: 'invoice_sum', label: 'Suma', sortable: false},
                { key: 'invoice_pvm', label: 'PVM', sortable: false},
                { key: 'actions', label: 'Veiksmai' }
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 5,
            pageOptions: [5, 10, 15, 25, 50, 100],
            sortBy: '',
            sortDesc: false,
            sortDirection: 'asc',
            filter: null,
            filterOn: [],
        }
    },
    mounted() {},

    created() {
        this.getInvoices();
        this.getCompanies();
    },

    methods: {
        edit_invoice(row){
            this.$refs['edit_invoice'].show()
            this.invoice.operation = row.operation;
            this.invoice.money = row.money;
            this.invoice.company_id = row.company_id;
            this.invoice.invoice_number = row.invoice_number;
            this.invoice.invoice_data = row.invoice_data;
            this.invoice.operation_name = row.operation_name;
            this.invoice.invoice_amount = row.invoice_amount;
            this.invoice.invoice_unit = row.invoice_unit;
            this.invoice.invoice_sum = row.invoice_sum;
            this.invoice.invoice_pvm = row.invoice_pvm;
            this.invoice.id = row.id;
            //console.log(row.id);
        },
        delete_invoice(row){
            axios
            .delete(`/invoice/${row.id}/destroy`, {
                })
            .then(response => {
                //console.log(response.data.saskaitos);
                this.$bvToast.toast(`Sąskaitos duomenys ištrinti sėkmingai`, {
                    title: `Atlikta`,
                    variant: "info",
                    solid: true
                })
                this.getInvoices()
            })
            .catch( err => {
            console.log("DELETE:");
            console.log(err.message);
            })
        },
        getCompanies() {
            //this.isLoading = true
            this.axios
            .get('/company')
            .then(response => {
                //this.isLoading = false
                this.companies = response.data.company;
                //console.log(response.data.imones);
            })
            .catch( err => {
                console.log("GET:");
                console.log(err.message);
                })
            },
        getInvoices() {
        //this.isLoading = true
        this.axios
        .get('/invoice')
        .then(response => {
            //this.isLoading = false
            this.invoices = response.data.invoice;
            //sukaiciuojam kiek irasu, puslapiavimui
            this.totalRows = this.invoices.length
            //console.log(response.data.saskaitos);
        })
        .catch( err => {
            console.log("GET:");
            console.log(err.message);
            })
        },
        edit_post(){
            axios
            .patch(`/invoice/${this.invoice.id}`, {
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
                //console.log(response.data.saskaitos);
                this.$bvToast.toast(`Sąskaitos duomenys atnaujinti sėkmingai`, {
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
                this.edit_post();
                // Trigger submit handler
                this.$nextTick(() => {
                    this.$refs['edit_invoice'].hide()
                })
            }, 
    }
}
</script>
