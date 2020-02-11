import VueRouter from 'vue-router';


let routes = [
    {
        path: '/',
        component: require('./views/dashboard').default
    },
    {
        path: '/users',
        component: require('./views/users').default
    },
    {
        path: '/saskaitos',
        component: require('./views/saskaitos').default
    },
    {
<<<<<<< HEAD
=======
        path: '/imones',
        component: require('./views/imones').default
    },
    {
>>>>>>> da0d69db4426fed78086f1669fd6c0f31104199d
        path: '/knyga',
        component: require('./views/knyga').default
    }
];


export default new VueRouter({
    base: '/admin/',
    //mode: 'history',
    routes,
    //linkActiveClass: 'active'
});
