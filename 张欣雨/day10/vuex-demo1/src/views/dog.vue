<template>
    <div>
        <div class="box">
            <dog-item v-for="(item, index) in doglist" :key="index" :item="item" @love="love.push($event)"></dog-item>
            <span>你喜欢的狗：<ul>
                <li  v-for="(item,index) in love" :key="index">{{item}}</li>
            </ul></span>
        </div>
    </div>
</template>

<script>
import dogItem from '@/components/dog-item.vue';

export default {
    name: 'Dog',
    components: {
        dogItem

    },
    data() {
        return {
            love: [],
            doglist: [
                {
                    dogImgUrl:
                        "http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129958.jpg",
                    dogName: "博美",
                },
                {
                    dogImgUrl:
                        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1224576619,1307855467&fm=26&gp=0.jpg",
                    dogName: "泰迪",
                },
                {
                    dogImgUrl:
                        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2967740259,1518632757&fm=26&gp=0.jpg",
                    dogName: "金毛",
                },
                {
                    dogImgUrl:
                        "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
                    dogName: "哈士奇",
                },
                {
                    dogImgUrl:
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563813435580&di=946902d419c3643e33a0c9113fc8d780&imgtype=0&src=http%3A%2F%2Fvpic.video.qq.com%2F3388556%2Fd0522aynh3x_ori_3.jpg",
                    dogName: "阿拉斯加",
                },
                {
                    dogImgUrl:
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563813454815&di=ecdd2ebf479568453d704dffacdfa12c&imgtype=0&src=http%3A%2F%2Fwww.officedoyen.com%2Fuploads%2Fallimg%2F150408%2F1-15040Q10J5B0.jpg",
                    dogName: "萨摩耶",
                },
            ]
        };
    },

    mounted() {

    },

    methods: {
        change(e) {
            console.log(e);
        }
    },
};
</script>

<style lang="scss" scoped>
.box {
    width: 700px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    span{
        position: absolute;
        right: -50px;
        top: 0;
    }
}
</style>