import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about_me',
    name: 'about_me',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About_Me.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/why_refine',
    name: 'why_refine',
    component: () => import('../views/Why_Refine')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/Blog')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
