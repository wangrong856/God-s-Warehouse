<template>
  <div class="roleuser">
        <el-dialog title="角色分配" :visible="showlog">
            <el-checkbox-group v-model="roleIds">
                <el-checkbox v-for="item in rows" :key="item.id" :label="item.id">
                    {{ item.name }}
                </el-checkbox>
            </el-checkbox-group>
            <el-row slot="footer" type="flex" justify="center">
                <el-col :span="6">
                    <el-button type="primary" @click="qkClick">确定</el-button>
                    <el-button @click="$emit('showlog')">取消</el-button>
                </el-col>
            </el-row>
        </el-dialog>
  </div>
</template>

<script>
import {getallRole,getuserRole,getuserRoleALL} from '@/api/getroleall'
export default {
    props:{
        showlog:{
            type:Boolean,
            default:false,
        },
        userid:{
            type:String,
            default:null,
        }
    },
    data(){
        return {
            rows:[],
            roleIds:[]
        }
    },
    created(){
        this.getuser()

    },
    methods:{
        // 确定按钮
        async qkClick(){
            await getuserRoleALL({id:this.userid,roleIds:this.roleIds})
            this.$emit('update:showlog',false)
        },

        async getuser(){
            let {rows}=await getallRole()
            this.rows=rows;
            console.log(this.rows);
        },
        async getroles(id){
            // console.log(id);
            let {roleIds}=await getuserRole(id)
            this.roleIds=roleIds;
            console.log(this.roleIds);
        }
    }
}
</script>

<style>

</style>