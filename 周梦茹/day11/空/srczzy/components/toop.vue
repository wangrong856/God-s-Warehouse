<template>
  <div class="toop">
    <slot>111</slot>
    商品名称：<input type="text" v-model="user.name">
        商品价格：<input type="text" v-model="user.price"><button @click="add">增加商品</button>
  </div>
</template>

<script>
export default {
    props:['user','list'],
    methods:{
        add(){
            if(this.user.name.length==""||this.user.price.length==0){
                return alert("内容不能为空")
            }
            var obj={
                id:Date.now(),
                ...this.user,
            }
            this.list.push(obj)
        },
    }
}
</script>

<style>

</style>