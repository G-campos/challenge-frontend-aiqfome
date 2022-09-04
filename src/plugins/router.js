import Vue from 'vue'
import VueRouter from 'vue-router'

import MyLayout from "@/layouts/MyLayout";
import Home from "@/pages/Home";
import Films from "@/pages/Films";
import FilmsDetails from "@/pages/FilmsDetails";
import Casting from "@/pages/Casting";
import Character from "@/pages/Character";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MyLayout,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/films',
        component: Films,
        children: [{
          path: '/details/:name',
          component: FilmsDetails
        }],
      },
      {
        path: '/casting',
        component: Casting
      },
      {
        path: '/character/:name',
        component: Character
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
