import Vue from 'vue'
import Router from 'vue-router'
import user from '@/components/user'
import navigation from '@/components/navigation/index'
import codelist from '@/components/vscode/codeList'
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
      path: '/',
      name: 'navigation',
      component: navigation
    }, {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/codelist',
      name: 'codelist',
      component: codelist
    },
    // {
    //   path: '/helloworld',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },

  ]
})
