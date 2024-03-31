import { createWebHistory, createRouter } from "vue-router";
import Main from "@/components/MainProduct.vue";
import Product from "@/views/SelectProduct.vue";
import Login from "@/views/LoginAccount.vue";
import Registration from "@/views/RegistrationAccount.vue";
import Cart from "@/views/CartProduct.vue";
import Order from "@/views/OrderProduct.vue";

// Admin Page
import AdminPage from "@/view/AdminPage.vue";
import LoginAdmin from "@/view/LoginAdmin.vue";
import AddProduct from "@/view/AddProduct.vue";
import AddAdmin from "@/view/AddAdmin.vue";
import AboutAdmin from "@/view/AboutAdmin.vue";
const routes = [
    {
        path: "/",
        name: "Main",
        component: Main,
    },
    {
        path: "/product",
        name: "Product",
        component: Product,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/registration",
        name: "Registration",
        component: Registration,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
    },
    {
        path: "/order",
        name: "Order",
        component: Order,
    },
    {
        path: "/loginadmin",
        name: "LoginAdmin",
        component: LoginAdmin,
    },
    {
        path: "/admin",
        name: "AdminPage",
        component: AdminPage,
    },
    {
        path: "/add",
        name: "AddProduct",
        component: AddProduct,
    },
    {
        path: "/addadmin",
        name: "AddAdmin",
        component: AddAdmin,
    },
    {
        path: "/aboutadmin",
        name: "AboutAdmin",
        component: AboutAdmin,
    },
];

const router= createRouter({
    history: createWebHistory(),
    routes,
});

export default router;