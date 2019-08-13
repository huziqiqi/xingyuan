<template>
  <el-menu :default-openeds="['1']" :default-active="$route.path" unique-opened="true">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-message"></i>用户管理
      </template>
      <el-menu-item-group>
        <el-menu-item index="/user">
          <router-link to="/user">普通用户</router-link>
        </el-menu-item>
        <el-menu-item index="1-2">公众号用户</el-menu-item>
        <el-menu-item index="1-3">管理员用户</el-menu-item>
      </el-menu-item-group>

      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>商品管理
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-setting"></i>文章管理
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="3-4">
        <template slot="title">选项4</template>
        <el-menu-item index="3-4-1">选项4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: "side",
  data() {
    return {};
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
