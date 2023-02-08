<template>
  <div class="addrole">
    <el-dialog :visible.sync="dialog">
      <el-form :model="addsync" label-width="100px">
        <el-form-item label="时间">
          <el-input v-model="addsync.date"></el-input>
        </el-form-item>
        <el-form-item label="工号">
          <el-input v-model="addsync.jobnumber"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="addsync.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio v-model="addsync.sex" label="1">男</el-radio>
          <el-radio v-model="addsync.sex" label="2">女</el-radio>
        </el-form-item>
        <el-form-item label="职位">
          <el-input v-model="addsync.position"></el-input>
        </el-form-item>
        <el-form-item label="是否离职">
          <el-radio v-model="addsync.quit" label="1">在职</el-radio>
          <el-radio v-model="addsync.quit" label="2">已离职</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button>取消</el-button>
          <el-button type="primary" @click="addrole">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import {addemsync} from '@/Api/getemployess'
export default {
  data() {
    return {
    };
  },
  props: {
    dialog: {
      type: Boolean,
    },
    addsync: {
      type: Object,
    },
  },
  methods:{
    async addrole(){
        await addemsync(this.addsync)
        this.$message.success("添加成功哈")
        this.$emit('updatadd')
        this.$emit('update:dialog',false)
    }
  }
};
</script>

<style>
</style>