import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import axios from 'axios';
import { routes } from "./routes";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',  
    routes: routes
});

new Vue({
    el: "#app",
    components: { App },
    template: "<App/>",
    router: router
});
