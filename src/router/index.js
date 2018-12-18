import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Activiti from '@/components/Activiti'
import Leave from '@/components/Leave'
import Login from '@/components/Login.vue'
import Complete from '@/components/Complete.vue'
import Todo from '@/components/Todo.vue'
import Monitor from '@/components/Monitor.vue'
import { setCookie,getCookie,delCookie } from '../assets/js/cookie.js'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/index1',
      name: 'index1',
      component: {template:'<div>index1-haahahha</div>'},
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      //流程定义
      path: '/activiti',
      name: 'Activiti',
      component: Activiti,
      meta:{
        requireAuth:true
      }
    },
    {
      //流程监控
      path: '/monitor',
      name: 'Monitor',
      component: Monitor,
      meta:{
        requireAuth:true
      }
    },
    {
      //请假单申请
      path: '/leave',
      name: 'Leave',
      component: Leave,
      meta:{
        requireAuth:true
      }
    },
    {
      //待办任务
      path: '/complete',
      name: 'Complete',
      component: Complete,
      meta:{
        requireAuth:true
      }
    },
    {
      //已办任务
      path: '/todo',
      name: 'Todo',
      component: Todo,
      meta:{
        requireAuth:true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((res) => res.meta.requireAuth)) {// 判断是否需要登录权限
    if (!getCookie('username')=="") {// 判断是否登录
      next()
    } else {// 没登录则跳转到登录界面
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
