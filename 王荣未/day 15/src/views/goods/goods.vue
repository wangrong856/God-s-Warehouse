<template>
  <div class="goods">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input
            placeholder="请输入内容"
            v-model="goodsPage.query"
            @clear="getGoodsFrom"
            clearable
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getGoodsFrom"
            ></el-button>
          </el-input> </el-col
        ><el-col :span="4"
          ><el-button type="primary" @click="goodsDilogVisibleAdd = true"
            >添加商品</el-button
          ></el-col
        >
      </el-row>
      <el-table :data="goodsFrom" border style="width: 100%">
        <el-table-column type="index" label="#"> </el-table-column>
        <el-table-column prop="goods_name" label="商品名称"> </el-table-column>
        <el-table-column prop="goods_price" label="商品价格(元)">
        </el-table-column>
        <el-table-column prop="goods_weight" label="商品重量">
        </el-table-column>
        <el-table-column label="创建时间">
          <template slot-scope="{ row }">
            {{ row.add_time | fomesay }}
            <!-- dateformat("YYYY-MM-DD HH:mm:ss")  -->
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="{ row }">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              @click="modifyAdd(row)"
            ></el-button>
            <el-button
              @click="del(row)"
              size="mini"
              type="danger"
              icon="el-icon-delete"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="goodsPage.pagenum"
        :page-sizes="[5, 7, 10, 13]"
        :page-size="goodsPage.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <el-dialog
      title="添加商品"
      :visible.sync="goodsDilogVisibleAdd"
      width="50%"
    >
      <el-form
        :model="goodsList"
        status-icon
        :rules="goodsRules"
        ref="goodsRuleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="商品名称" prop="goods_name">
          <el-input
            v-model="goodsList.goods_name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="goods_price">
          <el-input
            v-model="goodsList.goods_price"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品数量" prop="goods_number">
          <el-input
            v-model="goodsList.goods_number"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品重量" prop="goods_weight">
          <el-input
            v-model="goodsList.goods_weight"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品图片">
          <!-- <template > -->
          <el-upload
            class="upload-demo"
            :action="fils"
            :on-remove="handleRemove"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
          <!-- </template> -->
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="goodsDilogVisibleAdd = false">取 消</el-button>
        <el-button type="primary" @click="goodsDialongAdd()">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="修改商品"
      :visible.sync="modifyGoodsDilogVisibleAdd"
      width="50%"
    >
      <el-form
        :model="modifyGoodsList"
        status-icon
        :rules="modifyGoodsRules"
        ref="modifyGoodsRuleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="商品名称" prop="goods_name">
          <el-input
            v-model="modifyGoodsList.goods_name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="goods_price">
          <el-input
            v-model="modifyGoodsList.goods_price"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品数量" prop="goods_number">
          <el-input
            v-model="modifyGoodsList.goods_number"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品重量" prop="goods_weight">
          <el-input
            v-model="modifyGoodsList.goods_weight"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="modifyGoodsDilogVisibleAdd = false">取 消</el-button>
        <el-button type="primary" @click="modifyGoodsDialongAdd()"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "goodsIndex",

  data() {
    return {
      goodsPage: {
        query: "",
        pagenum: 1,
        pagesize: 5,
      },
      goodsFrom: [],
      total: 0,
      goodsDilogVisibleAdd: false,
      goodsList: {
        goods_name: "",
        goods_cat: "1,2,3",
        goods_price: "",
        goods_number: "",
        goods_weight: "",
        pics: "",
      },
      newDate: "",
      goodsRules: {
        goods_name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        goods_price: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        goods_number: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        goods_weight: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
      fils: "http://123.57.143.201:8888/api/private/v1/",
      modifyGoodsRules: {
        goods_name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        goods_price: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 1,
            max: 20,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        goods_number: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 1,
            max: 20,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        goods_weight: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 1,
            max: 20,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
      modifyGoodsDilogVisibleAdd: false,
      modifyGoodsList: {},
      handleRemove: {},
    };
  },

  mounted() {},

  created() {
    this.getGoodsFrom();
  },

  methods: {
    async getGoodsFrom() {
      let res = await this.$http.get("/goods", { params: this.goodsPage });
      let { data, meta } = res.data;
      if (meta.status != 200) return this.$message.error(meta.msg);
      this.goodsFrom = data.goods;
      this.total = data.total;
    },
    handleSizeChange(size) {
      this.goodsPage.pagesize = size;
      this.getGoodsFrom();
    },
    handleCurrentChange(num) {
      this.goodsPage.pagenum = num;
      this.getGoodsFrom();
    },
    goodsDialongAdd() {
      this.$refs.goodsRuleForm.validate(async (caclback) => {
        if (!caclback) return;
        let res = await this.$http.post("/goods", this.goodsList);
        let { meta } = res.data;
        if (meta.status != 201) return this.$message.error(meta.msg);
        this.$message.success(meta.msg);
        (this.goodsList = {
          goods_name: "",
          goods_cat: "1,2,3",
          goods_price: "",
          goods_number: "",
          goods_weight: "",
          pics: "",
        }),
          (this.goodsDilogVisibleAdd = false);
      });
    },
    del(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let res = await this.$http.delete(`/goods/${row.goods_id}`);
          let { meta } = res.data;
          if (meta.status != 200) return this.$message.error(meta.msg);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          this.getGoodsFrom();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    async modifyGoodsDialongAdd() {
      let res = await this.$http.put(
        `/goods/${this.modifyGoodsList.goods_id}`,
        this.modifyGoodsList
      );
      // console.log(res);
      let { meta } = res.data;
      if (meta.status != 200) return this.$message.error(meta.msg);
      this.$message.success(meta.msg);
      this.modifyGoodsDilogVisibleAdd = false;
      this.getGoodsFrom();
    },
    modifyAdd(row) {
      this.modifyGoodsList = { ...row };
      this.modifyGoodsDilogVisibleAdd = true;
    },
  },
  filters: {},
  watch: {
    goodsFrom: {
      handler(val) {},
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
