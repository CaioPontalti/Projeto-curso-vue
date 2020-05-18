import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from './components/Login/LoginPage.vue';
import BookListPage from './components/Book/BookListPage.vue';
import BookDetailsPage from './components/Book/BookDetailsPage.vue';
import LibraryListPage from './components/Library/LibraryListPage.vue';
import LibraryDetailsPage from './components/Library/LibraryDetailsPage.vue';

Vue.use(Router);

const routes = [
    { path:'/', name:'login', component: LoginPage },
    { path:'/book', name:'bookList', component:BookListPage},
    { path:'/book/:id', name:'bookDetailsPage', component:BookDetailsPage},
    { path:'/library', name:'LibraryList', component:LibraryListPage},
    { path:'/library/:id', name:'LibraryDetailsPage', component:LibraryDetailsPage}
];

export default new Router({
    routes
})