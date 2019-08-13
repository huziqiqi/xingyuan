<template>
  <div>
    <!-- 内容主体区域 -->
    <div style="padding: 15px;">
      <div v-for="(group, gindex) in navList" class="group" :key="gindex">
        <el-select
          @click="test()"
          placeholder="请选择"
          v-model="selected[gindex]"
          @change="getTypeSelected(selected[gindex],gindex)"
        >
          <el-option
            v-for="(litem,lindex) in group"
            :key="lindex"
            :label="litem.name"
            :value="lindex"
          ></el-option>
        </el-select>
      </div>
      <!-- <el-button type="text" @click="show(0)">增加分类</el-button> -->
      <!-- <el-button v-popover:popover4  @click="">增加分类</el-button>           -->
      <el-button v-popover:popover4 @click="delCategory()">删除分类</el-button>
      <el-button v-popover:popover4 @click="show(1)">修改分类</el-button>
    </div>

    <list></list>
  </div>
</template>
<script>
import list from "./list";

export default {
  name: "home",
  components: {
    list: list
  },
  data() {
    return {
      name: "",
      navList: [],
      selected: ["请选择"],
      curPid: 0,
      curitem: {
        id: 1,
        name: "全部",
        parent_id: 0
      },
      isShow: false,
      item: {},
      cur: {
        gindex: 0,
        lindex: 0
      }
    };
  },

  created() {
    this.getCategoryList(0);
  },

  methods: {
    test() {
      console.log("ceshi");
    },
    show(flg) {
      this.isShow = true;
      this.flg = flg;
      console.log(flg);

      if (flg == 1) {
        this.getCategory(this.curPid);
      }
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },

    getTypeSelected(lindex, gindex) {
      //获取选中的违规类型
      let pid = this.navList[gindex][lindex].id;
      this.curitem = this.navList[gindex][lindex];
      this.cur = {
        gindex,
        lindex
      };
      let cha = this.navList.length - gindex;
      this.navList.splice(gindex + 1, cha + 1);
      this.selected.splice(gindex + 1, cha + 1);
      this.selected[gindex + 1] = "请选择";
      if (lindex != 0) {
        this.getCategoryList(pid);
      }
    },

    submit() {
      if (this.flg == 0) {
        this.addCategory();
      } else {
        this.updateCategory();
      }
    },

    delCategory() {
      let gindex = this.cur.gindex;
      let lindex = this.cur.lindex;
      ajax({
        data: {
          s: "App.Goods_Category.Delete",
          id: this.navList[gindex][lindex].id
        },
        success: res => {
          let data = JSON.parse(res);
          console.log(data);
          if (data.data.code == 1) {
            this.$message({
              message: "删除成功",
              type: "success"
            });

            this.navList[gindex].splice(lindex, 1);
            if (!this.navList[gindex][1]) {
              this.navList.splice(gindex, 1);
            }
          } else {
            this.$message.error("删除失败");
          }
        }
      });
    },
    updateCategory() {
      ajax({
        data: {
          s: "App.Goods_Category.Update",
          id: this.item.id,
          parentId: this.item.parent_id,
          name: this.name,
          state: 1
        },
        success: res => {
          let data = JSON.parse(res);
          if (data.data.code == 1) {
            this.$message({
              message: "修改成功",
              type: "success"
            });
            this.name = "";
            this.isShow = false;
            this.navList = [];
            this.getCategoryList(0);
          } else {
            this.$message.error("修改失败");
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
          let item = {};
          if (data.data[0]) {
            item.id = this.curitem.id;
            item.name = "全部";
            item.parent_id = this.curitem.parent_id;
            data.data.unshift(item);

            this.navList.push(data.data);
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
.group {
  display: inline-block;
}
</style>
