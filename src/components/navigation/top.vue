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
    <ul class="layui-nav layui-layout-right layui-nav-itemed">
      <li class="layui-nav-item">
        <a href="javascript:;">
          <img src="http://t.cn/RCzsdCq" class="layui-nav-img">
          {{isLogin}}
        </a>
        <dl class="layui-nav-child" style="display:block">
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
    <div id="login" class="layui-form" v-show="1==0"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: "2018",
      username: "12",
      password: "12"
    };
  },
  props: ["isLogin"],
  beforeCreate() {},
  mounted() {
    new Promise((resolve, reject) => {
      layui.use("layer", function() {
        var layer = layui.layer;
        resolve(layer);
      });
    }).then(num => {
      // this.login();
    });
    console.log("刷新");
  },
  beforeUpdate() {},
  methods: {
    login() {
      var loginNode = document.querySelector("#login");
      var that = this;
      layer.open({
        type: 1,
        title: "登录",
        skin: "layui-layer-rim", //加上边框
        area: ["420px", "240px"], //宽高
        content: `
        
 <div class="layui-form-item">
        <label class="layui-form-label">输入框</label>
        <div class="layui-input-block">
          <input
            type="text"
            name="username"
            placeholder="请输入标题"
            class="layui-input"
            v-model="this.username"
          >
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">密码框</label>
        <div class="layui-input-inline">
          <input
            type="password"
            name="password"
      
            placeholder="请输入密码"
            class="layui-input"
            v-model="{password}"
          >
        </div>
        <div class="layui-form-mid layui-word-aux"></div>
      </div>
        
        
        `,
        btn: ["按钮一", "按钮二", "按钮三"], //可以无限个按钮
        btn1: (index, layero) => {
          //按钮【按钮三】的回调
          var xa = document.querySelector("#layui-layer1");
          console.log(this.password);
        }
      });
    }
  }
};
</script>

