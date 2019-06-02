import Vue from 'vue'
import Router from 'vue-router'
import user from '@/components/user'
import home from '@/components/home'
// import navigation from '@/components/navigation/index'
import codelist from '@/components/vscode/codeList'
import addcode from '@/components/vscode/addCode'
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
    // {
    //   path: '/helloworld',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },

  ]
})
