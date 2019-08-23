<template>
  <div id="app" class="layui-layout layui-layout-admin">
    <navigation></navigation>
    <div class="layui-body">
      <router-view></router-view>
    </div>
  </div>
</template>



<script>
import navigation from "./components/navigation/index";
import template from "./components/template/index";
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
    navigation,
    template
  }
};
</script>

<style>
.layui-body {
  top: 60px;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  background: #faa;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
