import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'default',
    redirect: '/login'
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //缆加载
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  // {
  //   path: '/index',
  //   name: 'index',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/index.vue')
  // },
  {
    path: '/botnav',
    component: () => import(/* webpackChunkName: "about" */ '../views/Botnav.vue'),
    children: [
      {
        path: '/',
        name: 'index',
        redirect: 'index'
      },
      {
        path: 'index',
        name: 'index1',
        component: () => import(/* webpackChunkName: "about" */ '../views/index.vue')
      },
      {
        path: 'car',
        name: 'car',
        meta:{
          requireAuth:true,//当有这个字段的时候，我们就认为他这个路由页面是要有登录权限的
        },        
        component: () => import(/* webpackChunkName: "about" */ '../views/Car.vue')
      },
      {
        path: 'classify',
        name: 'classify',
        component: () => import(/* webpackChunkName: "about" */ '../views/Classify.vue')
      }, {
        path: 'mine',
        name: 'mine',
        meta:{
          requireAuth:true,//当有这个字段的时候，我们就认为他这个路由页面是要有登录权限的
        },  
        component: () => import(/* webpackChunkName: "about" */ '../views/Mine.vue')
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
