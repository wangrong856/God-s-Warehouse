<template>
  <div class="users">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input
            placeholder="请输入内容"
            v-model="pageUser.query"
            @clear="getUserFrom"
            clearable
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getUserFrom"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="userDialogVisible = true"
            >添加角色</el-button
          >
        </el-col>
      </el-row>
      <el-table :data="userFrom" border style="width: 100%">
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="username" label="姓名"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="mobile" label="电话"> </el-table-column>
        <el-table-column prop="role_name" label="角色"></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="{ row }">
            <el-switch v-model="row.mg_state" @change="changeUser(row)">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="操作" width="180">
          <template slot-scope="{ row }">
            <el-button
              @click="myUserAdd(row)"
              size="mini"
              type="primary"
              icon="el-icon-edit"
            ></el-button>
            <el-button
              @click="stoat(row)"
              size="mini"
              type="warning"
              icon="el-icon-setting"
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
        :current-page="pageUser.pagenum"
        :page-sizes="[3, 5, 7, 10]"
        :page-size="pageUser.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <el-dialog title="添加内容" :visible.sync="userDialogVisible" width="30%">
      <el-form
        :model="userRuleForm"
        status-icon
        :rules="rulesUser"
        ref="userRuleFormToggle"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="userRuleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="userRuleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="userRuleForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="userRuleForm.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="userDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="userAdd">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="修改内容" :visible.sync="myUserDialogVisible" width="50%">
      <el-form
        :model="myUserRuleForm"
        status-icon
        :rules="myUulesUser"
        ref="myUserRuleFormToggle"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            disabled
            v-model="myUserRuleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input
            v-model="myUserRuleForm.email"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input
            v-model="myUserRuleForm.mobile"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="myUserDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="userAddMy">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="分配内容" :visible.sync="stoerDialogVisible" width="50%">
      <p>当前用户名：{{ sotearFrom.username }}</p>
      <p>当前角色：{{ sotearFrom.role_name }}</p>
      <el-select v-model="rid" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.id"
          :label="item.roleName"
          :value="item.id"
        >
        </el-option>
      </el-select>
      <span slot="footer" class="dialog-footer">
        <el-button @click="stoerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="soteUserAddMy">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "usersIndex",

  data() {
    return {
      pageUser: {
        query: "",
        pagesize: 3,
        pagenum: 1,
      },
      userFrom: [],
      total: 0,
      userDialogVisible: false,
      userRuleForm: {
        username: "",
        password: "",
        email: "",
        mobile: "",
      },
      rulesUser: {
        username: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        mobile: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
      myUserDialogVisible: false,
      myUserRuleForm: {},
      myUulesUser: {
        username: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        mobile: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
      stoerDialogVisible: false,
      sotearFrom: {},
      rid: "",
      options: [],
    };
  },

  mounted() {},

  created() {
    this.getUserFrom();
  },

  methods: {
    async getUserFrom() {
      let res = await this.$http.get("/users", { params: this.pageUser });
      let { data, meta } = res.data;
      if (meta.status != 200) return this.$message.error(meta.msg);
      this.userFrom = data.users;
      // console.log(data);
      this.total = data.total;
    },
    async changeUser(row) {
      let res = await this.$http.put(`users/${row.id}/state/${row.mg_state}`);
      let { data, meta } = res.data;
      if (meta.status != 200) return this.$message.error(meta.msg);
      this.$message.success(meta.msg);
      // console.log(res);
    },
    handleSizeChange(size) {
      this.pageUser.pagesize = size;
      this.getUserFrom();
    },
    handleCurrentChange(num) {
      this.pageUser.pagenum = num;
      this.getUserFrom();
    },
    userAdd() {
      this.$refs.userRuleFormToggle.validate(async (bool) => {
        if (!bool) return;
        let res = await this.$http.post("/users", this.userRuleForm);
        let { data, meta } = res.data;
        if (meta.status != 201) return this.$message.error(meta.msg);
        this.$message.success(meta.msg);
        this.userRuleForm = {
          username: "",
          password: "",
          email: "",
          mobile: "",
        };
        this.userDialogVisible = false;
      });
    },
    myUserAdd(row) {
      this.myUserRuleForm = { ...row };
      this.myUserDialogVisible = true;
    },
    userAddMy() {
      this.$refs.myUserRuleFormToggle.validate(async (bool) => {
        if (!bool) return;
        let res = await this.$http.put(
          `/users/${this.myUserRuleForm.id}`,
          this.myUserRuleForm
        );
        let { data, meta } = res.data;
        if (meta.status != 200) return this.$message.error(meta.msg);
        this.$message.success(meta.msg);
        // console.log(res);
        this.getUserFrom();
        this.myUserDialogVisible = false;
      });
    },
    del(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let res = await this.$http.delete(`/users/${row.id}`);
          // console.log(res);
          let { data, meta } = res.data;
          if (meta.status != 200) return this.$message.error(meta.msg);
          this.$message({
            type: "success",
            message: meta.msg,
          });
          this.getUserFrom();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    async stoat(row) {
      let res = await this.$http.get("/roles");
      let { data, meta } = res.data;
      // console.log(res);
      this.options = data;
      this.sotearFrom = { ...row };
      this.stoerDialogVisible = true;
      this.rid = "";
    },
    async soteUserAddMy() {
      if (!this.rid) return this.$message.error("请选择");
      let res = await this.$http.put(`users/${this.sotearFrom.id}/role`, {
        rid: this.rid,
      });
      let { data, meta } = res.data;
      if (meta.status != 200) return this.$message.error(meta.msg);
      this.$message.success(meta.msg);
      this.stoerDialogVisible = false;
      this.getUserFrom();
      this.rid = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
