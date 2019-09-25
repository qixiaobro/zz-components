import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import ExButton from '@/pages/ExButton'
import ExInput from '@/pages/ExInput'
import test from '@/pages/test'
import ExForm from '@/pages/ExForm'

Vue.use(Router)

export default new Router({
  routes: [ {
    path: '/index',
    name: 'index',
    component: index,
    children: [
      {
        path: 'ExButton',
        name: 'ExButton',
        component: ExButton,
      },
      {
        path: 'ExInput',
        name: 'ExInput',
        component: ExInput,
      },
      {
        path: 'test',
        name: 'test',
        component: test,
      },
      {
        path: 'ExForm',
        name: 'ExForm',
        component: ExForm,
      },
    ]
  }]
})
