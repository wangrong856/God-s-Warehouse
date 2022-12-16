<template>
    <div v-if="!item.hidden">
        <el-menu-item :index="item.path" >
        <template >
          <i class="el-icon-menu"></i>
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

<style lang="scss" scoped>

</style>