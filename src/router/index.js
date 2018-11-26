import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Activiti from '@/components/Activiti'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index1',
      name: 'index1',
      component: {template:'<div>index1-haahahha</div>'}
    },
    {
      path: '/index2',
      name: 'index2',
      component: {template:'<div>index2-hohohoho</div>'}
    },
    {
      path: '/activiti',
      name: 'Activiti',
      component: Activiti,
    }
  ]
})
