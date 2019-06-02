<template>
  <div class="layui-body">首页</div>
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
  props: {},
  beforeMount() {
    console.log(123);

    ajax({
      type: "POST", // type ---> 请求方式
      // async----> 同步：false，异步：true
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

