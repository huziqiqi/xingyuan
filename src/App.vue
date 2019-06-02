<template>
  <div id="app" class="layui-layout layui-layout-admin">
    <navigation :is-login="isShow"></navigation>
    <router-view v-show="isShow"/>
  </div>
</template>

<script>
import navigation from "./components/navigation/index";
export default {
  name: "App",
  data() {
    return {
      isShow: false
    };
  },
  mounted() {
    var isLogin = true;
    if (isLogin) {
      this.isShow = true;
    }
    layui.use("layer", function() {
      var layer = layui.layer;
    });
    layui.use("code", function() {
      //加载code模块
      var code = layui.code(); //引用code方法
    });
    layui.use("form", function() {
      var form = layui.form;
      //监听提交
      // form.on("submit(formDemo)", function(data) {
      //   layer.msg(JSON.stringify(data.field));
      //   return false;
      // });
    });
  },
  components: {
    navigation
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
