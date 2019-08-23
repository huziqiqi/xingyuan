<template>
  <div>
    <el-table
      :data="navList"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column prop="name" label="分类名" width="180">
        <template slot-scope="scope">
          <div
            v-if="iselect!=scope.row.id"
            @click="editor(scope.row.id)"
            class="aee"
          >{{scope.row.name}}</div>
          <el-input v-else @blur="updata(scope.row)" placeholder="请输入内容" v-model="scope.row.name"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="parent_id" label="日期" width="180"></el-table-column>
      <el-table-column prop="id" label="操作">
        <template slot-scope="scope">
          <el-button :size="size" type="success" @click="show(scope.row.id)">添加</el-button>
          <!-- <el-button :size="size"type="info">信息按钮</el-button> -->
          <!-- <el-button :size="size"type="warning">警告按钮</el-button> -->
          <el-button
            :size="size"
            type="danger"
            v-if="scope.row.parent_id!=0"
            @click="delate(scope.$index,scope.row.id)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      :title="flg==0?'添加分类':'修改分类'"
      :visible.sync="isShow"
      :modal="false"
      @closed="isShow=false;name=''"
    >
      <el-form ref="ruleForm">
        <el-form-item label="添加分类" label-width="100" prop="name">
          <el-input v-model="name"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow=false;;name=''">取 消</el-button>
        <el-button type="primary" @click="addCategory()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "dataList",
  props: {
    faget: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      flg: "",
      name: "",
      isShow: false,
      size: "mini",
      hasChildren: true,
      navList: [],
      iselect: ""
    };
  },
  created() {
    this.getCategoryList(0);
  },
  methods: {
    updata(e) {
      this.iselect = 0;
      ajax({
        data: {
          s: "App.Goods_Category.Update",
          id: e.id,
          parentId: e.parent_id,
          name: e.name
        },
        success: res => {
          let data = JSON.parse(res);
          if (data.data.code == 1) {
            this.$message({
              message: "修改成功",
              type: "success"
            });
          } else {
            this.$message.error("修改失败");
          }
        }
      });

      console.log(e);
    },
    show(flg) {
      this.isShow = true;
      this.flg = flg;
    },
    editor(id) {
      console.log(id);
      this.iselect = id;
    },
    addCategory() {
      ajax({
        data: {
          s: "App.Goods_Category.Insert",
          parentId: this.flg,
          name: this.name,
          state: 1
        },
        success: res => {
          let data = JSON.parse(res);
          console.log(data);
          if (data.data.id) {
            this.$message({
              message: "添加分类成功",
              type: "success"
            });
          } else {
            this.$message.error("添加失败");
          }
        }
      });
    },
    getCategory(id) {
      ajax({
        data: {
          s: "App.Goods_Category.Get",
          id: this.curitem.id
        },
        success: res => {
          let data = JSON.parse(res);
          if (data.data) {
            this.item = data.data;
            this.name = data.data.name;
          } else {
            console.log("无数据");
            this.$message("找不到这条数据");
          }
        }
      });
    },
    getCategoryList(id) {
      console.log(this.navList);

      ajax({
        data: {
          s: "App.Goods_Category.GetList",
          parentId: id
        },
        success: res => {
          let data = JSON.parse(res);
          if (data.data[0]) {
            this.navList = data.data;

            console.log(this.navList);
          } else {
            this.$message("该分类暂为空");
          }
        }
      });
    },

    load(tree, treeNode, resolve) {
      console.log();
      // getCategoryList(tree);

      ajax({
        data: {
          s: "App.Goods_Category.GetList",
          parentId: tree.id
        },
        success: res => {
          let data = JSON.parse(res);
          if (data.data[0]) {
            for (let i = 0; i < data.data.length; i++) {
              const element = data.data[i];
              element.hasChildren == 1 ? true : false;
            }
            resolve(data.data);
            console.log(this.navList);
          } else {
            this.$message("该分类暂为空");
          }
        }
      });
    }
  }
};
</script>
<style>
.cell {
  display: flex;
  align-items: center;
}
</style>
