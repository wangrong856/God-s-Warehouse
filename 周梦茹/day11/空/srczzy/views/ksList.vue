<template>
    <div class="ks">
<topp :list="list"  :user="user"></topp>
<list :list="list"></list>
       
    </div>
</template>

<script>
import topp from "../components/topp.vue"
import list from '../components/list.vue'
export default {
    components:{
        topp,
        list
    },
    data(){
        return {
            list:[
                {
                    name:"王亮",
                    price:"13.00元",
                }
            ],
        user:{
            name:"",
            price:"",
        }
        }
    },
  
}
</script>

<style>

</style>