<template>
<div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Įmonės</h1>
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
                    <button type="button" v-b-modal.create_company class="btn btn-app btn-warning">
                        <i class="far fa-plus-square"></i> Nauja įmonė
                        </button>
                </div>
                <!-- /.card-body -->
            </div>
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Įmonių sąrašas</h3>
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
                    :items="companies"
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
                    <b-button @click='edit_company(row.item)' size="sm" variant="info">
                    Redaguoti
                    </b-button>
                    <b-button @click='delete_company(row.item)' variant="danger" size="sm">
                    Ištrinti
                    </b-button>
                </template>
                </b-table>
              </div>
            </div>
        </div>
        <b-modal id="create_company" size="lg" title="Įmonių įkėlimas"
        ok-title="Išsaugoti"
        cancel-title="Uždaryti"
        no-close-on-esc
        no-close-on-backdrop
        @ok="companyOk">
        <form class="form-horizontal"> 
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Pavadinimas:</label>
                <div class="col-sm-9">
                    <input type="text" v-model.trim="company.company_name" class="form-control"
                    :class="{'is-invalid': validation.hasError('company.company_name')}">
                    <div class="text-danger">{{ validation.firstError('company.company_name') }}</div>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Įmonės kodas:</label>
                <div class="col-sm-9">
                <input type="text" v-model.trim="company.company_code" class="form-control"
                    :class="{'is-invalid': validation.hasError('company.company_code')}">
                    <div class="text-danger">{{ validation.firstError('company.company_code') }}</div>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">PVM kodas:</label>
                <div class="col-sm-9">
                <input type="text" v-model.trim="company.pvm_code" class="form-control"
                    :class="{'is-invalid': validation.hasError('company.pvm_code')}">
                    <div class="text-danger">{{ validation.firstError('company.pvm_code') }}</div>
                </div>
            </div>
        </form>
    </b-modal>
    <b-modal ref="edit_company" size="lg" title="Įmonių redagavimas"
        ok-title="Išsaugoti"
        cancel-title="Uždaryti"
        no-close-on-esc
        no-close-on-backdrop
        @ok="companyEdit">
        <form class="form-horizontal">
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Pavadinimas:</label>
                <div class="col-sm-9">
                <input type="text" v-model="company.company_name" class="form-control">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Įmonės kodas:</label>
                <div class="col-sm-9">
                <input type="text" v-model="company.company_code" class="form-control">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">PVM kodas:</label>
                <div class="col-sm-9">
                <input type="text" v-model='company.pvm_code' class="form-control">
                </div>
            </div>
        </form>
    </b-modal>
</div>
</template>

<script>
import { Validator } from 'simple-vue-validator';
export default {
    data() {
        return {
            ok: false,
            company: {
                id: '',
                company_name: '',
                company_code: '',
                pvm_code: ''
            },
            companies: [],
            fields: [
                { key: 'id', label: 'ID', sortable: true, sortDirection: 'desc' },
                { key: 'company_name', label: 'Įmonės pavadinimas', sortable: true, class: 'text-center' },
                { key: 'company_code', label: 'Įmonės kodas', sortable: false},
                { key: 'pvm_code', label: 'PVM kodas', sortable: false},
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
    validators: {
      'company.company_name': function(value) {
        return Validator.value(value)
        .minLength(5, 'Per trumpas pavadinimas')
        .required('Įrašykite įmonės pavadinimą');
        //.regex('^[A-Za-z0-9 -]*$', 'Naudojami neleistini simboliai');
      },
      'company.company_code': function(value) {
        return Validator.value(value)
        .minLength(9, 'Per trumpas kodas')
        .required('Įrašykite įmonės kodą')
        .regex('^[0-9]*$', 'Naudojami neleistini simboliai');
      },
      'company.pvm_code': function(value) {
        return Validator.value(value)
        .minLength(11, 'Per trumpas PVM kodas')
        .required('Įrašykite PVM kodą')
        .regex('^[A-Za-z0-9]*$', 'Naudojami neleistini simboliai');
      },
    },
    mounted() {},

    created() {
        this.getCompanies()
    },

    methods: {
        edit_company(row){
            this.$refs['edit_company'].show()
            this.company.company_name = row.company_name;
            this.company.company_code = row.company_code;
            this.company.pvm_code = row.pvm_code;
            this.company.id = row.id;
            //console.log(row.id);
        },
        delete_company(row){
            axios
            .delete(`/company/${row.id}/destroy`, {
                })
            .then(response => {
                //console.log(response.data.saskaitos);
                this.$bvToast.toast(`Įmonės duomenys ištrinti sėkmingai`, {
                    title: `Atlikta`,
                    variant: "info",
                    solid: true
                })
                this.getCompanies()
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
            //sukaiciuojam kiek irasu, puslapiavimui
            this.totalRows = this.companies.length
            console.log(response.data.company);
        })
        .catch( err => {
            console.log("GET:");
            console.log(err.message);
            })
        },
        edit_post(){
            axios
            .patch(`/company/${this.company.id}`, {
                company_name: this.company.company_name,
                company_code: this.company.company_code,
                pvm_code: this.company.pvm_code,
                })
            .then(response => {
                //console.log(response.data.saskaitos);
                this.$bvToast.toast(`Įmonės duomenys atnaujinti sėkmingai`, {
                    title: `Atlikta`,
                    variant: "info",
                    solid: true
                })
                this.getCompanies()
            })
            .catch( err => {
            console.log("POST:");
            console.log(err.message);
            })
        },
        companies_post(){
            axios
            .post(`/company/store`, {
                company_name: this.company.company_name,
                company_code: this.company.company_code,
                pvm_code: this.company.pvm_code,
                })
            .then(response => {
                console.log(response.data.status)
                this.getCompanies()
            })
            .catch( err => {
            console.log("POST:");
            console.log(err.message);
            })
        },
        companyOk(bvModalEvt) {
            // Prevent modal from closing
            bvModalEvt.preventDefault()
            this.$validate()
            .then(function (success) {
                if (success) {
                    this.ok = true;
                    console.log("VEIKIA");
                }else{console.log("NEVEIKIA");}
            });
            if(this.ok){
                this.companies_post();
                    // Trigger submit handler
                    console.log("VEIKIA 2");
                    console.log(this.ok);
                    this.$nextTick(() => {
                    this.$bvModal.hide('create_company')
                    })
                    console.log("VEIKIA 3");
            }
            //this.companies_post();
            // Trigger submit handler
            //this.$nextTick(() => {
            //this.$bvModal.hide('create_company')
            //})
        }, 
        companyEdit(bvModalEvt) {
            // Prevent modal from closing
            bvModalEvt.preventDefault()
            this.edit_post();
            // Trigger submit handler
            this.$nextTick(() => {
                this.$refs['edit_company'].hide()
            })
        }, 
    }
}
</script>
