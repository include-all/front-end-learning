// src/router/index.js
import Vue from 'vue'
import VueRouter from "vue-router";
import Home from '../views/Home';
import About from '../views/About';
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/Home',
            component: Home
        },
        {
            path: '/About',
            component: About
        },
        {
            path: '*',
            redirect: '/Home'
        }
    ]
})
