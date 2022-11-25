<template>
  <div class="qx">
    <span>全选：<input v-model="qx" type="checkbox">
        <button @click="fx">反选</button>
    </span>
    <ul>
        <li v-for="(item,index) in shuzu" :key="index">
            <input v-model="item.checked" type="checkbox">
            <span>{{item.name}}</span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            shuzu:[
                {
                    name:"猪八戒",
                    checked:false
                },
                {
                    name:"孙悟空",
                    checked:false
                },
                {
                    name:"唐僧",
                    checked:false
                },
                {
                    name:"白龙马",
                    checked:false
                },
            ]
        }
    },
    computed:{
        // 小选影响全选
        // qx(){
        //     return this.shuzu.every(item=>item.checked==true)
        // }
        // 全选影响小选
        qx:{
            set(val){
                return this.shuzu.forEach(item=>item.checked=val)
            },
            get(){
                return this.shuzu.every(item=>item.checked==true)
            }
        }
    },
    methods:{
        // 反选
        fx(){
            return this.shuzu.forEach(item=>item.checked=!item.checked)
        }
    }
}
</script>

<style>

</style>