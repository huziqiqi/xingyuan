// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'
// import '../static/lib/ueditor/ueditor.config.js'
// import '../static/lib/ueditor/ueditor.all.js'
// import '../static/lib/ueditor/lang/zh-cn/zh-cn.js'
// import '../static/lib/ueditor/ueditor.parse.js'
import VueCropper from 'vue-cropper'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueCropper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
