import Vue from 'vue'
import Router from 'vue-router'
import user from '@/pages/user/userList'
import home from '@/pages/home'
// import navigation from '@/components/navigation/index'
import codelist from '@/components/vscode/codeList'
import addcode from '@/components/vscode/addCode'
import template from '@/components/template/index'
import wechat from '@/components/wechat/index'
import goods from '@/components/goods/index'
import category from '@/components/category/index'
import test from '@/components/test'
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/codelist',
      name: 'codelist',
      component: codelist
    }, {
      path: '/addcode',
      name: 'codelist',
      component: addcode
    },
    {
      path: '/template',
      name: 'template',
      component: template
    }, {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/wechat',
      name: 'wechat',
      component: wechat
    },

    {
      path: '/goods',
      name: 'goods',
      component: goods,
      children: [{
          path: 'index',
          component: goods
        },

      ]
    },
    {

      path: '/category',
      component: category,
    },
  ]
})
