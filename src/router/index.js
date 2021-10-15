import { createWebHistory, createRouter } from "vue-router"

import Home from "@/views/Home.vue"
import Cliente from "@/views/Cliente.vue"
import Servicios from "@/views/Servicios.vue"
import Login from "@/views/Login.vue"


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/cliente",
        name: "Cliente",
        component: Cliente
    },
    {
        path: "/servicios",
        name: "Servicios",
        component: Servicios
    },
    {
        path: "/login",
        name: "Login",
        component: Login
     }

   
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router