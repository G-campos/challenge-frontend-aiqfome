import Vue from 'vue'
import VueRouter from 'vue-router'

import MyLayout from "@/layouts/MyLayout";
import Home from "@/pages/Home";
import Characters from "@/pages/Characters";
import CharacterDetails from "@/pages/CharacterDetails";
import Films from "@/pages/Films";
import FilmsDetails from "@/pages/FilmsDetails";
import Casting from "@/pages/Casting";

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
        path: '/characters',
        component: Characters,
        children: [
          {
            path: '/character/:name',
            component: CharacterDetails
          },
        ]
      },
      {
        path: '/films',
        component: Films,
        children: [{
          path: '/films-details/:name',
          component: FilmsDetails
        }],
      },
      {
        path: '/casting',
        component: Casting
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
