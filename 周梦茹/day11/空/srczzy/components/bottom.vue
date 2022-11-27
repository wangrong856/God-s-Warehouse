<template>
  <div class="bottom">
    <div class="box">
    <div class="NoStatus" v-for="(ite,ind) in match" :key="ind" :class="{'gray':ite.status=='未完成','green':ite.status=='正确','red':ite.status=='失败'}">
      {{ ind + 1 }}:{{ ite.status }}
    </div>
   </div>
  </div>
</template>

<script>
export default {
    props:['match']
}
</script>

<style scoped >
.gray{
    color: gainsboro;
}
.green{
    color: green;
}
.red{
    color: red;
}
</style>