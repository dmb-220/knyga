require('./bootstrap');

import Vue from 'vue';

import SimpleVueValidation from 'simple-vue-validator';
Vue.use(SimpleVueValidation);

import VueRouter from "vue-router";
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.Vue = Vue;

import Form from "./utilities/Form";
window.Form = Form;

import router from './router';


// 3. Update the new Vue intance at the bottom of the file.
new Vue({
    el: '#app',
    router
});