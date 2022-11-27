<template>
  <div class="fz">
    <zi :visible.sync="num"></zi>
  </div>
</template>

<script>
import zi from '../components/zi.vue'
export default {
    components:{zi},
    data(){
        return{
            num:0
        }
    }
}
</script>

<style>

</style>