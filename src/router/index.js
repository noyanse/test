import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import HelloWorld from '@/views/HelloWorld'
import JoinSignal from '@/views/jionSignal'
import Login from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: '/helloWorld',
          name: 'helloWorld',
          component: HelloWorld,
        },
        {
          path: '/joinSignal',
          name: 'joinSignal',
          component: JoinSignal,
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
