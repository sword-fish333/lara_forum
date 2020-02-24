import Vue from 'vue';
import VueRouter from 'vue-router'
import Login from '../components/login/Login';

import AppHome from '../components/AppHome';
import SignUp from "../components/login/SignUp";
import Forum from "../components/forum/Forum";
import Logout from "../components/login/Logout";
import Read from "../components/forum/read";

Vue.use(VueRouter)

const routes = [
    // { path: '/', component: AppHome },

    { path: '/login', component: Login },
    { path: '/logout', component: Logout },

    { path: '/signup', component: SignUp },
    { path: '/forum', component: Forum,name:'forum' },
    { path: '/question/:slug', component: Read,name:'read' },

]

const router = new VueRouter({
    routes,
    hashbang:false,
    mode:'history'

})

export default  router;
