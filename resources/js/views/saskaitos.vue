<template>
<<<<<<< HEAD

=======
<div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Sąskaitų įkėlimas</h1>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Duomenų įvedimas</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form class="form-horizontal">
                <div class="card-body">
                    <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Operacija:</label>
                    <div class="col-sm-10">
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                        <label class="form-check-label" for="inlineRadio1">Pardavimai</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                        <label class="form-check-label" for="inlineRadio2">Pirkimai</label>
                        </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Imonė:</label>
                    <div class="col-sm-10">
                        <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <input v-model="imone" type="checkbox">
                        </span>
                      </div>
                  <select v-if="imone" v-model="imones_pavadinimas" class="custom-select">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <input v-else type="text" v-model="imones_pavadinimas" class="form-control">
                </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Data:</label>
                    <div class="col-sm-10">
                      <input type="date" class="form-control">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Sąskaitos numeris:</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Op. pavadinimas:</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Kiekis, mat. vnt:</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Suma:</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">PVM:</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control">
                    </div>
                  </div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                  <button type="submit" class="btn btn-info">Išsaugoti</button>
                </div>
                <!-- /.card-footer -->
              </form>
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
>>>>>>> da0d69db4426fed78086f1669fd6c0f31104199d
</template>

<script>

    export default {

        data() {

            return {
<<<<<<< HEAD
                
=======
                //ivesti, arba pasirinkti imonę is saraso
                //ivedus, nauj1 imone, ja irasyti i duomenu baze, ir priskirti jai ID
                imone: true,
                imones_pavadinimas: "",
>>>>>>> da0d69db4426fed78086f1669fd6c0f31104199d
            }

        },


        created() {
            
        },

        methods: {
            
    }
    }

</script>
