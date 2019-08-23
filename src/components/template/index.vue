<template lang="">
     <div class="layui-body">
    <!-- 内容主体区域 -->
    <div style="padding: 15px;">
      内容主体区域
     
      <table class="layui-table">
        <thead>
          <tr>
            <td>id</td>
            <td>标题</td>
            <td>副标题</td>
            <td>状态</td>
            <td>创建时间</td>
            <td style="width:200px">操作详情</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in dataBody" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.subtit}}</td>
            <td>{{item.status}}</td>
            <td>{{item.updataTime}}</td>
            <td>
              <button class="layui-btn layui-btn-normal layui-btn-xs" @click="checkcode(item.id)">查看</button>
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
      <div class="layui-btn-group">
        <button class="layui-btn layui-btn-sm" @click="lastpage()">
          <i class="layui-icon">&#xe603;</i>
        </button>
        <button class="layui-btn layui-btn-sm">总页{{pages}}当前页{{page}}</button>
        <button class="layui-btn layui-btn-sm">
          <i class="layui-icon">&#xe640;</i>
        </button>
        <button class="layui-btn layui-btn-sm" @click="nextpage()">
          <i class="layui-icon">&#xe602;</i>
        </button>
      </div>
    </div>
    <layer></layer>
  </div>
</template>
<script>
import layer from "./layer";
export default {
  
  name:"templat",
  data() {
    return {
      page:1,
      pages:1,
      dataHead:["id","name","subtitle","status","updataTime"],
      dataBody:[
        {
          id:0,
          name:"好无聊的一天",
          subtit:"今天真的好无聊啊",
          status:1,
          updataTime:"2019-04-20"
        },
         {
          id:0,
          name:"好无聊的一天",
          subTime:"今天真的好无聊啊",
          status:1,
          updataTime:"2019-04-20"
        }
      ]
    }
  },
  components: {
    laye:layer,
  },
  mounted() {
    // console.log(this.dataBody);

 
    
  },   
  methods: {
     get(id) {
      var that = this;
      return new Promise(function(resolve, reject) {
      let  data=1
      layui.use("layer", function() {
      var layer = layui.layer;
    });
            resolve(data);
        
      });
    },
    checkcode(id) {
      this.get(id).then(function(num) {
        var codeNode = document.querySelector("code");
      console.log(codeNode );
  
        layer.open({
          type: 1,
          skin: "layui-layer-rim", //加上边框
          area: ["560px", "320px"], //宽高
          content: codeNode.innerHTML
        });
      });
    },
  },
}
</script>
<style>

</style>
