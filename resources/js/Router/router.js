import Vue from 'vue';
import VueRouter from 'vue-router'
import Login from '../components/login/Login';

import AppHome from '../components/AppHome';
import SignUp from "../components/login/SignUp";
import Forum from "../components/forum/Forum";

Vue.use(VueRouter)

const routes = [
    // { path: '/', component: AppHome },

    { path: '/login', component: Login },
    { path: '/signup', component: SignUp },
    { path: '/forum', component: Forum,name:'forum' },

]

const router = new VueRouter({
    routes,
    hashbang:false,
    mode:'history'

})

export default  router;
