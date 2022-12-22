<template>
  <div class="addedit">
    <el-dialog :title="dialog.title" :visible.sync="dialog.showdialog">
      <el-form
        label-width="80px"
        :model="form"
        :rules="formrules"
        ref="formRef"
      >
        <el-form-item label="名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="标识" prop="code">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item>
          <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addForm">确定</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { addiction, editxqiction } from "@/api/jurisdiction";
export default {
  data() {
    return {
      value: false,
      //   表单校验
      formrules: {
        name: [
          { required: true, message: "名称输入不正确", trigger: "blur" },
          { min: 1, max: 10, message: "名称格式不正确", trigger: "blur" },
        ],
        code: [
          { required: true, message: "标识输入不正确", trigger: "blur" },
          { min: 1, max: 10, message: "标识格式不正确", trigger: "blur" },
        ],
        description: [
          { required: true, message: "描述输入不正确", trigger: "blur" },
          { min: 1, max: 50, message: "描述格式不正确", trigger: "blur" },
        ],
      },
    };
  },
  props: {
    dialog: {
      type: Object,
      required: true,
    },
    form: {
      type: Object,
    },
  },
  methods: {
    addForm() {
      this.$refs.formRef.validate(async (isok) => {
        if (isok) {
          if (this.dialog.options === "add") {
            await addiction(this.form);
            this.$message({
              type: "success",
              message: "添加成功!",
            });
          } else {
            await editxqiction(this.form);
            this.$message.success("编辑成功")
          }
          this.$emit("addstyle");
          this.dialog.showdialog = false;
        } 
      });
    },
  },
};
</script>

<style scoped>
</style>