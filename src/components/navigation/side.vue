<template>
  <div class="layui-side layui-bg-black">
    <div class="layui-side-scroll">
      <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
      <ul class="layui-nav layui-nav-tree" lay-filter="test">
        <li :class="flg==1?'layui-nav-item layui-nav-itemed':'layui-nav-item'">
          <a class href="javascript:;" @click="toggle(1)">
            分类管理
            <span class="layui-nav-more"></span>
          </a>
          <dl class="layui-nav-child">
            <dd>
              <router-link to="/user">用户管理</router-link>
            </dd>
            <dd>
              <a href="javascript:;">列表二</a>
            </dd>
            <dd>
              <a href="javascript:;">列表三</a>
            </dd>
            <dd>
              <a href>超链接</a>
            </dd>
          </dl>
        </li>
        <li :class="flg==2?'layui-nav-item layui-nav-itemed':'layui-nav-item'">
          <a href="javascript:;" @click="toggle(2)">
            代码段
            <span class="layui-nav-more"></span>
          </a>
          <dl class="layui-nav-child">
            <dd>
              <router-link to="/codelist">代码列表</router-link>
            </dd>
            <dd>
              <a href="javascript:;">列表二</a>
            </dd>
            <dd>
              <a href>超链接</a>
            </dd>
          </dl>
        </li>
        <li class="layui-nav-item">
          <a href>云市场</a>
        </li>
        <li class="layui-nav-item">
          <a href>发布商品</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "side",
  data() {
    return {
      flg: 0
    };
  },
  created() {},
  methods: {
    toggle(flg) {
      if (this.flg == flg) {
        this.flg = -flg;
      } else {
        this.flg = flg;
      }
      console.log(this.flg);
    }
  }
};
</script>

<style>
</style>
