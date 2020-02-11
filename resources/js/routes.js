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
        path: '/imones',
        component: require('./views/imones').default
    },
    {
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
