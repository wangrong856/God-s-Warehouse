<template>
  <div class="rights">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <terr-table
        :columns="columns"
        :data="rightsRrom"
        show-index
        index-text="#"
        stripe
        :selection-type="false"
        :expand-type="false"
        border
      >
        <template slot="quan" slot-scope="{ row }">
          <el-tag v-if="row.level == 0">一级</el-tag>
          <el-tag v-if="row.level == 1" type="warning">二级</el-tag>
          <el-tag v-if="row.level == 2" type="success">三级</el-tag>
        </template>
      </terr-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Deom03Rights",

  data() {
    return {
      rightsRrom: [],
      columns: [
        { label: "权限名称", prop: "authName" },
        { label: "路径", prop: "path" },
        { label: "权限等级", type: "template", template: "quan" },
      ],
    };
  },

  mounted() {},

  created() {
    this.getRightFrom();
  },

  methods: {
    async getRightFrom() {
      let res = await this.$http.get("/rights/list");
      let { data, meta } = res.data;
      if (meta.status != 200) return this.$message.error(meta.msg);
      this.rightsRrom = data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
