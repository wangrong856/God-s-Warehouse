<template>
  <div class="cache">
    <p>{{one}}</p>
    <p>{{one}}</p>
    <p>{{one}}</p>
    <p>{{two()}}</p>
    <p>{{two()}}</p>
    <p>{{two()}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            msg:"hello world"
        }
    },
    // 依赖性不变 多次调用都是从缓存中取值
    computed:{
        // 执行1次
        one(){
            console.log("触发了计算属性");
            this.msg.split('').reverse().join('')
        }
    },
    // 依赖性改变 函数会自动重新执行 并缓存新的值
    methods:{
        // 执行3次
        two(){
            console.log("触发了方法");
            this.msg.split('').reverse().join('')
        }
    }
}
</script>

<style>

</style>