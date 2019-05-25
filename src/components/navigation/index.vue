<template>
  <div class="layui-layout layui-layout-admin">
    <top></top>
    <side></side>
  </div>
</template>
<script>
import top from "./top";
import side from "./side";
export default {
  name: "kuang",
  data() {
    return {};
  },
  components: {
    top: top,
    side: side
  }
};
</script>

<style>
</style>
