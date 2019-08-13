<template>
  <div class="layui-layout layui-layout-admin">
    <navigation></navigation>
    <div class="layui-body">
      <!-- 内容主体区域 -->
      <div style="padding: 15px;">
        内容主体区域
        {{msg}}
        <table class="layui-table">
          <thead>
            <tr>
              <td>id</td>
              <td>名称</td>
              <td>缩写</td>
              <td>代码主题</td>
              <td>代码备注</td>
              <td style="width:200px">操作详情</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items">
              <td>{{item.id}}</td>
              <td>{{item.name}}</td>
              <td>{{item.prefix}}</td>
              <td>{{item.body}}</td>
              <td>{{item.description}}</td>
              <td>
                <button class="layui-btn layui-btn-normal layui-btn-xs">查看</button>
                <button class="layui-btn layui-btn-warm layui-btn-xs">更新</button>
                <button class="layui-btn layui-btn-danger layui-btn-xs" @click="delate()">删除</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>测试</tr>
          </tfoot>
        </table>
      </div>
      <div>
        当前页{{page}}
        <div @click="nextpage()">next</div>
      </div>
    </div>
  </div>
</template>
<script>
import navigation from "../navigation/index";
export default {
  name: "user",
  data() {
    return {
      msg: 123,
      items: [1, 2],
      page: 1
    };
  },
  components: {
    navigation
  },
  beforeMount() {
    console.log(123);

    this.ajaxList();
  },
  methods: {
    ajaxList() {
      ajax({
        url: "https://api.huziqiqi.top/", // url---->地址
        type: "POST", // type ---> 请求方式
        async: true, // async----> 同步：false，异步：true
        data: {
          //传入信息
          s: "App.Canvas.GetList",
          page: this.page,
          perpage: 10,
          type: "canvas"
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
    nextpage() {
      console.log((this.page += 1));
      this.ajaxList();
    }
  }
};
</script>

