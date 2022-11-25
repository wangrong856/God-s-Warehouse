<template>
    <div>
<el-aside :width="iscoll?'64px':'200px'">
    <p @click="iscoll=!iscoll">|||</p>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse="iscoll">
      <el-submenu :index="item.id+''" v-for="item in list" :key="item.id">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.authName}}</span>
        </template>
       <el-menu-item :index="'/'+ite.path" v-for="ite in item.children" :key="ite.id">
        <i class="el-icon-location"></i>
          <span>{{ite.authName}}</span>
       </el-menu-item>
        
      </el-submenu>
     
    </el-menu>
</el-aside>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [],
                iscoll:false
            }
        },
        created(){
        this.getdata()
        },
        methods:{
            getdata(){
                this.$axios.get('menus').then(res=>{
                    console.log(res);
                    let{data}=res
                    this.list=data
                })
            }
        }
    }
</script>

<style scoped>
p{
    text-align: center;
    line-height: 30px;
}
</style>