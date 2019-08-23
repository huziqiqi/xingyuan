<template>
  <el-form class="goods" ref="form" :model="form" label-width="190px">
    <el-form-item label="商品分类">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="商品名称">
      <el-col :span="12">
        <el-input v-model="goods.name" size="medium"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="副标题">
      <el-col :span="12">
        <el-input type="textarea" v-model="goods.subTitle"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="商品封面图">
      <el-upload
        class="avatar-uploader"
        action="https://api.huziqiqi.top/?service=App.Examples_Upload.Go&token=1"
        :show-file-list="false"
        :on-success="mainImgUpdate"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="mainImg" :src="mainImg" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      {{mainImg}}
      {{goods.mainImg}}
    </el-form-item>
    <el-row :gutter="2">
     <el-col :span="8">
        <el-form-item label="价格">
          <el-input
        placeholder="请输入内容"
        v-model="goods.price">
        </el-input>
      </el-form-item>
      <el-form-item label="库存">
      <el-input
    placeholder="请输入内容"
    v-model="goods.stock">
  </el-input>
    </el-form-item>
    </el-col>
      <el-col :span="8">
         
      </el-col>
      </el-row>
    <el-form-item label="商品轮播图">
      <el-upload
        action="https://api.huziqiqi.top/?service=App.Examples_Upload.Go&token=1"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
    </el-form-item>

    <el-form-item label="商品详情">
      <Uediter
        style="line-height: normal;"
        :value="ueditor.value"
        :config="ueditor.config"
        ref="ue"
      ></Uediter>
      <el-button @click="returnContent()">显示编辑器内容</el-button>
      <div>{{dat.content}}</div>
    </el-form-item>

    <el-form-item label="状态">
      <el-switch v-model="goods.state"></el-switch>
    </el-form-item>
    <el-form-item label="活动性质">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="特殊资源">
      <el-radio-group v-model="form.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<style>
* {
}
</style>

<script>
import Uediter from "../UE";

export default {
  name: "addCode",
  components: {
    Uediter
  },
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },

      goods: {
        name: "",
        mainImg: ""
      },

      dat: {
        content: ""
      },
      ueditor: {
        value: "编辑器默认文字",
        config: {
          initialFrameWidth: 800,
          initialFrameHeight: 320
        }
      },
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

  beforeMount() {
    console.log(123);
    // this.ajaxList();
  },
  methods: {
    returnContent() {
      this.dat.content = this.$refs.ue.getUEContent();
      console.log(this.$refs.ue.getUEContent());
    },
    onSubmit() {
      this.goods.detail = this.$refs.ue.getUEContent();
      ajax({
        data:{
          s:"App.Goods_Product.Insert",
          ...this.goods},
        success:(res)=>{
          console.log(res);
          
        }
      })
      console.log(this.goods);
    },
    mainImgUpdate(res, file, fileList) {
      console.log(res);
      console.log(file);
      console.log(fileList);
      console.log(URL.createObjectURL(file.raw));
      this.goods.mainImg = res.data.url;
      this.mainImg = URL.createObjectURL(file.raw);
    },
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
<style>
.from {
  padding-top: 20px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
