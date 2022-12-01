<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>参数列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card>
      <!-- 警告框 -->
      <el-alert
        show-icon
        title="注意：只允许为第三级分类设置相关参数！"
        type="warning"
      >
      </el-alert>
      <!-- 级联选择器 -->
      <el-row class="cat_opt">
        <el-col>
          <span>选择商品分类: </span>
          <el-cascader
            v-model="seleteKeys"
            :options="cateList"
            :props="cascaderProps"
            @change="handleChange"
            clearable
          ></el-cascader>
        </el-col>
      </el-row>
      <!-- tabs标签页 -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <!-- 动态参数面板 -->
        <el-tab-pane label="动态参数" name="many">
          <!-- 添加参数按钮 -->
          <el-button
            type="primary"
            :disabled="isBtnDisabled"
            @click="addParamsDialogVisible = true"
            >添加参数</el-button
          >
          <!-- 参数表格 -->
          <el-table :data="manyTableData" border>
            <!-- 展开列 -->
            <el-table-column type="expand">
              <template slot-scope="scope">
                <el-tag
                  closable
                  v-for="(item, index) in scope.row.attr_vals"
                  :key="index"
                  @close="handleClose(index, scope.row)"
                  >{{ item }}</el-tag
                >
                <!-- 输入框 -->
                <el-input
                  class="input-new-tag"
                  v-if="scope.row.inputVisible"
                  v-model="scope.row.inputValue"
                  ref="saveTageInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm(scope.row)"
                  @blur="handleInputConfirm(scope.row)"
                >
                </el-input>
                <!-- 按钮 -->
                <el-button
                  v-else
                  class="button-new-tag"
                  size="small"
                  @click="showInput(scope.row)"
                  >+ New Tag</el-button
                >
              </template>
            </el-table-column>
            <!-- 索引列 -->
            <el-table-column type="index" label="#"> </el-table-column>
            <!-- 参数名称列 -->
            <el-table-column prop="attr_name" label="参数名称">
            </el-table-column>
            <!-- 操作列 -->
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  size="mini"
                  @click="showEditDialog(scope.row.attr_id)"
                  >编辑</el-button
                >
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  size="mini"
                  @click="removeParams(scope.row.attr_id)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <!-- 静态参数面板 -->
        <el-tab-pane label="静态属性" name="only">
          <!-- 添加静态属性按钮 -->
          <el-button
            type="primary"
            :disabled="isBtnDisabled"
            @click="addParamsDialogVisible = true"
            >添加属性</el-button
          >
          <!-- 静态属性面板 -->
          <el-table :data="onlyTableData" border>
            <el-table-column type="expand">
              <template slot-scope="scope">
                <el-tag
                  closable
                  v-for="(item, index) in scope.row.attr_vals"
                  :key="index"
                  @close="handleClose(index, scope.row)"
                  >{{ item }}</el-tag
                >
                <!-- 输入框 -->
                <el-input
                  class="input-new-tag"
                  v-if="scope.row.inputVisible"
                  v-model="scope.row.inputValue"
                  ref="saveTageInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm(scope.row)"
                  @blur="handleInputConfirm(scope.row)"
                >
                </el-input>
                <!-- 按钮 -->
                <el-button
                  v-else
                  class="button-new-tag"
                  size="small"
                  @click="showInput(scope.row)"
                  >+ New Tag</el-button
                >
              </template>
            </el-table-column>
            <el-table-column type="index" label="#"> </el-table-column>
            <el-table-column prop="attr_name" label="参数名称">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  size="mini"
                  @click="showEditDialog(scope.row.attr_id)"
                  >编辑</el-button
                >
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  size="mini"
                  @click="removeParams(scope.row.attr_id)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <!-- 添加分类参数对话框 -->
    <el-dialog
      :title="'添加' + titleText"
      :visible.sync="addParamsDialogVisible"
      @close="addParamsDialogClosed"
    >
      <el-form
        :model="addParamsForm"
        :rules="addParamsRules"
        ref="addParamsFormRef"
      >
        <el-form-item :label="titleText" prop="attr_name">
          <el-input v-model="addParamsForm.attr_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addParamsDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addParams">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 编辑参数对话框 -->
    <el-dialog
      :title="'编辑' + titleText"
      :visible.sync="editParamsDialogVisible"
      @close="editParamsDialogClosed"
    >
      <el-form
        :model="editParamsForm"
        :rules="editParamsRules"
        ref="editParamsFormRef"
      >
        <el-form-item :label="titleText" prop="attr_name">
          <el-input v-model="editParamsForm.attr_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editParamsDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editParams">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "paramsIndex",

  data() {
    return {
      // 商品分类列表 级联选择器数据源
      cateList: [],
      // 级联选择器选中的商品分类id
      seleteKeys: [],
      // 级联选择器配置对象
      cascaderProps: {
        value: "cat_id",
        label: "cat_name",
        children: "children",
        expandTrigger: "hover",
      },
      // 被激活的页签名字
      activeName: "many",
      // 参数列表数据
      tableData: [],
      // 动态参数数据表格
      manyTableData: [],
      // 静态参数数据表格
      onlyTableData: [],
      // 控制添加对话框的显示与隐藏
      addParamsDialogVisible: false,
      // 添加参数表单数据对象
      addParamsForm: {},
      // 添加参数验证规则
      addParamsRules: {
        attr_name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
        ],
      },
      // 控制编辑分类参数对话框的显示与隐藏
      editParamsDialogVisible: false,
      // 修改分类参数验证规则
      editParamsRules: {
        attr_name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
        ],
      },
      // 编辑参数表单数据对象
      editParamsForm: {},
    };
  },
  created() {
    this.getCateList();
  },
  methods: {
    // 获取商品分类列表
    async getCateList() {
      const { data: res } = await this.$http.get("categories");
      // console.log(res)
      this.cateList = res.data;
    },
    // 选中的分类改变 触发该函数
    handleChange() {
      // console.log(this.seleteKeys)
      this.getParamsData();
    },
    // 监听页签改变事件
    handleClick() {
      this.getParamsData();
    },
    // 获取商品分类参数
    async getParamsData() {
      if (this.seleteKeys.length !== 3) {
        this.seleteKeys = [];
        return;
      }
      // console.log(this.seleteKeys)
      const { data: res } = await this.$http.get(
        `categories/${this.cateId}/attributes`,
        { params: { sel: this.activeName } }
      );
      // console.log(res)
      if (res.meta.status !== 200) {
        return this.$message.error("获取参数列表失败");
      }
      res.data.forEach((item) => {
        item.attr_vals = item.attr_vals ? item.attr_vals.split(" ") : [];
        // 控制输入框标签的显示与隐藏
        item.inputVisible = false;
        // 输入框写入的内容
        item.inputValue = "";
        // console.log(item)
      });
      // console.log(res.data)

      // 根据页签激活名字 判断动静态参数 把获取到的参数数据挂载到对应的表格
      if (this.activeName === "many") {
        this.manyTableData = res.data;
      } else {
        this.onlyTableData = res.data;
      }
      // console.log(this.manyTableData)
    },
    // 点击添加按钮 添加分类参数
    addParams() {
      // 先进行预验证
      this.$refs.addParamsFormRef.validate(async (valid) => {
        // console.log(this.cateId)

        // console.log(valid)
        if (!valid) return;
        const { data: res } = await this.$http.post(
          `categories/${this.cateId}/attributes`,
          {
            attr_name: this.addParamsForm.attr_name,
            attr_sel: this.activeName,
          }
        );
        // console.log(res)
        if (res.meta.status !== 201) {
          return this.$message.error("添加参数失败");
        }
        this.$message.success("添加参数成功");
        this.getParamsData();
        this.addParamsDialogVisible = false;
      });
    },
    // 监听对话框关闭事件 重置表单
    addParamsDialogClosed() {
      this.$refs.addParamsFormRef.resetFields();
    },
    // 点击编辑按钮 展示编辑对话框
    async showEditDialog(id) {
      // 根据id查询 需要修改的参数
      const { data: res } = await this.$http.get(
        `categories/${this.cateId}/attributes/${id}`
      );
      // console.log(res)
      if (res.meta.status !== 200) {
        return this.$message.error("获取参数失败");
      }
      this.editParamsForm = res.data;

      this.editParamsDialogVisible = true;
    },
    // 对话框关闭重置表单
    editParamsDialogClosed() {
      this.$refs.editParamsFormRef.resetFields();
    },
    // 修改参数提交
    editParams() {
      // 先进行预验证
      this.$refs.editParamsFormRef.validate(async (valid) => {
        // console.log(valid)
        if (!valid) return;
        const { data: res } = await this.$http.put(
          `categories/${this.cateId}/attributes/${this.editParamsForm.attr_id}`,
          {
            attr_name: this.editParamsForm.attr_name,
            attr_sel: this.activeName,
          }
        );
        // console.log(res)

        if (res.meta.status !== 200) {
          return this.$message.error("修改参数失败");
        }
        this.$message.success("修改参数成功");
        this.getParamsData();
        this.editParamsDialogVisible = false;
      });
    },
    // 点击按钮 删除参数
    async removeParams(id) {
      const confirmResult = await this.$confirm(
        "此操作将永久删除该文件, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
      // console.log(confirmResult)
      if (confirmResult !== "confirm") {
        return this.$message.info("已取消删除");
      }
      const { data: res } = await this.$http.delete(
        `categories/${this.cateId}/attributes/${id}`
      );
      if (res.meta.status !== 200) {
        return this.$message.error("删除参数失败");
      }
      this.$message.success("删除参数成功");
      this.getParamsData();
    },
    // 标签输入框失去焦点 敲击键盘触发该事件
    handleInputConfirm(row) {
      if (row.inputValue.trim().length === 0) {
        row.inputValue = "";
        row.inputVisible = false;
        return;
      }
      row.attr_vals.push(row.inputValue.trim());
      row.inputValue = "";
      row.inputVisible = false;
      this.saveAttrVals(row);
      // console.log(11)
    },
    // 保存修改参数项的操作
    async saveAttrVals(row) {
      const { data: res } = await this.$http.put(
        `categories/${this.cateId}/attributes/${row.attr_id}`,
        {
          attr_name: row.attr_name,
          attr_sel: this.activeName,
          attr_vals: row.attr_vals.join(" "),
        }
      );
      // console.log(res)
      if (res.meta.status !== 200) {
        return this.$message.error("修改参数项失败");
      }
      this.$message.success("修改参数项成功");
    },
    // 点击按钮 显示文本输入框
    showInput(row) {
      row.inputVisible = true;
      // 让文本框自动获得焦点
      // $nextTick 方法的作用 就是当页面上元素被重新渲染之后 才会指定回调函数中的代码
      this.$nextTick((_) => {
        this.$refs.saveTageInput.$refs.input.focus();
      });
    },
    // 删除参数项
    handleClose(index, row) {
      row.attr_vals.splice(index, 1);
      this.saveAttrVals(row);
    },
  },
  computed: {
    // 按钮是否禁用 如果选择参数不为三级分类 则按钮禁用 反之启用
    isBtnDisabled() {
      if (this.seleteKeys.length !== 3) {
        return true;
      }
      return false;
    },
    // 获取分类id
    cateId() {
      if (this.seleteKeys.length === 3) {
        return this.seleteKeys[this.seleteKeys.length - 1];
      }
      return null;
    },
    // 标题
    titleText() {
      if (this.activeName === "many") {
        return "动态参数";
      } else {
        return "静态属性";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-card {
  margin-top: 15px;
}
.cat_opt {
  margin-top: 15px;
}
.el-tabs {
  margin-top: 15px;
}
.el-table {
  margin-top: 15px;
}
.el-tag {
  margin: 15px;
}
.input-new-tag {
  width: 120px;
}
</style>
>
