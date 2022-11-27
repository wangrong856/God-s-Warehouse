<template>
  <div class="match">
    <h1>测试题</h1>
    <div v-for="(item,index) in arr" :key="index">
        <span>{{item.num1}}</span>
        <span>+</span>
        <span>{{item.num2}}</span>
        <span>=</span> 
        <input type="text" v-model="item.result">
        <button @click="submit(index)">提交</button>
    </div>
    <div class="submity" v-for="(item,index) in arr" :key="index"
    :class="{'gray':item.status=='未完成','green':item.status=='正确','red':item.status=='错误'}"
    >
        {{index+1}}:{{item.status}}
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            arr:[
                {
                    num1:Math.floor(Math.random()*10),
                    num2:Math.floor(Math.random()*10),
                    isall:false,//是否提交
                    result:"",//结果
                    status:'未完成'//状态
                },
                {
                    num1:Math.floor(Math.random()*10),
                    num2:Math.floor(Math.random()*10),
                    isall:false,//是否提交
                    result:"",//结果
                    status:'未完成'//状态
                },
                {
                    num1:Math.floor(Math.random()*10),
                    num2:Math.floor(Math.random()*10),
                    isall:false,//是否提交
                    result:"",//结果
                    status:'未完成'//状态
                },
                {
                    num1:Math.floor(Math.random()*10),
                    num2:Math.floor(Math.random()*10),
                    isall:false,//是否提交
                    result:"",//结果
                    status:'未完成'//状态
                },
                {
                    num1:Math.floor(Math.random()*10),
                    num2:Math.floor(Math.random()*10),
                    isall:false,//是否提交
                    result:"",//结果
                    status:'未完成'//状态
                },
            ]
        }
    },
    methods:{
        submit(index){
            var follow=this.arr[index].num1+this.arr[index].num2==this.arr[index].result;
            console.log(follow);
            if(follow){
                 this.arr[index].status="正确"
            }else{
                this.arr[index].status='错误'
            }
            this.arr[index].isall=true
        }
    }
}
</script>

<style scoped>
    .match{
        width: 400px;
        height: 300px;
        margin: auto;
    }
    input{
        width: 35px;
        margin-right: 5px;
        margin-left: 5px;
    }
    .submity{
        float: left;
    }
    .gray{
        color: gray;
    }
    .green{
        color: green;
    }
    .red{
        color: red;
    }
</style>