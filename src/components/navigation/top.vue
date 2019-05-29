<template>
  <div class="layui-header">
    <div class="layui-logo">
      <router-link to="/">胡子奇奇的后台</router-link>
    </div>
    <!-- 头部区域（可配合layui已有的水平导航） -->
    <ul class="layui-nav layui-layout-left">
      <li class="layui-nav-item">
        <a href>控制台</a>
      </li>
      <li class="layui-nav-item">
        <a href>商品管理</a>
      </li>
      <li class="layui-nav-item">
        <a href>用户</a>
      </li>
      <li class="layui-nav-item">
        <a href="javascript:;">其它系统</a>
        <dl class="layui-nav-child">
          <dd>
            <a href>邮件管理</a>
          </dd>
          <dd>
            <a href>消息管理</a>
          </dd>
          <dd>
            <a href>授权管理</a>
          </dd>
        </dl>
      </li>
    </ul>
    <ul class="layui-nav layui-layout-right">
      <li class="layui-nav-item">
        <a href="javascript:;">
          <img src="http://t.cn/RCzsdCq" class="layui-nav-img">
          贤心
        </a>
        <dl class="layui-nav-child">
          <dd>
            <a href>基本资料</a>
          </dd>
          <dd>
            <a href>安全设置</a>
          </dd>
        </dl>
      </li>
      <li class="layui-nav-item">
        <a @click="login">登录</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: "2018"
    };
  },
  mounted() {
    console.log("刷新");
    this.login();
  },
  methods: {
    login() {
      layer.open({
        type: 1,
        title: "登录",
        skin: "layui-layer-rim", //加上边框
        area: ["420px", "240px"], //宽高
        content: "html内容",
        btn: ["按钮一", "按钮二", "按钮三"], //可以无限个按钮
        btn1: function(index, layero) {
          //按钮【按钮三】的回调
        }
      });
    }
  }
};
</script>

