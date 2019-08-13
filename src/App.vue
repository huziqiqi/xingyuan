<template>
  <el-container id="app" style="height: 100%; border: 1px solid #eee">
    <el-header style="text-align: right; font-size: 12px">
      <top></top>
    </el-header>
    <el-container style="overflow-y: auto;">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <side></side>
      </el-aside>
      <el-main>
        <router-view></router-view>

        <!-- <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>-->
      </el-main>
    </el-container>
  </el-container>
</template>



<script>
import top from "./components/navigation/top";
import side from "./components/navigation/side";

export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  },
  components: {
    top: top,
    side: side
    // login: login
  },
  Create(e) {
    console.log(e);
  }
};
</script>
<style>
html,
body {
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>