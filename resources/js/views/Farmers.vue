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

        <!-- naujas ūkininkas, LANGAS -->
        <b-modal id="create_farmer" size="lg" title="Naujas ūkininkas"
        ok-title="Išsaugoti"
        cancel-title="Uždaryti"
        no-close-on-esc
        no-close-on-backdrop
        @ok="farmerOk">
        <ValidationObserver ref="form" v-slot="{ passes }">
        <form class="form-horizontal"> 
              <div class="form-row">
                <div class="form-group col-md-6">
                <ValidationProvider rules="required|min:3|max:15" name="Name" v-slot="{ valid, errors }">
                    <b-form-group label="Vardas:" label-for="name">
                    <b-form-input
                        type="text"
                        v-model="farmer.name"
                        :state="errors[0] ? false : (valid ? true : null)"
                        placeholder="Įveskite vardą"
                    ></b-form-input>
                    <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                </ValidationProvider>
                </div>
                <div class="form-group col-md-6">
                <ValidationProvider rules="required|min:3|max:15" name="Subname" v-slot="{ valid, errors }">
                    <b-form-group label="Pavardė:" label-for="subname">
                    <b-form-input
                        type="text"
                        v-model="farmer.subname"
                        :state="errors[0] ? false : (valid ? true : null)"
                        placeholder="Įveskite pavardę"
                    ></b-form-input>
                    <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                </ValidationProvider>
                </div>
            </div>
            <div class="form-group">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="farmer.vic_lt">
                <label class="form-check-label">
                    AR TURITE PRIEIGĄ PRIE VIC.LT?
                </label>
                <br>
                <small>Pažymėkitę varnelę, ir galėsite suvesti, VIC.LT prisijungimo duomenis. Jie reikalingi gauti duomanis apie laikomus galvijus ir / arba deklaruojamus plotus. </small>
                </div>
            </div>
            <div v-show="farmer.vic_lt" class="form-row">
                <div class="form-group col-md-6">
                <ValidationProvider rules="`${farmer.vic_lt ? 'required|min:3|max:15' : ''}`" name="Username" v-slot="{ valid, errors }">
                    <b-form-group label="Vartotojo vardas:" label-for="username">
                    <b-form-input
                        type="text"
                        v-model="farmer.username"
                        :state="errors[0] ? false : (valid ? true : null)"
                        placeholder="Įveskite vartotojo vardą"
                    ></b-form-input>
                    <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                </ValidationProvider>
                </div>
                <div class="form-group col-md-6">
                <ValidationProvider rules="`${farmer.vic_lt ? '' : 'required|min:3|max:15'}`" name="Password" v-slot="{ valid, errors }">
                    <b-form-group label="Slaptažodis:" label-for="password">
                    <b-form-input
                        type="password"
                        v-model="farmer.password"
                        :state="errors[0] ? false : (valid ? true : null)"
                        placeholder="Įveskite slaptažodį"
                    ></b-form-input>
                    <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                </ValidationProvider>
                </div>
            </div>
            <div class="form-group">
            <label>Ūkio tipas:</label><br>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" v-model="farmer.type" value="1">
                <label class="form-check-label">GYVULININKYSTĖ</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" v-model="farmer.type" value="2">
                <label class="form-check-label">AUGALININKYSTĖ</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" v-model="farmer.type" value="3">
                <label class="form-check-label">ŽUVININKYSTĖ</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" v-model="farmer.type" value="4">
                <label class="form-check-label">MIŠKININKYSTĖ</label>
            </div>
            </div>
            <div v-if="farmer.type == 1">
                <div class="form-group">
                    <label>Galvijų banda:</label><br>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" v-model="farmer.banda" value="1">
                        <label class="form-check-label">MĖSINIAI</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" v-model="farmer.banda" value="2">
                        <label class="form-check-label">PIENINIAI</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" v-model="farmer.banda" value="3">
                        <label class="form-check-label">MIŠRŪS</label>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="farmer.data">
                <label class="form-check-label">
                    NORITE IŠKART SUVESTI PAPILDOMUS DUOMENIS?
                </label>
                <br>
                <small>Pažymėkitę varnelę, ir galėsite suvesti, asmeninius ūkininko duomenis: asmens kodas, adresas, banko saskaita, el. paštas, telefonas. Galite dabar ir nepildyti, užpildysite veliau eidami "ŪKININKŲ SĄRAŠAS" ten pasirinkę ūkininką.</small>
                </div>
            </div>
            <div v-show="farmer.data">
                <ValidationProvider rules="required|email" name="Email" v-slot="{ valid, errors }">
                    <b-form-group label="El.paštas:" label-for="email">
                    <b-form-input
                        type="email"
                        v-model="farmer.email"
                        :state="errors[0] ? false : (valid ? true : null)"
                        placeholder="Įveskite el pašto adresą"
                    ></b-form-input>
                    <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                </ValidationProvider>
                
                <ValidationProvider 
                :rules="{required: true, regex: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/}" 
                name="Phone" v-slot="{ valid, errors }">
                    <b-form-group label="Telefonas:" label-for="phone">
                    <b-form-input
                        v-model="farmer.phone"
                        :state="errors[0] ? false : (valid ? true : null)"
                        placeholder="Įveskite telefono numerį"
                        description="Telefono numeris: +3706...">
                        </b-form-input>
                    <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                </ValidationProvider>
                <div class="form-group">
                    <ValidationProvider rules="required|min:11|numeric" name="Code" v-slot="{ valid, errors }">
                    <b-form-group label="Asmens kodas:" label-for="code">
                    <b-form-input
                        type="text"
                        v-model="farmer.code"
                        :state="errors[0] ? false : (valid ? true : null)"
                        placeholder="Įveskite asmens kodą"
                    ></b-form-input>
                    <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                </ValidationProvider>
                </div>
                <div class="form-group">
                    <label>PVM kodas:</label>
                    <ValidationProvider rules="max:15" name="Pvm" v-slot="{ valid, errors }">
                    <b-form-group label="PVM kodas:" label-for="pvm">
                    <b-form-input
                        type="text"
                        v-model="farmer.pvm"
                        :state="errors[0] ? false : (valid ? true : null)"
                        placeholder="Įveskite PVM kodą"
                    ></b-form-input>
                    <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                </ValidationProvider>
                </div>
                <div class="form-group">
                    <label>Adresas:</label>
                    <textarea class="form-control" rows="3" placeholder="" v-model='farmer.adress'></textarea>
                </div>
            </div>
        </form>
        </ValidationObserver>
    </b-modal>


        <!-- /.content -->

    </div>

