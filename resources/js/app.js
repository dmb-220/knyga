require('./bootstrap');

import Vue from 'vue';
import VueRouter from "vue-router";

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

window.Vue = Vue;
Vue.use(VueRouter);

import Form from "./utilities/Form";
window.Form = Form;

import router from './routes';


// 3. Update the new Vue intance at the bottom of the file.
new Vue({
    el: '#app',
    router
});