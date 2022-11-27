<template>
    <div>
        <my-table :list="list">
            <template #del="{ row }">
                <el-button size="mini" type="danger" @click="delList(row.id)">删除</el-button>
            </template>
            <template #addTag="{row}">
                <el-tag v-if="!row.isShow" effect="dark" @click="row.isShow=!row.isShow">+Tag</el-tag>
                <input v-else type="text" style="width:50px;" v-model="tagText" v-focus 
                @blur="addTag(row)" @keyup.enter="enterTag(row)" @keyup.esc="tagText=''">
            </template>
        </my-table>
    </div>
</template>

<script>
import myTable from './myTable.vue';
export default {
    name: 'my-goods-list',
    components: {
        myTable
    },
    data() {
        return {
            list: [
                { id: 1, name: 'Teenmix/天美意夏季专柜同款金色布女鞋6YF18BT6',isShow:false, price: 199, tag: ['舒适', '透气'] },
                { id: 2, name: '奥休斯(all shoes) 冬季保暖女士休闲雪地靴 舒适加绒防水短靴 防滑棉鞋了',isShow:false, price: 89, tag: ['舒适', '透气'] },
                { id: 3, name: '初语秋冬新款毛衣女 套头宽松针织衫简约插肩袖上衣', isShow:false,price: 199, tag: ['秋冬', '毛衣'] },
                { id: 4, name: '佐露丝蕾丝衫女2020春秋装新款大码女装衬衫上衣雪纺衫韩版打底衫长袖',isShow:false, price: 19, tag: ['雪纺衫', '打底'] },
                { id: 5, name: '韩都衣舍2021韩版女装秋装新宽松显瘦纯色系带长袖衬衫NG8201', isShow:false,price: 299, tag: ['舒适', '透气'] },
            ],
            tagText:''
        }
    },
    methods: {
        delList(id) {
            this.list=this.list.filter(item=>item.id!=id)
        },
        
        // 失去焦点添加tag
        addTag(row) {
            if(this.tagText=='') {
                row.isShow=!row.isShow
            }else {
                row.tag.push(this.tagText)
            }
            
            
          
        },
        enterTag(row) {
            if(this.tagText=='') {
                return alert('不能为空')
            }
            row.tag.push(this.tagText)
            this.tagText=''
            
            
        }
    },
    directives:{
        focus:{
            inserted(el) {
                // console.log(el);
                el.focus()
            }
        }
    }
}
</script>

<style>

</style>