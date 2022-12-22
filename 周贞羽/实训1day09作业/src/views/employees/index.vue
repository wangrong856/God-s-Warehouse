<template>
  <div class="boxinfo">
    <div class="boxc">
    <el-card class="tree-card">
      <tree-tools :company="company" :isroot="true"></tree-tools>
      <!-- 树形架构 -->
      <el-tree :data="departs" :props="defalutProps">
        <tree-tools slot-scope="{data}" :company="data" @delDepts="getDepartments"></tree-tools>
      </el-tree>
    </el-card>
     
     <!-- 添加和修改的组件 -->
     <add-dept :showDialog="showDialog" :node="node" @addDepts="getDepartments"></add-dept>
    </div>
  </div>
</template>

<script>
// 树形组件
import TreeTools from './components/tree-tools.vue'
// 部门框架接口
import {getDepartments} from '@/api/departments'
// 树形数据
import {tranListToTreeData} from '@/utils/tree'
// 添加和编辑的子组件
import AddDept from './components/add-dept.vue'
export default {
  components:{
    TreeTools,AddDept
  },
  data() {
    return {
      // 
      showDialog:false,
      node:"",
      company:{
        name:"周羽传媒有限公司",
        manager:"负责人"
      },
      // 树形数组
      departs:[],
      defalutProps:{
        label:"name"
      }
    };
  },
  created(){
    this.getDepartments()
  },
  methods:{
    // 获取树形数据
    async getDepartments(){
      const result=await getDepartments()
      console.log(result.depts);
     this.departs=tranListToTreeData(result.depts,'')
    },
    // 添加
    addDepts(node){
      this.showDialog=true;
      this.node=node;
    }
  }
};
</script>

<style scoped>
/* .hhhh {
  padding: 30px;
  box-sizing: border-box;
} */
.boxc {
  margin-top: 40px;
  /* background: white; */
}
.tree-card{
  font-size: 20px;
  padding: 30px 140px;
  box-sizing: border-box;
  
}
</style>