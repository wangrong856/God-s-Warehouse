<template>
  <div class="peinss">
    <el-dialog title="分配权限" :visible="showlogs">
      <el-tree :data="perinss" :props="defaultProps" ref="treeRef" show-checkbox node-key="id" :default-checked-keys="xperinss" :check-strictly="true" :default-expand-all="true">
      </el-tree>
      <el-row slot="footer" type="flex" justify="center">
        <el-col :span="6">
          <el-button type="primary" @click="peinssclick">确定</el-button>
          <el-button>取消</el-button>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import { jurisdiction,getxqictions,treeiction } from "@/api/jurisdiction";
import { tranListToTreeData } from "@/utils/tree";
export default {
  data() {
    return {
      xperinss:[],
      perinss: [],
      defaultProps: {
        children: "children",
        label: "name",
      },
      role:''
    };
  },
  props: {
    showlogs: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    async getallTree(id) {
      this.perinss = tranListToTreeData(await jurisdiction(), "0");
      this.role=id
      let {permIds}=await getxqictions(id)
      this.xperinss=permIds
    },
    async peinssclick(){
        await treeiction({id:this.id,permIds:(this.$refs.treesync.getCheckedKeys(),0)})
        this.$message.success("分配权限成功")
        this.$emit('update:showlogs',false)
    }
  },
};
</script>

<style>
</style>