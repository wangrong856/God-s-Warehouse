<template>
  <div class="sideall">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#fff"
      text-color="#aaa"
      router
    >
      <template v-for="item in menusubmit">
        <el-menu-item v-if="!item.children" :index="item.path" :key="item.path">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.Pathname }}</span>
        </el-menu-item>
        <el-submenu v-else :index="item.path+''" :key="item.path+'1'">
          <template slot="title"> 
            <i class="el-icon-location"></i>
            <span>{{ item.Pathname }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="it.path" v-for="it,inde in item.children" :key="inde">
              <i class="el-icon-menu"></i>
              <span slot="title">{{ it.Pathname }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
    data(){
        return {
            menusubmit:[
                {
                    Pathname:"数据分析",
                    path:"/analysis",
                },
                {
                    Pathname:"用户列表",
                    path:"/manage",
                },
                {
                    Pathname:"订单管理",
                    path:"/menu",
                },
                {
                    Pathname:"菜品管理",
                    path:"/order",
                    children:[
                      {
                        Pathname:"添加菜单",
                        path:'/ofdishes',
                      }
                    ]
                },
                {
                    Pathname:"员工管理",
                    path:"/user",
                    children:[
                      {
                        Pathname:"员工详情",
                        path:"/role",
                      }
                    ]
                },
            ]
        }
    }
};
</script>

<style scoped>
    .sideall{
        padding-top: 60px;
        box-sizing: border-box;
    }
</style>