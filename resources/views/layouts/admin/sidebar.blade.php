<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="/" class="brand-link">
        <img src="/images/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
             style="opacity: .8">
        <span class="brand-text font-weight-light">1-1.LT</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img src="/images/avatar04.png" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
                <a class="d-block" href="#">{{ Auth::user()->name }}</a>
            </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
                     with font-awesome or any other icon font library -->

                <li class="nav-item">
                    <router-link tag="a" to="/" class="nav-link">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>Į pradžią</p>
                    </router-link>
                </li>
                <li class="nav-item has-treeview">
                    <a class="nav-link nav-dropdown-toggle">
                    <i class="nav-icon fas fa-book"></i>
                    <p>Žalia knyga
                    <i class="fa fa-angle-left right"></i></p> 
                    </a>                
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <router-link tag="a" to="/knyga" class="nav-link">
                                <i class="fa fa-play nav-icon"></i>
                                <p>Knyga</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                        <router-link tag="a" to="/saskaitos" class="nav-link">
                            <i class="fa fa-play nav-icon"></i>
                            <p>Sąskaitos</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                        <router-link tag="a" to="/imones" class="nav-link">
                            <i class="fa fa-play nav-icon"></i>
                            <p>Įmonės</p>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <router-link tag="a" to="/users" class="nav-link">
                        <i class="nav-icon fas fa-th"></i>
                        <p>Vartotojai</p>
                    </router-link>
                </li>

            </ul>
        </nav>
        <!-- /.sidebar-menu -->

    </div>
    <!-- /.sidebar -->
</aside>
