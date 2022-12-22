<template>
  <div class="treepeinss">
    <el-dialog title="分配权限" :visible="showcylog">
      <el-tree ref="treesyncs"  show-checkbox node-key="id" :data="peinss" :props="defaultProps" :default-expand-all="true" :check-strictly="true" :default-checked-keys="array"></el-tree>
      <el-row slot="footer" type="flex" justify="center">
        <el-col :span="6">
          <el-button type="primary" @click="treeClick">确定</el-button>
          <el-button>取消</el-button>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import { jurisdiction ,getxqictions,treeiction} from "@/api/jurisdiction";
import { tranListToTreeData } from "@/utils/tree";
export default {
  data() {
    return {
        // 渲染所有树形解构的数据
      peinss: [],
        //   数据的名称
      defaultProps: {
          children: 'children',
          label: 'name'
        },
        // 数据详情
        array:[],
        id:""
    };
  },
  props: {
    showcylog: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    async gettree(id) {
        // 获取所有数据 转换成树形结构
      this.peinss = tranListToTreeData(await jurisdiction(), "0");
      console.log(this.peinss);
      this.id=id;
    //   获取角色详情 进行解构
      let {permIds} =await getxqictions(id)
    //   赋值给新数组
      this.array=permIds
    },
    async treeClick(){
        await treeiction({id:this.id,permIds:(this.$refs.treesyncs.getCheckedKeys())})
        console.log(this.$refs.treesyncs.getCheckedKeys(),0);
        this.$message.success("分配权限成功")
        this.$emit('update:showcylog',false)
    }
  },
};
</script>

<style>
</style>