</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
    components: {
    ValidationObserver,
    ValidationProvider
  },
    data() {
        return {
            //rodyti ūkininkų sarasa
            farmers: [],
            //naujam ukininkui sukurti
            farmer: {
                id: '',
                name: '',
                subname: '',
                vic_lt: false,
                username: '',
                password: '',
                type: '',
                banda: '',
                data: false,
                email: '',
                phone: '',
                code: '',
                pvm: ''
            },
            //
            email: "",
    password: "",
    confirmation: "",
    subject: "",
    choices: []
        }
    },
    mounted() {},

    created() {
        this.getFermers()
    },

    methods: {
        onSubmit() {
      console.log("Form submitted yay!");
    },
    resetForm() {
      this.email = "";
      this.password = "";
      this.confirmation = "";
      this.subject = "";
      this.choices = [];
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    },
    farmer_post(){
        axios
        .post(`/farmer/store`, {
            name: this.farmer.name,
            subname: this.farmer.subname,
            vic_lt: this.farmer.vic_lt,
            username: this.farmer.username,
            password: this.farmer.password,
            type: this.farmer.type,
            banda: this.farmer.banda,
            data: this.farmer.data,
            email: this.farmer.email,
            phone: this.farmer.phone,
            code: this.farmer.code,
            pvm: this.farmer.pwm
            })
        .then(response => {
            console.log(response.data.status)
            this.getFermers()
        })
        .catch( err => {
        console.log("POST:");
        console.log(err.message);
        })
    },
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
        this.$refs.form.validate()
        .then(success => {
            if (success) {
                //this.farmer_post();
                this.$nextTick(() => {
                    this.$bvModal.hide('create_farmer')
                })
            }
        })
    },
}
}
</script>