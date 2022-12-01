<template>

    <div>
        <table border="1" cellspacing="0">
            <thead>
                <th><input type="checkbox" v-model="checkall">全选</th>
                <th>名称</th>
                <th>价格</th>
                <th>数量</th>
                <th>总价</th>
                <th>操作</th>
            </thead>
            <goods-item v-for="(item, index) in goodslist" :key="index" :item="item" :index="index" @del="del">
            </goods-item>
            <tfoot>
                <tr>
                    <td>合计：</td>
                    <td colspan="5">{{ sum }}</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
import goodsItem from "@/components/goods-item.vue"

export default {
    components: {
        goodsItem
    },
    data() {
        return {
            goodslist: [
                {
                    checked: false,
                    goods_name: "诸葛亮",
                    goods_price: 1000,
                    goods_num: 1,
                },
                {
                    checked: false,
                    goods_name: "蔡文姬",
                    goods_price: 1000,
                    goods_num: 1,
                },
                {
                    checked: false,
                    goods_name: "妲己",
                    goods_price: 2000,
                    goods_num: 1,
                },
                {
                    checked: false,
                    goods_name: "鲁班",
                    goods_price: 2200,
                    goods_num: 1,
                },
            ]
        }
    },
    computed: {
        // 全选全不选
        checkall: {
            get() {
                return this.goodslist.every(item => item.checked)
            },
            set(v) {
                this.goodslist.forEach(item => item.checked = v)
            }
        },
        // 合计
        sum() {
            var arr = this.goodslist.filter(item => item.checked)
            return arr.reduce((sum, item) => sum += item.goods_num * item.goods_price, 0)
        }
    },
    methods: {
        // 删除
        del(e) {
            this.goodslist.splice(e, 1)
        }
    }
}
</script>

<style scoped>

</style>