<template>
  <div class="categories">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row>
        <el-col>
          <el-button type="primary" @click="cateAdd()">添加分类</el-button>
        </el-col>
      </el-row>
      <terr-table
        :data="goodsList"
        :columns="columns"
        :expand-type="false"
        stripe
        show-index
        index-text="#"
        :selection-type="false"
        border
        style="margin-top: 15px"
      >
        <template slot="isok" slot-scope="{ row }">
          <i
            v-if="row.cat_deleted == false"
            class="el-icon-success"
            style="color: green"
          ></i>
          <i v-else class="el-icon-error" style="color: red"></i>
        </template>
        <template slot="sort" scope="{row}">
          <el-tag v-if="row.cat_level == 0">一极</el-tag>
          <el-tag v-if="row.cat_level == 1" type="success">二极</el-tag>
          <el-tag v-if="row.cat_level == 2" type="warning">三极</el-tag>
        </template>
        <template slot="csrea" slot-scope="{ row }">
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-edit"
            @click="modifyAdd(row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="delAdd(row)"
            >删除</el-button
          >
        </template>
      </terr-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="goodsInfo.pagenum"
        :page-sizes="[5, 7, 9, 10]"
        :page-size="goodsInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>

    <el-dialog
      title="添加分类"
      :visible.sync="addCateDialogVisible"
      width="50%"
    >
      <el-form
        :model="cateFromAdd"
        status-icon
        :rules="cateRules"
        ref="cateRuleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="分类名称" prop="cat_name">
          <el-input
            v-model="cateFromAdd.cat_name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="分类分类">
          <template>
            <el-cascader
              v-model="keys"
              :options="cateOptions"
              @change="handleChange"
              :props="expandTrigger"
            ></el-cascader>
          </template>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addCateDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCateFrom()">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="修改内容" :visible.sync="modifyDialogVisible" width="50%">
      <el-form
        :model="modifyCateFromAdd"
        status-icon
        :rules="modifyCateRules"
        ref="modifyCateRuleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="分类名称" prop="cat_name">
          <el-input
            v-model="modifyCateFromAdd.cat_name"
            autocomplete="off"
          ></el-input> </el-form-item
      ></el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="modifyDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="modifyAddFrom">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Deom03Categories",

  data() {
    return {
      goodsInfo: {
        type: 3,
        pagesize: 5,
        pagenum: 1,
      },
      total: 0,
      goodsList: [],
      columns: [
        { label: "分类名称", prop: "cat_name" },
        { label: "是否有效", type: "template", template: "isok" },
        { label: "排序", type: "template", template: "sort" },
        { label: "操作", type: "template", template: "csrea" },
      ],
      addCateDialogVisible: false,
      cateFromAdd: {
        cat_pid: "",
        cat_name: "",
        cat_level: "",
      },
      cateRules: {
        cat_name: [
          { required: true, message: "请输入分类", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 1 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
      keys: [],
      cateOptions: [],
      expandTrigger: {
        value: "cat_id",
        label: "cat_name",
        children: "children",
      },
      modifyCateFromAdd: {
        cat_id: "",
        cat_name: "",
      },
      modifyCateRules: {
        cat_name: [{ required: true, message: "请输入分类", trigger: "blur" }],
      },
      modifyDialogVisible: false,
    };
  },

  mounted() {},

  created() {
    this.getGoodsList();
  },

  methods: {
    async getGoodsList() {
      let res = await this.$http.get("/categories", { params: this.goodsInfo });
      let { data, meta } = res.data;
      if (meta.status != 200) return this.$message.error(meta.msg);
      // this.$message.success(ElTable.msg)
      this.goodsList = data.result;
      this.total = data.total;
      // console.log(res);
    },
    async cateAdd() {
      let res = await this.$http.get("/categories", { params: { type: 2 } });
      let { data, meta } = res.data;
      if (meta.status != 200) return this.$message.error(methods.msg);
      this.cateOptions = data;
      this.addCateDialogVisible = true;
    },
    handleSizeChange(size) {
      this.goodsInfo.pagesize = size;
      this.getGoodsList();
    },
    handleCurrentChange(num) {
      this.goodsInfo.pagenum = num;
      this.getGoodsList();
    },
    addCateFrom() {
      this.$refs.cateRuleForm.validate(async (bool) => {
        if (!bool) return this.$message.info("请选择");
        //  || !this.keys.length
        let res = await this.$http.post("/categories", this.cateFromAdd);
        let { data, meta } = res.data;
        if (meta.status != 201) return this.$message.error(meta.msg);
        this.$message.success(meta.msg);
        this.getGoodsList();
        this.cateFromAdd.cat_name = "";
        this.addCateDialogVisible = false;
      });
    },
    handleChange() {
      if (this.keys.length > 0) {
        this.cateFromAdd.cat_pid = this.keys[this.keys.length - 1];
        this.cateFromAdd.cat_level = this.keys.length;
      } else {
        this.cateFromAdd.cat_pid = 0;
        this.cateFromAdd.cat_level = 0;
      }
    },
    modifyAdd(row) {
      this.modifyDialogVisible = true;
      this.modifyCateFromAdd = { ...row };
    },
    modifyAddFrom() {
      this.$refs.modifyCateRuleForm.validate(async (bool) => {
        if (!bool) return;
        let res = await this.$http.put(
          `/categories/${this.modifyCateFromAdd.cat_id}`,
          this.modifyCateFromAdd
        );
        let { data, meta } = res.data;
        this.$message.success(meta.msg);
        // console.log(res);
        this.getGoodsList();
        this.modifyDialogVisible = false;
        this.cateFromAdd.cat_name = "";
      });
    },
    delAdd(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let res = await this.$http.delete(`/categories/${row.cat_id}`);
          let { data, meta } = res.data;
          if (meta.status != 200) return this.$message.error(meta.msg);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          this.getGoodsList();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
