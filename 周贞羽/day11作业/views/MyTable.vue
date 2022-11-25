<template>
    <div class="mytable">
        <MyGoodsList :obj="obj" >
          <template #zi="{row,}">
            <!-- {{row}} -->
            <el-button size="mini" @click="del(row.id)" type="danger">删除</el-button>
          </template>
          <template #tagyu="{one}">
            <el-tag v-if="!one.isshow" @click="one.isshow=true">tag+</el-tag>
            <input v-model="one.TagText" class="inp" type="text" v-focus  @blur="addtag(one)" @keyup.enter="enters(one)"  v-else @keyup.esc="TagText=''" />
          </template> 
        </MyGoodsList>
    </div>
</template>

<script>
import MyGoodsList from '../components/MyGoodsList.vue'
export default {

    components:{
        MyGoodsList
    },
  data() {
    return {
      obj: [
        {
          id: Date.now(),
          name: "1南极人秋冬韩版加厚一体长袖衬衫",
          price: "298",
          type:'',
          TagText:"",
          labal:[
            "预售","内衣",
          ],
          isshow:false,
        },
        {
          id: Date.now()+1,
          name: "2南极人秋冬韩版加厚一体长袖衬衫",
          price: "298",
          type: '',
          TagText:"",
          labal:[
            "预售","内衣",
          ],
          isshow:false,
        },
        {
          id: Date.now()+2,
          name: "3南极人秋冬韩版加厚一体长袖衬衫",
          price: "298",
          type: '',
          TagText:"",
          labal:[
            "预售","内衣",
          ],
          isshow:false,
        },
        {
          id: Date.now()+3,
          name: "4南极人秋冬韩版加厚一体长袖衬衫",
          price: "298",
          type: '',
          TagText:"",
          labal:[
            "预售","内衣",
          ],
          isshow:false,
        },
        {
          id: Date.now()+4,
          name: "5南极人秋冬韩版加厚一体长袖衬衫",
          price: "298",
          type: '',
          TagText:"",
          labal:[
            "预售","内衣",
          ],
          isshow:false,
        },
        {
          id: Date.now()+5,
          name: "6南极人秋冬韩版加厚一体长袖衬衫",
          price: "298",
          type: '',
          TagText:"",
          labal:[
            "预售","内衣",
          ],
          isshow:false,
        },
        {
          id: Date.now()+6,
          name: "7南极人秋冬韩版加厚一体长袖衬衫",
          price: "298",
          type: '',
          TagText:"",
          labal:[
            "预售","内衣",
          ],
          isshow:false,
        },
        {
          id: Date.now()+7,
          name: "8南极人秋冬韩版加厚一体长袖衬衫",
          price: "298",
          type: '',
          TagText:"",
          labal:[
            "预售","内衣",
          ],
          isshow:false,
        },
      ],
      //     items: [
      //   { type: '', label: '标签一' },
      //   { type: 'success', label: '标签二' },
      //   { type: 'info', label: '标签三' },
      //   { type: 'danger', label: '标签四' },
      //   { type: 'warning', label: '标签五' }
      // ]


    };
  },
  methods:{
    del(id){
      console.log(id);
      this.obj=this.obj.filter(item=>item.id!=id)
      // console.log(this.obj);
    },
    addtag(one){
      if(one.TagText==""){
        one.isshow=!one.isshow;
      }else{
        one.labal.push(one.TagText)
      }
    },
    enters(one){
      // 去掉首尾多余的空格
      if(one.TagText.trim().length==""){
        return alert("不能为空")
      }
      one.labal.push(one.TagText)
      one.TagText=""
    }
    
    
  },
  directives:{
    focus:{
      inserted:function(el){
        el.focus()
      }
    }
  }
};
</script>

<style scoped >
  .inp{
    margin-left: 40px;
  }
</style>  