<template>
  <div>
    <el-table :data="items">
      <el-table-column prop="id" label="日期" width="140"></el-table-column>
      <el-table-column prop="username" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <!-- 内容主体区域 -->
    <div style="padding: 15px;">
      内容主体区域
      {{msg}}
      <button class="layui-btn">
        <i class="layui-icon">&#xe608;</i> 添加
      </button>
      <table class="layui-table">
        <colgroup>
          <col width="150" />
          <col width="200" />
          <col />
        </colgroup>
        <thead>
          <tr>
            <td>id</td>
            <td>usernam</td>
            <td>创建时间</td>
            <td>状态</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item">
            <td>{{item.id}}</td>
            <td>{{item.username}}</td>
            <td>{{item.create_date}}</td>
            <td>{{item.state}}</td>
            <td>
              <button>删除</button>
              <button class="layui-btn layui-btn-normal layui-btn-xs">修改</button>
              <button @click="delate()" class="layui-btn layui-btn-danger layui-btn-xs">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="layui-btn-group">
        <button class="layui-btn layui-btn-sm">
          <i class="layui-icon">&#xe603;</i>
        </button>
        <button class="layui-btn layui-btn-sm">
          <i class="layui-icon">&#xe642;</i>
        </button>
        <button class="layui-btn layui-btn-sm">
          <i class="layui-icon">&#xe640;</i>
        </button>
        <button class="layui-btn layui-btn-sm">
          <i class="layui-icon">&#xe602;</i>
        </button>
      </div>

      <div class="layui-btn-group">
        <button class="layui-btn layui-btn-primary layui-btn-sm">
          <i class="layui-icon">&#xe654;</i>
        </button>
        <button class="layui-btn layui-btn-primary layui-btn-sm">
          <i class="layui-icon">&#xe642;</i>
        </button>
        <button class="layui-btn layui-btn-primary layui-btn-sm">
          <i class="layui-icon">&#xe640;</i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import navigation from "./navigation/index";

export default {
  name: "user",
  data() {
    return {
      msg: 123,
      items: [1, 2]
    };
  },

  components: {
    navigation
  },

  beforeMount() {
    console.log(123);

    ajax({
      url: "https://api.huziqiqi.top/", // url---->地址
      type: "POST", // type ---> 请求方式
      async: true, // async----> 同步：false，异步：true
      data: {
        //传入信息
        s: "App.User.GetList",
        page: 1,
        perpage: 10
        // state:1
      },
      success: data => {
        //返回接受信息
        data = JSON.parse(data);
        console.log(data);
        this.items = data.data.items;
        console.log(this.items);
      }
    });
  },
  methods: {
    delate() {
      layer.open({
        content: "确认删除吗？",
        btn: ["确认", "取消"],
        yes: function(index, layero) {
          //按钮【按钮一】的回调
        },
        btn2: function(index, layero) {
          //按钮【按钮二】的回调
          //return false 开启该代码可禁止点击该按钮关闭
        },
        btn3: function(index, layero) {
          //按钮【按钮三】的回调
          //return false 开启该代码可禁止点击该按钮关闭
        },
        cancel: function() {
          //右上角关闭回调
          //return false 开启该代码可禁止点击该按钮关闭
        }
      });
    },
    updata() {}
  }
};
</script>

