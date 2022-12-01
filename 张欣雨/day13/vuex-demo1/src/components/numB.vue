<template>
    <div>
        <ul>
            <li v-for="(item, index) in list" :key="index" :class="item.color">
                {{ index + 1 }}.{{ item.msg }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['list'],
    data() {
        return {

        }
    },
    //使用监听 监听数组数据变化
    watch: {
        list: {
            // 深度监听
            handler(val) {
                // 遍历数组数据
                val.forEach(item => {
                    //判断数据he是否为空
                    if (item.he !== '') {
                        //判断状态flag为-1 修改msg为未完成 color为gray
                        if (item.flag == -1) {
                            item.msg = '未完成'
                            item.color = 'gray'
                        //判断状态flag为0 修改msg为正确 color为green
                        } else if (item.flag == 0) {
                            item.msg = '正确'
                            item.color = 'green'
                        } else {
                        //判断状态flag为1 修改msg为错误 color为red
                            item.msg = "错误"
                            item.color = 'red'
                        }
                    }
                });
            },
            deep: true,
            // 立即监听
            immediate: true

        },

    }
}
</script>

<style scoped lang="scss">
ul {
    display: flex;
}

li {
    margin: 5px;
    font-size: 15px;
}

.gray {
    color: gray;
}

.red {
    color: red;
}

.green {
    color: lightgreen;
}
</style>