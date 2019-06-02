<template>
  <div class="layui-layout layui-layout-admin">
    <top :is-login="isLogin"></top>
    <side></side>
    <login></login>
  </div>
</template>
<script>
import top from "./top";
import side from "./side";
import login from "./login";
export default {
  name: "kuang",
  data() {
    return {};
  },
  props: ["isLogin"],

  components: {
    top: top,
    side: side,
    login: login
  }
};
</script>

<style>
</style>
