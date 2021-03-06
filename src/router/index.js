import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dataBinding',
    name: 'DataBinding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DataBinding.vue')
  },
  {
    path: '/dataBindingHtml',
    name: 'DataBindingHtml',
    component: () => import(/* webpackChunkName: "about" */ '../views/DataBindingHtml.vue')
  },
  {
    path: '/example2',
    name: 'Example2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example2.vue')
  },
  {
    path: '/cssExample',
    name: 'CssExample',
    component: () => import(/* webpackChunkName: "about" */ '../views/CssExample.vue')
  },
  {
    path: '/listExample',
    name: 'ListExample',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListExample.vue')
  },
  {
    path: '/selectExample',
    name: 'SelectExample',
    component: () => import(/* webpackChunkName: "about" */ '../views/SelectExample.vue')
  },
  {
    path: '/saveExample',
    name: 'SaveExample',
    component: () => import(/* webpackChunkName: "about" */ '../views/SaveExample.vue')
  },
  {
    path: '/slotUseModalLayout',
    name: 'slotUseModalLayout',
    component: () => import(/* webpackChunkName: "about" */ '../views/SlotUseModalLayout.vue')
  },
  {
    path: '/provideInjectChildChild',
    name: 'provideInjectChildChild',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProvideInjectChildChild.vue')
  },
  {
    path: '/provideInject',
    name: 'provideInject',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProvideInject.vue')
  },
  {
    path: '/serverData',
    name: 'ServerData',
    component: () => import(/* webpackChunkName: "about" */ '../views/ServerData.vue')
  },
  {
    path: '/mixin',
    name: 'MixinTest',
    component: () => import(/* webpackChunkName: "about" */ '../views/MixinTest.vue')
  },
  {
    path: '/compositionapi2',
    name: 'CompositionAPI2',
    component: () => import(/* webpackChunkName: "about" */ '../views/CompositionAPI2.vue')
  },
  {
    path: '/compositionapi4',
    name: 'CompositionAPI4',
    component: () => import(/* webpackChunkName: "about" */ '../views/CompositionAPI4.vue')
  },
  {
    path: '/customDirective',
    name: 'CustomDirective',
    component: () => import(/* webpackChunkName: "about" */ '../views/CustomDirective.vue')
  },
  {
    path: '/compositionAPIProvide',
    name: 'CompositionAPIProvide',
    component: () => import(/* webpackChunkName: "about" */ '../views/CompositionAPIProvide.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
