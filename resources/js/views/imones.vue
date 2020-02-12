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
                <h3 class="card-title">Įmonių sąrašas</h3>
              </div>
              <div class="card-body">
              {{imones}}
              </div>
            </div>
        </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                imones: [],
            }

        },


        created() {
          this.getData()
        },

        methods: {
           getData () {
            //this.isLoading = true
            this.axios
            .get('/imones')
            .then(response => {
                //this.isLoading = false
                this.imones = response.data.imones;
                console.log(response.data.imones);
            })
            .catch( err => {
                console.log("GET:");
                console.log(err.message);
                })
            }, 
        }
    }

</script>
