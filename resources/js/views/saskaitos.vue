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
                    :items="saskaitos"
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
                    <b-button size="sm" variant="info" class="mr-1">
                    Redaguoti
                    </b-button>
                    <b-button variant="danger" size="sm">
                    Ištrinti
                    </b-button>
                </template>
                </b-table>
              </div>
            </div>
        </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            saskaitos: [],
            fields: [
                { key: 'id', label: 'ID', sortable: true, sortDirection: 'desc' },
                { key: 'operacija', label: 'Operacija', sortable: true, 
                    formatter: (value, key, item) => {
                        return value ? 'Pirkimas' : 'Pardavimas'
                        },
                    },
                { key: 'pinigai', label: 'Pinigai', sortable: true,
                    formatter: (value, key, item) => {
                        if(value == 1){return "Kasa";}
                        if(value == 2){return "Bankas";}
                        if(value == 3){return "Skola";}
                        },
                    },
                { key: 'imones.imones_pavadinimas', label: 'Įmonės pavadinimas', sortable: true, class: 'text-center' },
                { key: 'data', label: 'Data', sortable: true},
                { key: 'numeris', label: 'Sąskaitos numeris', sortable: false},
                { key: 'op_pavadinimas', label: 'Operacijos pavadinimas', sortable: true},
                { key: 'kiekis', label: 'Kiekis', sortable: false},
                { key: 'suma', label: 'Suma', sortable: false},
                { key: 'pvm', label: 'PVM', sortable: false},
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
        this.getData()
    },

    methods: {
        getData () {
        //this.isLoading = true
        this.axios
        .get('/saskaitos')
        .then(response => {
            //this.isLoading = false
            this.saskaitos = response.data.saskaitos;
            //sukaiciuojam kiek irasu, puslapiavimui
            this.totalRows = this.saskaitos.length
            console.log(response.data.saskaitos);
        })
        .catch( err => {
            console.log("GET:");
            console.log(err.message);
            })
        },
    }
}
</script>
