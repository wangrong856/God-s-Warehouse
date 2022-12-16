<template>
    <div class="register">
        <div class="regcon">
              <el-form ref="registerRef" label-width="80px" :model="registerForm" :rules="registerRules">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="registerForm.name"/>
                </el-form-item>
                 <el-form-item label="邮箱" prop="email">
                    <el-input v-model="registerForm.email"/>
                </el-form-item>
                 <el-form-item label="密码" prop="password">
                    <el-input v-model="registerForm.password"/>
                </el-form-item>
                 <el-form-item label="确认密码" prop="password2">
                    <el-input v-model="registerForm.password2"/>
                </el-form-item>
                 <el-form-item label="选择身份" >
                    <el-select v-model="registerForm.identity">
                        <el-option label="管理员" value="管理员"></el-option>
                        <el-option label="员工" value="员工"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button @click="registerFn" type="primary">提交</el-button>
                </el-form-item>
              </el-form>

        </div>
    </div>
</template>

<script>
/* 
表单验证 ：
先决条件    
 model  表单数据对象
 rules 规则
 prop   校验谁写谁的字段
使用的规则
 required 必填   true
 message 提示消息
 pattern  正则验证
 min  最小值
 max  最大值
 trigger  校验的触发方式  change  blur
 validator  自定义函数完成的校验
 validator是一个函数，有三个参数  rule当前规则 value 当前值  callback回调函数
 var fun=(rule,value,callback)=>{
    根据value进行校验  校验ok  直接执行回调函数
 }
格式：
{key:value=>{}}

name  必填  6-12位字符    失去焦点校验

问题:我们直接点击按钮，没有离开焦点，无法校验
*/
import {register} from '../api/users'
    export default {

        data() {
            // 确认密码的校验
            const checkPassword2=(rule,value,callback)=>{
                
                if(value!==this.registerForm.password){
                    callback(new Error('两次密码不一致'))
                }else{
                    callback()
                }
            }
            return {
                registerForm:{
                    "name": "",
                    "email": "",
                    "password": "",
                    "password2": "",
                    "identity": ""
                },
                registerRules:{
                    name:[
                        {required:true,message:"名称不能为空",trigger:'blur'},
                        {pattern:/^a[a-z]{5,11}$/,message:"名称格式不正确",trigger:'blur'}
                    ],
                    email:[
                        {required:true,message:"邮箱不能为空",trigger:'blur'},
                        {pattern:/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,message:"邮箱格式不正确",trigger:"blur"}
                    ],
                    password:[
                        {required:true,message:"密码不能为空",trigger:'blur'},
                        {min:6,max:16,message:"密码长度为6~16位",trigger:'blur'}
                    ],
                    password2:[
                        {required:true,message:"密码不能为空",trigger:'blur'},
                        {min:6,max:16,message:"密码长度为6~16位",trigger:'blur'},
                        {validator:checkPassword2,trigger:'blur'}
                    ]
                }
            }
        },
        methods: {
            registerFn() {
                // validate 是el-form的API,需要获取el-form实例，才可以调用
                this.$refs.registerRef.validate(async isOk=>{
                    if(isOk){
                    //   console.log('ok');
                      try{
                        // 可能出现错误的代码
                        // await的错误再控制台显示
                        await register(this.registerForm)
                
                        this.$router.push('/login')
                      }catch(err){
                        console.log(new Error(err))
                      }
                    }else{
                         console.log('error submit!!');
                         return false;
                    }
                })
            }
        },
    }
</script>

<style scoped>
.register{
    background-color: pink;
    height: 100%;
}
.regcon{
    width: 500px;
    height: 500px;
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
}
</style>