import Vue from 'vue'
import VueRouter from 'vue-router'
import Movierouter from './Movie'
import Cinemarouter from './Cinema'
import Minerouter from './Mine'



Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    Movierouter,Cinemarouter,Minerouter
    ,{
      path:"/",
      redirect:'/movie'
    }
  ]
})

export default router
