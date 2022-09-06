import Vue from 'vue'
import VueRouter from 'vue-router'

import MyLayout from "@/layouts/MyLayout";
import Home from "@/pages/Home";
import Films from "@/pages/Films";
import FilmsDetails from "@/pages/FilmsDetails";
import Casting from "@/pages/Casting";
import Character from "@/pages/CharacterDetails";

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
          path: '/films-details/:name',
          component: FilmsDetails
        }],
      },
      {
        path: '/casting',
        component: Casting
      },
      {
        path: '/characters',
        component: Character,
        children: [
          {
            path: '/character/:name',
            component: Character
          },
        ]
      },

    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
