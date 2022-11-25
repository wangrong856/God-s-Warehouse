<template>
  <div class="one">
    <div v-for="(item,index) in obj" :key="index">
        {{item}}
        <el-row>
        <el-button @click="del(index)" type="danger">危险按钮</el-button>
</el-row>
    </div>
  </div>
</template>

<script>
export default {
 data(){
        return {
            obj: [
        {
          id: Date.now(),
          name: "1南极人秋冬韩版加厚一体长袖衬衫",
          price: "298",
          type: "warning",
          label: "预售",
          labe: "内衣",
        },
        {
          id: Date.now()+1,
          name: "2南极人秋冬韩版加厚一体长袖衬衫",
          price: "298",
          type: "warning",
          label: "预售",
          labe: "内衣",
        },
        {
          id: Date.now()+2,
          name: "3南极人秋冬韩版加厚一体长袖衬衫",
          price: "298",
          type: "warning",
          label: "预售",
          labe: "内衣",
        },
        {
          id: Date.now()+3,
          name: "4南极人秋冬韩版加厚一体长袖衬衫",
          price: "298",
          type: "warning",
          label: "预售",
          labe: "内衣",
        },
        {
          id: Date.now()+4,
          name: "5南极人秋冬韩版加厚一体长袖衬衫",
          price: "298",
          type: "warning",
          label: "预售",
          labe: "内衣",
        },
        {
          id: Date.now()+5,
          name: "6南极人秋冬韩版加厚一体长袖衬衫",
          price: "298",
          type: "warning",
          label: "预售",
          labe: "内衣",
        },
        {
          id: Date.now()+6,
          name: "7南极人秋冬韩版加厚一体长袖衬衫",
          price: "298",
          type: "warning",
          label: "预售",
          labe: "内衣",
        },
        {
          id: Date.now()+7,
          name: "8南极人秋冬韩版加厚一体长袖衬衫",
          price: "298",
          type: "warning",
          label: "预售",
          labe: "内衣",
        },
      ],
    }
},
methods:{
    del(index){
        this.obj.splice(index,1)
    }
}
}
</script>

<style>

</style>