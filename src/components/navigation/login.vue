<template>
  <div>
    <div
      class="layui-layer-shade"
      id="layui-layer-shade1"
      times="1"
      style="z-index: 19891014; background-color: rgb(0, 0, 0); opacity: 0.3;"
    ></div>
    <div
      class="layui-layer layui-layer-page layui-layer-rim"
      id="layui-layer1"
      type="page"
      times="1"
      showtime="0"
      contype="string"
      style="z-index: 19891015; width: 420px; height: 240px; top: 201px; left: 294px;"
    >
      <div class="layui-layer-title" style="cursor: move;">登录</div>
      <div id class="layui-layer-content" style="height: 140px;">
        <div class="layui-form-item">
          <label class="layui-form-label">输入框</label>
          <div class="layui-input-block">
            <input
              type="text"
              name="username"
              placeholder="请输入标题"
              class="layui-input"
              v-model="username"
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
              v-model="password"
            >
          </div>
          <div class="layui-form-mid layui-word-aux"></div>
        </div>
      </div>
      <span class="layui-layer-setwin">
        <a class="layui-layer-ico layui-layer-close layui-layer-close1" href="javascript:;"></a>
      </span>
      <div class="layui-layer-btn layui-layer-btn-">
        <a class="layui-layer-btn0">按钮一</a>
        <a class="layui-layer-btn1">按钮二</a>
        <a class="layui-layer-btn2">按钮三</a>
      </div>
      <span class="layui-layer-resize"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      flg: 0
    };
  },
  created() {},
  methods: {}
};
</script>