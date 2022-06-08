import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "./components/LoginPage.vue";
import AddPage from "./components/AddPage.vue";
import UpdatePage from "./components/UpdatePage.vue";
import AboutPage from "./components/AboutPage.vue";
const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path:'/',
    },

    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up',
    },

    {
        name: 'LoginPage',
        component: LoginPage,
        path: '/login-page',
    },    {
        name: 'AddPage',
        component: AddPage,
        path: '/add-page',
    },
    {
        name: 'UpdatePage',
        component: UpdatePage,
        path: '/update-page/:id',
    },
    {
        name: 'AboutPage',
        component: AboutPage,
        path: '/about-page',
    },
    
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;