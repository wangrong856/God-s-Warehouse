<template>
    <div class="tabber">
        <div class="footer">
            <ul>
                <li @click="qh(item)" v-for="(item,index) in arr" :key="index">
                    <router-link :to="item.path">
                        <img :src="item.img[item.num]" alt="">
                        <p :class="item.num == 1 ? 'color' : ''">{{ item.name }}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Goods',

    data() {
        return {
            arr: [
                {
                    name: "商品列表",
                    img: ['/列表.png', '/列表2.png'],
                    num: 1,
                    path: '/goods_list'
                },
                {
                    name: "商品搜索",
                    img: ['/搜索.png', '/搜索2.png'],
                    num: 0,
                    path: '/goods_search'
                },
                {
                    name: "我的信息",
                    img: ['/我的.png', '/我的2.png'],
                    path: '/goods_my',
                    num: 0
                }
            ],
        };
    },

    mounted() {

    },

    methods: {
        // 点击切换高亮
        qh(item) {
            // 排他让所有取消样式
            this.arr.forEach(item => item.num = 0)
            // 只让当前有样式
            item.num = 1
        }
    },
};
</script>

<style lang="scss" scoped>
.tabber {
    width: 1000px;
    margin: auto;
    position: fixed;
    bottom: 0;
    border-top: 1.5px solid #ccc;
    height: 60px;
    background-color: #fff;
}

// .footer {


// }

.color {
    color: lightskyblue;
}

ul {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;

    li {

        text-align: center;
        flex: 1;

        img {
            width: 30px;
            height: 30px;
        }

        p {
            color: #000;
            margin: 0;
            font-size: 15px;
        }
    }
}
</style>