<template>
  <div class="layui-layout layui-layout-admin">
    <navigation></navigation>
    <div class="layui-body">
      <form class="layui-form">
        <div class="layui-form-item">
          <label class="layui-form-label">扩展名</label>
          <div class="layui-input-block">
            <input
              type="text"
              name="title"
              required
              lay-verify="required"
              placeholder="请输入代码名称"
              autocomplete="off"
              class="layui-input"
              v-model="name"
            >
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">提示缩写</label>
          <div class="layui-input-block">
            <input
              type="text"
              name="title"
              required
              lay-verify="required"
              placeholder="请输入代码名称"
              autocomplete="off"
              class="layui-input"
              v-model="prefix"
            >
          </div>
        </div>
        <div class="layui-form-item layui-form-text">
          <label class="layui-form-label">文本域</label>
          <div class="layui-input-block">
            <textarea name="desc" placeholder="请输入内容" class="layui-textarea"></textarea>
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">备注</label>
          <div class="layui-input-block">
            <input
              type="text"
              name="title"
              required
              lay-verify="required"
              placeholder="请输入代码名称"
              autocomplete="off"
              class="layui-input"
              v-model="prefix"
            >
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">类型</label>
          <div class="layui-input-inline">
            <select name="city" lay-verify="required" v-for="item in typeList" :key="item">
              <option value="0">请选择</option>
              <option :value="item.id">{{item.type}}</option>
            </select>
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-input-block">
            <button class="layui-btn" @click="insert">立即提交</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import navigation from "../navigation/index";
export default {
  name: "addCode",
  data() {
    return {
      msg: 123,
      items: [1, 2],
      typeList: [],
      page: 1,
      name: "",
      prefix: "",
      body: "",
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
  methods: {
    ajaxList() {
      ajax({
        url: "https://api.huziqiqi.top/", // url---->地址
        type: "POST", // type ---> 请求方式
        async: true, // async----> 同步：false，异步：true
        data: {
          //传入信息
          s: "App.Canvas.GetType"

          // state:1
        },
        success: data => {
          //返回接受信息
          data = JSON.parse(data);
          console.log(data);
          this.typeList = data.data;
          console.log(this.items);
        }
      });
    },
    insert() {
      var that = this;
      ajax({
        url: "https://api.huziqiqi.top",
        type: "POST",
        async: true,
        data: {
          s: "App.Canvas.Insert",
          name: this.name,
          prefix: this.prefix,
          body: this.body2,
          description: this.description
        },
        success: function(data) {
          console.log(data);
        }
      });
    }
  }
};
</script>

