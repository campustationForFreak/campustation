import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Top from '@/components/Top'
import Info from '@/components/Info'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
  ]
})
