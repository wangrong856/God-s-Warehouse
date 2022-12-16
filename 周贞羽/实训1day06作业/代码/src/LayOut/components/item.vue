<template>
    <div v-if="!item.hidden">
        <el-menu-item :index="item.path" >
        <template >
          <i :class="['iconfont',item.meta.icon]"></i>
          <span slot="title">{{item.meta.title}}</span>
        </template>
      </el-menu-item>
      </div>
</template>

<script>
    export default {
        props:{
            item:{
               type:Object
            }
        }
    }
</script>

<style scoped>
.el-menu-item i{
    color: #fff;
    margin-right: 5px;
}
</style>