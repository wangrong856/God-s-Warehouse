<template>
  <!-- <div class="tree-tools"> -->
        <el-row
        style="height:30px; width:100%"
        type="flex"
        justify="space-between"
        align="middle"
      >
        <el-col class="clos">
          <span>{{company.name }}</span>
        </el-col>
        <el-col :span="4">
          <el-row type="flex" justify="end">
            <el-col>负责人</el-col>
            <el-col>
              <!-- 下拉菜单 -->
              <el-dropdown @command="operaDepts">
                <span class="el-dropdown-link">
                  操作<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>添加子部门</el-dropdown-item>
                  <el-dropdown-item v-if="!isroot">编辑部门</el-dropdown-item>
                  <el-dropdown-item v-if="!isroot">删除部门</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
  <!-- </div> -->
</template>

<script>
import {delDepartments} from '@/api/departments'
export default {    
    props:{
        // 对象 名字
        company:{
            type:Object,
            required:true,
        },
        // 显示隐藏
        isroot:{
            type:Boolean,
            default:false,
        }
    },
    methods:{
        // 判断是添加/编辑/删除
          operaDepts(type){
            // 添加
            if(type==='add'){
                this.$emit('addDepts',this.company)
            }else if(type==='edit'){
                // 编辑
            }else{
                // 删除操作
                this.$confirm('确定要删除该部门吗')
                .then(()=>{
                    // 点击了确定就会进入then
                    // 调用删除的接口 传递id
                    return delDepartments(this.company.id)
                })
                .then(()=>{
                    // 如果删除成功这里被执行
                    // 通知父组件-重新刷新数据
                    this.$emit('delDepts')
                    this.$message.success("删除部门成功")
                })
            }
         }
     }
}
</script>

<style>

</style>