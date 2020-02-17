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
                    <button type="button" v-b-modal.imoniu_ikelimas class="btn btn-app btn-info">
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
                    :items="imones"
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
        <b-modal id="imoniu_ikelimas" size="lg" title="Įmonių įkėlimas"
        ok-title="Išsaugoti"
        cancel-title="Uždaryti"
        no-close-on-esc
        no-close-on-backdrop
        @ok="imoneOk">
        <form class="form-horizontal">
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Pavadinimas:</label>
                <div class="col-sm-9">
                <input type="text" v-model="imones_sukurimas.imones_pavadinimas" class="form-control">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Įmonės kodas:</label>
                <div class="col-sm-9">
                <input type="text" v-model="imones_sukurimas.imones_kodas" class="form-control">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">PVM kodas:</label>
                <div class="col-sm-9">
                <input type="text" v-model='imones_sukurimas.pvm_kodas' class="form-control">
                </div>
            </div>
        </form>
    </b-modal>
    <b-modal ref="edit_company" size="lg" title="Įmonių redagavimas"
        ok-title="Išsaugoti"
        cancel-title="Uždaryti"
        no-close-on-esc
        no-close-on-backdrop
        @ok="imoneEdit">
        <form class="form-horizontal">
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Pavadinimas:</label>
                <div class="col-sm-9">
                <input type="text" v-model="imones_sukurimas.imones_pavadinimas" class="form-control">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Įmonės kodas:</label>
                <div class="col-sm-9">
                <input type="text" v-model="imones_sukurimas.imones_kodas" class="form-control">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">PVM kodas:</label>
                <div class="col-sm-9">
                <input type="text" v-model='imones_sukurimas.pvm_kodas' class="form-control">
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
            imones_sukurimas: {
                id: '',
                imones_pavadinimas: '',
                imones_kodas: '',
                pvm_kodas: ''
            },
            imones: [],
            fields: [
                { key: 'id', label: 'ID', sortable: true, sortDirection: 'desc' },
                { key: 'imones_pavadinimas', label: 'Įmonės pavadinimas', sortable: true, class: 'text-center' },
                { key: 'imones_kodas', label: 'Įmonės kodas', sortable: false},
                { key: 'pvm_kodas', label: 'PVM kodas', sortable: false},
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
        this.getImones()
    },

    methods: {
        edit_company(row){
            this.$refs['edit_company'].show()
            this.imones_sukurimas.imones_pavadinimas = row.imones_pavadinimas;
            this.imones_sukurimas.imones_kodas = row.imones_kodas;
            this.imones_sukurimas.pvm_kodas = row.pvm_kodas;
            this.imones_sukurimas.id = row.id;
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
                this.getImones()
            })
            .catch( err => {
            console.log("DELETE:");
            console.log(err.message);
            })
        },
        getImones () {
        //this.isLoading = true
        this.axios
        .get('/company')
        .then(response => {
            //this.isLoading = false
            this.imones = response.data.imones;
            //sukaiciuojam kiek irasu, puslapiavimui
            this.totalRows = this.imones.length
            console.log(response.data.imones);
        })
        .catch( err => {
            console.log("GET:");
            console.log(err.message);
            })
        },
        edit_post(){
            axios
            .patch(`/company/${this.imones_sukurimas.id}`, {
                pavadinimas: this.imones_sukurimas.imones_pavadinimas,
                kodas: this.imones_sukurimas.imones_kodas,
                pvm: this.imones_sukurimas.pvm_kodas,
                })
            .then(response => {
                //console.log(response.data.saskaitos);
                this.$bvToast.toast(`Įmonės duomenys atnaujinti sėkmingai`, {
                    title: `Atlikta`,
                    variant: "info",
                    solid: true
                })
                this.getImones()
            })
            .catch( err => {
            console.log("POST:");
            console.log(err.message);
            })
        },
        imones_post(){
            axios
            .post(`/company/store`, {
                pavadinimas: this.imones_sukurimas.imones_pavadinimas,
                kodas: this.imones_sukurimas.imones_kodas,
                pvm: this.imones_sukurimas.pvm_kodas
                })
            .then(response => {
                console.log(response.data.status)
                this.getData()
            })
            .catch( err => {
            console.log("POST:");
            console.log(err.message);
            })
        },
        imoneOk(bvModalEvt) {
            // Prevent modal from closing
            bvModalEvt.preventDefault()
            this.imones_post();
            // Trigger submit handler
            this.$nextTick(() => {
            this.$bvModal.hide('imoniu_ikelimas')
            })
        }, 
        imoneEdit(bvModalEvt) {
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
