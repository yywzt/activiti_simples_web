import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Activiti from '@/components/Activiti'
import Leave from '@/components/Leave'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index1',
      name: 'index1',
      component: {template:'<div>index1-haahahha</div>'}
    },
    {
      path: '/index2',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/activiti',
      name: 'Activiti',
      component: Activiti,
    },
    {
      path: '/leave',
      name: 'Leave',
      component: Leave,
    }
  ]
})
