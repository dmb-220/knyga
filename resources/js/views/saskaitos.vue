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
              Duomenų nerasta
              </div>
            </div>
        </div>
</div>
</template>

<script>

    export default {

        data() {

            return {
                //ivesti, arba pasirinkti imonę is saraso
                //ivedus, nauj1 imone, ja irasyti i duomenu baze, ir priskirti jai ID
                imone: true,
                imones_pavadinimas: "",
            }

        },


        created() {
            
        },

        methods: {
            
    }
    }

</script>
