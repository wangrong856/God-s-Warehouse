<template>
    <div class="container">
        <div class="app-container">
            <el-card class="tree-card">
                <tree-tools :tree-node="company" :is-root="true"></tree-tools>
                <!-- 树形架构 -->
                <el-tree :data="departs"  :props="defaultProps">
                   <!-- 插槽内容  会循环多次 有多少节点 就循环多少次
                       作用域插槽 slot-scope=""  data 每个节点的数据对象
                    -->
                   <tree-tools slot-scope="{data}" :tree-node="data"></tree-tools>
                </el-tree>
            </el-card>
        </div>
    </div>
</template>

<script>
import TreeTools from './components/tree-tools.vue'
import {getDepartments} from '@/api/departments.js'
import {tranListToTreeData} from '@/utils'
    export default {
  components: { TreeTools },
         data() {
                return {
                company:{
                   name:"明阳食品科技有限公司",
                   manager:"负责人"
                },
                departs: [],
                defaultProps:{
                    label:"name"
                }
            }
         },
         created(){
            this.getDepartments()
         },
         methods: {
          async  getDepartments() {
            const result= await getDepartments()
            console.log(tranListToTreeData(result.depts))
            // 需要将其转换为树形结构数据
            this.departs=tranListToTreeData(result.depts)
            

            }
         },
    }
</script>

<style scoped>
.tree-card{
    padding: 30px 140px;
    font-size: 14px;
}
</style>