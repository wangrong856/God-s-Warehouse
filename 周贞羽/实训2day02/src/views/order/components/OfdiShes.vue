<template>
  <div class="ofdishes">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/order' }">菜品管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加菜品</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="box"></div>
    <el-card>
      <el-form :model="date">
        <el-form-item label="菜品类目">
          <el-select v-model="date.category" placeholder="请选择">
            <el-option
              v-for="item in selesz"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="菜品名称">
          <el-input v-model="date.name"></el-input>
        </el-form-item>
        <el-form-item label="菜品价格">
          <el-input v-model="date.unitprice"></el-input>
          <el-select v-model="date.unit" placeholder="请选择">
            <el-option
              v-for="item in unitdata"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="菜品图片">
          <!-- <div v-for="(ite, inde) in data.image" :key="inde">
            <img :src="ite.url" alt="" />
          </div> -->
          <el-upload
            list-type="picture-card"
            action="https://meituan.thexxdd.cn/apit/uploadres"
            :on-success="onchangeimg"
            :file-list="date.image"
            :headers="headerobj"
          >
            <!-- action是基地址加接口的地址 -->
            <!-- headers请求头 -->
            <!-- file-list上传的图片列表 -->
            <!-- 是否显示已上传文件列表 show-file-list-->
            <i class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-button @click="getuploadsync">确定</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// 获取菜品类目//获取菜品单位//上架菜品
import { obtaincate, getobtainunit,putdishes, } from "@/Api/obtaincate";

export default {
  data() {
    return {
      selesz: [], //类目
      date: {
        id:"",
        category: "", //所属分类
        name: "", //名称
        unitprice: 1, //价格
        unit: "", //份
        image: [],
      },
      unitdata: [], //单位
      // 图片的请求头
      headerobj: {
        Authorization: localStorage.getItem("tokens"),
      },
    };
  },
  created() {
    this.getobjt();
  },
  methods: {
    async getobjt() {
      let sz = await obtaincate();
      console.log(sz.data);
      this.selesz = sz.data;
      let scss = await getobtainunit();
      console.log(scss.data);
      this.unitdata = scss.data;
    
    },
   
    // 成功的回调
    onchangeimg(file,fileList){
      console.log(file);
      console.log(fileList);
      let {data,msg}=file;
      this.$message.success(msg)
      let obj={
        uid:fileList.uid,
        url:data
      }
      this.date.image.push(obj)
    },
    // 点击确定
    async getuploadsync() {
      let res= await putdishes({ ...this.date });
      console.log(res);
    },
  },
};
</script>

<style scoped>
.box {
  width: 100vw;
  height: 10px;
}
.inputs {
  width: 130px;
  margin-right: 5px;
}
</style>