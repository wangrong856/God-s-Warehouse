<template>
  <div class="bb">
    <div class="bo" v-for="(it,ind) in results" :key="ind" :class="{'gray':it.status=='未完成','green':it.status=='成功','red':it.status=='失败'}">
          {{ind+1}}:{{it.status}}
        </div>
  </div>
</template>

<script>
export default {
    props:['results']
}
</script>

<style>
.bb{
  margin: auto;
  width: 400px;
}
 .gray{
      color: gainsboro;
    }
    .green{
      color: green;
    }
    .red{
      color: red;
    }
    .bb{
        display: flex;
    }
</style>