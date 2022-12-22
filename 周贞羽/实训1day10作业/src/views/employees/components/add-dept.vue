<template>
  <div class="adddepts">
    <el-dialog title="新增/编辑" :visible.sync="showDialog">
        <el-form :model="formdata" :rules="formdateRules">
            <el-form-item label="部门名称" prop="name">
                <el-input placeholder="1~50个字符" v-model="formdata.name"></el-input>
            </el-form-item>
            <el-form-item label="部门编码" prop="code">
                <el-input placeholder="1~50个字符" v-model="formdata.code"></el-input>
            </el-form-item>
            <el-form-item label="部门负责人" prop="manager">
                <el-select placeholder="请选择" v-model="formdata.manager" @focus="getsimpleout">
                    <el-option v-for="item in peoples" :key="item.id" :value="item.username">
                        {{ item.username }}
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="部门介绍" prop="introduce">
                <el-input placeholder="1~300个字符" v-model="formdata.introduce"></el-input>
            </el-form-item>
        </el-form>
        <!-- row是行 col是列 --> 
        <el-row slot="footer" type="flex" justify="center">
            <el-col :span="6">
                <el-button type="primary" size="small">确定</el-button>
                <el-button size="small">取消</el-button>
            </el-col> 
        </el-row>
    </el-dialog>
  </div>
</template>

<script>
import {getSimple} from '@/api/employee'
import {getDepartments} from '@/api/departments'
export default {
    props:{
        showDialog:{
            type:Boolean,
            default:false,
        },
        node:{
            type:Object,
            default:null,
        }
    },
    data(){
        // 校验同级部门下不能重复
        const checknamerequest=async (rule,value,callback)=>{
            const {depts}=await getDepartments()
            if(this.formdata.id){
                isrepeat=depts.filter(item=>item.id!==this.formdata.id&&item.pid===this.node.id)
                .some(item=>item.name===value)
            }else{
                isrepeat=depts.filter(item=>(item.pid===this.node.id))
                .some(item=>item.name===value)
            }
            
        }
        return {
            formdata:{
                code:"",//部门编码
                name:"",//部门名称
                manager:"",//负责人名称
                introduce:"",//介绍
            },
            // 校验 自定义校验
            formdateRules:{

            },
            // 负责人
            peoples:{
                name:[
                    {required:true,message:"部门名称不能为空",trigger:"blur"},
                    {min:1,max:50,message:"部门名称要求1~50位",trigger:"blur"}
                ],
                code:[
                    {required:true,message:"部门编码不能为空",trigger:"blur"},
                    {min:1,max:50,message:"部门编码要求1~50位",trigger:"blur"}
                ],
                manager:[
                    {required:true,message:"部门负责人不能为空",trigger:"blur"},
                ],
                introduce:[
                    {required:true,message:"部门介绍不能为空",trigger:"blur"},
                    {min:1,max:300,message:"部门介绍要求1~50位",trigger:"blur"}
                ],
            }
        }
    },
    methods:{
        async getsimpleout(){
         this.peoples= await getSimple()
        }
    }
}
</script>

<style>

</style>