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
                        <a v-b-modal.create_invoice class="btn btn-app">
                            <i class="fas fa-file-invoice"></i> Sukurti naują ūkininką
                        </a>
                        <router-link tag="a" to="/invoices" class="btn btn-app">
                            <i class="fas fa-th-list"></i> Ūkio tipas
                        </router-link>
                        <router-link tag="a" to="/companies" class="btn btn-app">
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


        <!-- /.content -->

    </div>

</template>

<script>
export default {
    data() {
        return {
            farmers: [],
        }
    },
    mounted() {},

    created() {
        this.getFermers()
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
    }
}
</script>
