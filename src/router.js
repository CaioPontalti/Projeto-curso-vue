import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from './components/Login/LoginPage.vue';
import BookListPage from './components/Book/BookListPage.vue';

Vue.use(Router);

const routes = [
    { path:'/login', name:'login', component: LoginPage },
    { path:'/book', name:'bookList', component:BookListPage},
    { path:'/', name:'login', component: LoginPage }
];

export default new Router({
    routes
})