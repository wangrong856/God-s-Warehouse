<template>
  <div class="addedits">
    <el-dialog :title="dialog.title" :visible.sync="dialog.showdialogs">
      <el-form :model="form" :rules="formRules" ref="formRef">
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="description">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addstyle">确定</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
// 按需导入 添加的接口， 编辑的接口
import { AddallRole,editallRole } from "@/api/getroleall";
export default {
  props: {
    dialog: {
      type: Object,
      required: true,
    },
    form: {
      type: Object,
    },
  },
  data() {
    return {
        // 校验
      formRules: {
        name:[
            {required:true,message:"名称输入不正确",trigger:'blur'},
            {min:3,max:10,message:"名称格式不正确",trigger:"blur"}
        ],
        description:[
            {required:true,message:"描述输入不正确",trigger:'blur'},
            {min:3,max:50,message:"描述格式不正确",trigger:"blur"}
        ],
      },
    };
  },
  methods: {
    addstyle() {
        // 对表单进行校验 
      this.$refs.formRef.validate(async (isok) => {
        if (isok) {
          if (this.dialog.options==='add') {
            // 调用添加的接口 传递数据
            await AddallRole(this.form);
            // 添加成功  提示成功
            this.$message.success("添加成功");
          }else{
             // 编辑
           await editallRole({...this.form,id:this.form.id})
            this.$message.success("编辑成功")
          }
           // 通知父组件 重新刷新数据
           this.$emit("update");
            // 隐藏表单
            this.dialog.showdialogs = false;
        }
      });
    },
  },
};
</script>

<style>
</style>