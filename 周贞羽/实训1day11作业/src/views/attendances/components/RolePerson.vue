<template>
  <div class="roleperson">
        <el-dialog title="角色分配" :visible.sync="showlosg">
            <el-checkbox-group v-model="roleIds">
                <el-checkbox v-for="item in rows" :key="item.id" :label="item.id">
                    {{ item.name }}
                </el-checkbox>
            </el-checkbox-group>
            <el-row slot="footer" type="flex" justify="center">
                <el-col :span="6">
                    <el-button type="primary" @click="userClick">确定</el-button>
                    <el-button>取消</el-button>
                </el-col>
            </el-row>
        </el-dialog>
  </div>
</template>
<script>
import {getallRole,getuserRole,getuserRoleALL} from '@/api/getroleall'
export default {
    props:{
        showlosg:{
            type:Boolean,
            default:false,
        },
        roleId:{
            type:String,
            default:null,
        }
    },
    data(){
        return {
            rows:[],//所有数据
            roleIds:[],
        }
    },
    created(){
        // 页面一打开就触发这个事件
        this.getroleuser()
    },
    methods:{
        // 点击确定按钮
        async userClick(){
            // 调用给用户分配角色的接口 传递id和数据
            await getuserRoleALL({id:this.roleId,roleIds:this.roleIds})
            // 通知父组件 隐藏模态框
            this.$emit('update:showlosg',false)
        },


        // 获取所有角色列表数据
        async getroleuser(){
            // 调用接口 解构数据
          let {rows} = await getallRole()
        //   赋值给新数组
            this.rows=rows
            console.log(this.rows);
        },
        // 获取当前用户的角色
        async getuser(id){
            // 解构数据
          let {roleIds} = await getuserRole(id)
        //   保留数据
          this.roleIds=roleIds;
        }
    }
}
</script>

<style>

</style>