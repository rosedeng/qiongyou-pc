import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Home from '@/views/Home/Home.vue'
import Layout from '@/views/Layout.vue'

const About=()=>import('@/views/About/About.vue')
const News=()=>import('@/views/News/News.vue')
const Travel=()=>import('@/views/Travel/Travel.vue')
const Login=()=>import('@/views/Login.vue')
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path:'',
    component:Layout,
    children:[{
      path:'/',
      component:Home,
      meta:{
        isLogin:false
      }
    },
    {
        path:'/news',
        component:News,
        meta:{
          isLogin:true
        }
      },
      {
        path:'/about',
        component:About,
        meta:{
          isLogin:true
        }
      },
      {
        path:'/travel',
        component:Travel,
        meta:{
          isLogin:true
        }
      }
    ]
  },{
    path:'/login',
    component:Login
  }
]

const router = new VueRouter({
  routes
})

export default router
