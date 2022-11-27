<template>
    <div class="wrap">
        <div class="nav_left" id="navLeft">
            <div class="nav_content">
                <span :class="num==item.first_id ? 'active' : ''" @click="num=item.first_id" v-for="item in arr"
                    :key="item.first_id">{{ item.first_name }}</span>
            </div>
        </div>
        <div class="down">
            <i class="iconfont icon-xiajiantoubeifen gray"></i>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            arr: [
                {
                    first_id: "0",
                    first_name: "热门"
                },
                {
                    first_id: "621",
                    first_name: "\u5496\u5561",
                },
                {
                    first_id: "627",
                    first_name: "\u996e\u98df",
                },
                {
                    first_id: "279",
                    first_name: "\u7537\u88c5",
                },
                {
                    first_id: "294",
                    first_name: "\u5973\u88c5",
                },
                {
                    first_id: "122",
                    first_name: "\u773c\u955c",
                },
                {
                    first_id: "339",
                    first_name: "\u5185\u8863\u914d\u9970",
                },
                {
                    first_id: "391",
                    first_name: "\u6bcd\u5a74",
                },
                {
                    first_id: "35",
                    first_name: "\u978b\u9774",
                },
                {
                    first_id: "39",
                    first_name: "\u8fd0\u52a8",
                },
                {
                    first_id: "153",
                    first_name: "\u7bb1\u5305",
                },
                {
                    first_id: "119",
                    first_name: "\u7f8e\u5986\u4e2a\u62a4",
                },
                {
                    first_id: "355",
                    first_name: "\u5bb6\u7eba",
                },
                {
                    first_id: "51",
                    first_name: "\u9910\u53a8",
                },
                {
                    first_id: "334",
                    first_name: "\u7535\u5668",
                },
                {
                    first_id: "369",
                    first_name: "\u5bb6\u88c5",
                },
                {
                    first_id: "10",
                    first_name: "\u5bb6\u5177",
                },
                {
                    first_id: "223",
                    first_name: "\u6570\u7801",
                },
                {
                    first_id: "429",
                    first_name: "\u6c7d\u914d",
                },
                {
                    first_id: "546",
                    first_name: "\u5065\u5eb7\u4fdd\u5065",
                },
                {
                    first_id: "433",
                    first_name: "\u5b9a\u5236",
                },
            ],
            num: 0
        };

    },
    methods: {
        
    },

};
</script>
  
<style>
.wrap {
    width: 100%;
    display: flex;
    margin: 0.2rem 0 0 0;
    position: relative;
}

/*左侧的导航样式*/
.nav_left {
    width: 27.1875rem;
    overflow: scroll;
}

.nav_left::-webkit-scrollbar {
    display: none;
}

.nav_content {
    white-space: nowrap;
    padding: 0 0.7rem;
}

.nav_content span {
    display: inline-block;
    padding: 0.4rem 0.6rem;
    font-size: 0.875rem;
}

.nav_content .active {
    border-bottom: 2px solid #7f4395;
    color: #7f4395;
}

.nav_left,
.down {
    float: left;
}

/*右侧导航部分*/
.down {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.gray {
    color: gray;
    display: inline-block;
    vertical-align: middle;
}
</style>