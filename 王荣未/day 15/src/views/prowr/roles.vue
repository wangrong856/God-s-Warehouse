<template>
  <div class="roles">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-button type="primary" @click="rolesDialogVisible = true"
            >添加角色</el-button
          >
        </el-col>
      </el-row>
      <el-table :data="rolesFrom" border style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="{ row }">
            <el-row v-for="itema in row.children" :key="itema.id">
              <el-col :span="8">
                <el-tag @close="closeRoles(itema.id, row.id)" closable>{{
                  itema.authName
                }}</el-tag>
              </el-col>
              <el-col :span="16">
                <el-row v-for="itemb in itema.children" :key="itemb.id">
                  <el-col :span="6">
                    <el-tag @close="closeRoles(itemb.id, row.id)" closable>{{
                      itemb.authName
                    }}</el-tag>
                  </el-col>
                  <el-col :span="18">
                    <el-tag
                      @close="closeRoles(itemb.id, row.id)"
                      closable
                      v-for="itemc in itemb.children"
                      :key="itemc.id"
                      >{{ itemc.authName }}</el-tag
                    >
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column type="index" label="#"> </el-table-column>
        <el-table-column prop="roleName" label="角色名称"> </el-table-column>
        <el-table-column prop="roleDesc" label="角色描述"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="{ row }">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              @click="myFrom(row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="del(row)"
              >删除</el-button
            >
            <el-button
              size="mini"
              type="warning"
              icon="el-icon-setting"
              @click="getJurisdiction(row)"
              >分配权限</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog title="添加角色" :visible.sync="rolesDialogVisible" width="50%">
      <el-form
        :model="rolesRuleList"
        status-icon
        :rules="rolesRules"
        ref="rolesRulesFrom"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="角色名称" prop="roleName">
          <el-input
            v-model="rolesRuleList.roleName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input
            v-model="rolesRuleList.roleDesc"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="rolesDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="rolesAdd()">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="修改角色"
      :visible.sync="rolesDialogVisibleTo"
      width="50%"
    >
      <el-form
        :model="myRolesRuleList"
        status-icon
        :rules="rolesRuless"
        ref="rolesRulesFroms"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="角色名称" prop="roleName">
          <el-input
            v-model="myRolesRuleList.roleName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input
            v-model="myRolesRuleList.roleDesc"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="rolesDialogVisibleTo = false">取 消</el-button>
        <el-button type="primary" @click="myRolesAdd()">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="分配角色"
      :visible.sync="jurisdictionDialogVisibleTo"
      width="50%"
      @close="asdsadjaois()"
    >
      <el-tree
        :data="jurisdictionList"
        show-checkbox
        node-key="id"
        :props="defaultProps"
        default-expand-all
        ref="jurisdictionrul"
        :default-checked-keys="defKeys"
      >
      </el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="jurisdictionDialogVisibleTo = false"
          >取 消</el-button
        >
        <el-button type="primary" @click="jurisdictionAdd()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Deom03Roles",

  data() {
    return {
      rolesFrom: [],
      rolesDialogVisible: false,
      rolesRuleList: {
        roleName: "",
        roleDesc: "",
      },
      rolesRules: {
        roleName: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        roleDesc: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
      rolesDialogVisibleTo: false,
      myRolesRuleList: {},
      rolesRuless: {
        roleName: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        roleDesc: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
      jurisdictionFrom: {},
      jurisdictionDialogVisibleTo: false,
      jurisdictionList: [],
      defaultProps: {
        children: "children",
        label: "authName",
      },
      rid: "",
      defKeys: [],
    };
  },

  mounted() {},

  created() {
    this.getRloes();
  },

  methods: { 
    async getRloes() {
      let res = await this.$http.get("/roles");
      let { data, meta } = res.data;
      if (meta.status != 200) return this.$message.error(meta.msg);
      this.rolesFrom = data;
      //   console.log(data);
      // this.getLeafKeys()
    },
    getLeafKeys(node, arr) {
      if (!node.children) return arr.push(node.id);
      node.children.forEach((item) => this.getLeafKeys(item, arr));
    },
    rolesAdd() {
      this.$refs.rolesRulesFrom.validate(async (bool) => {
        if (!bool) return;
        let res = await this.$http.post("/roles", this.rolesRuleList);
        let { meta } = res.data;
        if (meta.status != 201) return this.$message.error(meta.msg);
        this.$message.success(meta.msg);
        (this.rolesRuleList = {
          roleName: "",
          roleDesc: "",
        }),
          (this.rolesDialogVisible = false);
      });
    },
    myFrom(row) {
      this.rolesDialogVisibleTo = true;
      this.myRolesRuleList = { ...row };
      //   console.log(row, this.myRolesRuleList);
    },
    myRolesAdd() {
      this.$refs.rolesRulesFroms.validate(async (bool) => {
        if (!bool) return;
        let res = await this.$http.put(
          `/roles/${this.myRolesRuleList.id}`,
          this.myRolesRuleList
        );
        console.log(res);
        let { meta } = res.data;
        if (meta.status != 200) return this.$message.error(meta.msg);
        this.$message.success(meta.msg);
        this.rolesDialogVisibleTo = false;
      });
    },
    del(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let res = await this.$http.delete(`/roles/${row.id}`);
          let { data, meta } = res.data;
          if (meta.status != 200) return this.$message.error(meta.msg);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          this.getRloes();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    async getJurisdiction(row) {
      // console.log(row);
      this.jurisdictionDialogVisibleTo = true;
      let res = await this.$http.get("/rights/tree");
      let { data, meta } = res.data;
      if (meta.status != 200) return this.$message.error(meta.msg);
      this.jurisdictionList = data;
      this.rid = row.id;
      this.getRloes();
      this.getLeafKeys(row, this.defKeys);
    },
    async jurisdictionAdd() {
      let keys = [
        this.$refs.jurisdictionrul.getCheckedKeys(),
        this.$refs.jurisdictionrul.getHalfCheckedNodes(),
      ].join(",");
      // console.log(keys);
      let res = await this.$http.post(`roles/${this.rid}/rights`, {
        rids: keys,
      });

      let { meta } = res.data;
      if (meta.status != 200) return this.$message.error(meta.msg);
      this.$message.success(meta.msg);
      this.jurisdictionDialogVisibleTo = false;
      this.getRloes();
    },
    closeRoles(id, rowId) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let res = await this.$http.delete(`roles/${rowId}/rights/${id}`);
          let { meta } = res.data;
          if (meta.status != 200) return this.$message.error(meta.msg);
          console.log(res);
          this.getRloes();
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    asdsadjaois() {
      this.defKeys = [];
    },
  },
};
</script>

<style lang="scss" scoped></style>
