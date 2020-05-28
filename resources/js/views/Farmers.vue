<template>

    <div class="no">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Ūkininkai</h1>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->

        <section class="content">
            <div class="container-fluid">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Valdymas</h3>
                    </div>

                    <div class="card-body text-center">
                        <!-- Naujas ūkininkas -->
                        <a v-b-modal.create_farmer class="btn btn-app">
                            <i class="fas fa-file-invoice"></i> Naujas ūkininkas
                        </a>
                        <!-- Ūkio tipas -->
                        <router-link tag="a" to="/farmers_type" class="btn btn-app">
                            <i class="fas fa-th-list"></i> Ūkio tipas
                        </router-link>
                        <!-- Ūkio banda -->
                        <router-link tag="a" to="/farmers_herd" class="btn btn-app">
                            <i class="fa fa-address-card"></i> Banda
                        </router-link>
                    </div>
                    <!-- /.card-body -->
                </div>
                <div class="card card-solid">
                    <div class="card-body pb-0">
                    <div class="row d-flex align-items-stretch">
                        <div v-for="(value, idx) in farmers" :key="idx" class="col-12 col-sm-6 col-md-4  align-items-stretch">
                        <div class="card bg-light">
                            <div class="card-header text-muted border-bottom-0">
                            Valdos numeris: {{value.valdos_nr}}
                            </div>
                            <div class="card-body pt-0">
                            <div class="row">
                                <div class="col-7">
                                <h2 class="lead"><b>{{value.vardas}} {{value.pavarde}}</b></h2>
                                <p class="text-muted text-sm">Gyvulinkystė / Mėsiniai  </p>
                                <ul class="ml-4 mb-0 fa-ul text-muted">
                                    <li class="small"><span class="fa-li"><i class="fas fa-building"></i></span> {{value.adresas}}</li>
                                    <li class="small"><span class="fa-li"><i class="fas fa-phone"></i></span> {{value.telefonas}}</li>
                                    <li class="small"><span class="fa-li"><i class="fas fa-envelope-open-text"></i></span> {{value.email}}</li>
                                </ul>
                                </div>
                                <div class="col-5 text-center">
                                <img src="https://adminlte.io/themes/dev/AdminLTE/dist/img/user2-160x160.jpg" alt="" class="img-circle img-fluid">
                                </div>
                            </div>
                            </div>
                            <div class="card-footer">
                            <div class="text-right">
                                <a href="#" class="btn btn-sm bg-teal">
                                <i class="fas fa-comments"></i>
                                </a>
                                <a href="#" class="btn btn-sm btn-primary">
                                <i class="fas fa-user"></i> Profilis
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>
        <b-modal id="create_farmer" size="lg" title="Naujas ūkininkas"
        ok-title="Išsaugoti"
        cancel-title="Uždaryti"
        no-close-on-esc
        no-close-on-backdrop
        @ok="farmerOk">
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


        <!-- /.content -->

    </div>

</template>

<script>
import { Validator } from 'simple-vue-validator';
export default {
    data() {
        return {
            farmers: [],
            company: {
                id: '',
                company_name: '',
                company_code: '',
                pvm_code: ''
            },
        }
    },
    mounted() {},

    created() {
        this.getFermers()
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

    methods: {
        getFermers() {
        this.axios
        .get('/farmer')
        .then(response => {
            this.farmers = response.data.farmers;
            console.log(response.data.farmers);
        })
        .catch( err => {
            console.log("GET:");
            console.log(err.message);
            })
        },
        farmerOk(bvModalEvt) {
            // Prevent modal from closing
            bvModalEvt.preventDefault()
            this.$validate()
            //.then((success) => {
            .then((success) => {
                if (success) {
                    //this.companies_post();
                    this.$nextTick(() => {
                        this.$bvModal.hide('create_farmer')
                    })
                }
            });
        }, 
    }
}
</script>
