<template>
    <div>
       <my-child :arr="arr">
        <template v-slot="{row}">
            <img :src="row.img" width="100">
        </template>
        <template  #setting="{$index}">
            {{$index}}
            <button>删除</button>
            <button>编辑</button>
        </template>
       </my-child>
    </div>
</template>

<script>
import myChild from '@/components/myChild.vue'
export default {
    name: 'ChildIndex',
    components:{
        myChild
    },
    data() {
        return {
            arr:[
                {
                    name:"库洛米",
                    age:3,
                    img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.dtstatic.com%2Fuploads%2Fblog%2F202107%2F25%2F20210725093053_10f09.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.dtstatic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671852122&t=7f3f820604ea050211a3fe8ec551238b"
                },
                {
                    name:"凯蒂猫",
                    age:3,
                    img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fci.xiaohongshu.com%2Ffff91454-1b61-477d-6271-409d1690b641%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fci.xiaohongshu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671852462&t=e0ce0dd74a2106c8a1254e886449fa2d"
                },
                {
                    name:"玉桂狗",
                    age:3,
                    img:"https://img0.baidu.com/it/u=1132524228,1436263597&fm=253&fmt=auto&app=138&f=JPEG?w=567&h=500"
                },
                {
                    name:"帕恰狗",
                    age:3,
                    img:"https://img1.baidu.com/it/u=871767905,2823031333&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                },
            ]
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