<template>
  <div class="fengz">
    <ul>
        <li v-for="(item,index) in arr" :key="index" @click="del(index)">
            {{item}}
        </li>
        <button @click="add">添加</button>
    </ul>
  </div>
</template>

<script>
// mixins里的生命周期函数会和组件的生命周期函数一起
// 合并执行，mxins中的data函数在组件中可以使用，
// mixins中的methods函数在组件中可以调用，
// 生命周期函数合并后执行顺序，先执行mixins中的，在执行组件中的

// 引入混入对象
// import {mixins} from '../mixins/index'
export default {
    // 局部混入
    // mixins:[mixins],
    data(){
        return{
            msg:"mixins"
        }
    },
    created(){
        // this.add()
        console.log(this.msg);
        console.log(this.arr);
    }
}
</script>

<style>

</style>