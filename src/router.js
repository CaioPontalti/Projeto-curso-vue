import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from './components/Login/LoginPage.vue';
import BookListPage from './components/Book/BookListPage.vue';
import BookDetailsPage from './components/Book/BookDetailsPage.vue';

Vue.use(Router);

const routes = [
    { path:'/', name:'login', component: LoginPage },
    { path:'/book', name:'bookList', component:BookListPage},
    { path:'/book/:id', name:'bookDetailsPage', component:BookDetailsPage}
];

export default new Router({
    routes
})