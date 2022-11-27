<template>
    <div>
        <table border cellspacing="0">
            <tr>
                <th>商品序号</th>
                <th>商品名称</th>
                <th>商品价格</th>
                <th>删除商品</th>
            </tr>
            <tr v-for="item,index in arr" :key="item.id">
                <td>{{index+1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td><button>删除</button></td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name: 'listIndex',
    props:['arr'],
    data() {
        return {
           
            
        };
        
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>