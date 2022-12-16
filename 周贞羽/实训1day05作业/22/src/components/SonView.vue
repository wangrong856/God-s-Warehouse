<template>
  <div class="son">
    <el-dialog :title="dialog.title" :visible.sync="dialog.show">
      <el-form label-width="80px" :model="dialog" ref="formRef">
        <el-form-item label="收支类型">
          <el-select v-model="form.type">
            <el-option
              v-for="(item, index) in slex"
              :key="index"
              :value="item"
              >{{ item }}</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="收支描述" prop="describe">
          <el-input v-model="form.describe"></el-input>
        </el-form-item>
        <el-form-item label="收入" prop="income">
          <el-input v-model="form.income"></el-input>
        </el-form-item>
        <el-form-item label="支出" prop="expend">
          <el-input v-model="form.expend"></el-input>
        </el-form-item>
        <el-form-item label="账户现金" prop="cash">
          <el-input v-model="form.cash"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">取消</el-button>
          <el-button type="primary" @click="sonClick('formRef')"
            >添加</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { addProfiles,editProfiles } from "@/api/profile";
export default {
  props: {
    dialog: {
      required: true,
      type: Object,
    },
    form: {
      type: Object,
    },
  },
  data() {
    return {
      //
      formRef: {},
      slex: ["蕲艾碗", "收到回", "夏", "春", "money", "冬"],
    };
  },
  methods: {
    sonClick(formref) {
      this.$refs[formref].validate(async (isok) => {
        if (isok) {
          if (this.dialog.option === "add") {
            await addProfiles(this.form);
            this.$message({
              message: "添加成功",
              type: "success",
            });
          }
          if(this.dialog.option==='edit'){
            await editProfiles(this.form)
            this.$message({
              message:"编辑成功",
              type:"success"
            })
          }
          this.$emit("update");
          this.dialog.show = false;
        } else {
          console.log("error");
          return false;
        }
      });
    },
  },
};
</script>

<style>
</style>