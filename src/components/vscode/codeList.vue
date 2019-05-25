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
                <button
                  class="layui-btn layui-btn-normal layui-btn-xs"
                  @click="checkcode(item.id)"
                >查看</button>
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
        <div @click="lastpage()">next</div>
        当前页{{page}}
        <div @click="nextpage()">next</div>
      </div>
    </div>
    <div class="code" v-show="1==10">
      <code>
        <span>"{{name}}": {</span>
        <br>
        <span>&nbsp;&nbsp;"prefix": "{{prefix}}",</span>
        <br>
        <span>&nbsp;&nbsp;"body":[</span>
        <br>
        <span v-for="line in body1">
          &nbsp;&nbsp;&nbsp;&nbsp;"{{line}}",
          <br>
        </span>
        <span>&nbsp;&nbsp;],</span>
        <br>
        <span>&nbsp;&nbsp;"description": "{{description}}"</span>
        <br>
        <span>},</span>
        <br>
      </code>
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
      page: 1,
      name: "",
      prefix: "",
      body1: [],
      body: [],
      description: ""
    };
  },
  components: {
    navigation
  },
  beforeMount() {
    console.log(123);
    this.ajaxList();
  },
  watch: {
    body(newVal) {
      this.body1 = newVal.replace(/\"/g, '\\"').split("\n");
      this.body2 = newVal.replace(/\,/g, "￥").replace(/\"/g, '\\"');
    },
    value(newVal) {
      this.get(newVal);
    }
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
    },
    lastpage() {
      console.log((this.page -= 1));
      this.ajaxList();
    },
    get(id) {
      var that = this;

      return new Promise(function(resolve, reject) {
        ajax({
          url: "https://api.huziqiqi.top/",
          type: "POST",
          async: true,
          data: {
            s: "App.Canvas.Get",
            id: id
          },
          success: function(data) {
            data = JSON.parse(data);
            data = data.data;
            if (data == false) {
              that.isExist = false;
              console.log(that.isExist);
            } else {
              that.isExist = true;
              that.name = data.name;
              that.prefix = data.prefix;
              that.body = data.body
                .replace(/,/g, "\n")
                .replace(/\\"/g, '"')
                .replace(/\￥/g, ",");
              that.description = data.description;
            }
            resolve(data);
          }
        });
      });
    },
    checkcode(id) {
      this.get(id).then(function(num) {
        var codeNode = document.querySelector("code");
        layer.open({
          type: 1,
          skin: "layui-layer-rim", //加上边框
          area: ["560px", "320px"], //宽高
          content: codeNode.innerHTML
        });
      });
    },
    delate() {
      layer.confirm(
        "您是否要删除？",
        {
          btn: ["重要", "奇葩"] //按钮
        },
        function() {
          layer.msg("的确很重要", { icon: 1 });
        },
        function() {
          layer.msg("也可以这样", {
            time: 20000, //20s后自动关闭
            btn: ["明白了", "知道了"]
          });
        }
      );
    }
  }
};
</script>

