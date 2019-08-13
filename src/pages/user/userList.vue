<template>
  <div>
    <!-- 内容主体区域 -->
    <el-table
      :data="items"
      :default-sort="{prop: 'id'}"
      @selection-change="handleSelectionChange()"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column sortable prop="id" label="用户id" width="140"></el-table-column>
      <el-table-column prop="username" label="姓名" width="120"></el-table-column>
      <el-table-column prop="create_date" label="注册时间"></el-table-column>
      <el-table-column prop="address" width="150" label="状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.state"
            @change="changeState(scope.row.state,scope.row.id)"
            :active-text="scope.row.state?'正常使用':'已注销'"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop width="300" label="操作">
        <template slot-scope="scope">
          <el-button :size="size" type="success">查看</el-button>
          <!-- <el-button :size="size" type="info"></el-button> -->
          <el-button :size="size" type="warning">修改</el-button>
          <el-button :size="size" type="danger" @click="delate(scope.$index,scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "user",
  data() {
    return {
      msg: 123,
      items: [1, 2],
      value2: true,
      size: "mini",
      multipleSelection: []
    };
  },

  beforeMount() {
    console.log(123);

    ajax({
      data: {
        //传入信息
        s: "App.User.GetList",
        page: 1,
        perpage: 10
      },
      success: res => {
        //返回接受信息
        console.log(res);
        for (let i = 0; i < res.data.items.length; i++) {
          const element = res.data.items[i];
          element.state = element.state == 1 ? true : false;
        }
        this.items = res.data.items;

        console.log(this.items);
      }
    });
  },
  methods: {
    changeState(e, id) {
      console.log(e);
      ajax({
        data: {
          //传入信息
          s: "App.User.ChangeState",
          id,
          state: e ? 1 : 0,
          page: 1,
          perpage: 10
        },
        success: res => {
          //返回接受信息
          console.log(res);
        }
      });
      //   this.items.map(element => {
      //     if (element.id == e.id) {
      //       e.state == 1 ? (element.state = 1) : (element.state = 0);
      //     }
      //     return element;
      //   });
    },

    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection);
    },
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

