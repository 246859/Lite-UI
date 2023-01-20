import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Login from "@/views/auth/LoginPage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/register",
        name: "register",
        component: () => import("@/views/auth/RegisterPage.vue")
    },
    {
        path: "/changePassword",
        name: "changePassword",
        component: () => import("@/views/auth/ChangePasswordPage.vue")
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
