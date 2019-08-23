<template>
  <div>
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>刘奇</span>
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

