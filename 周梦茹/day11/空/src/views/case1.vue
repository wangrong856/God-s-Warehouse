<template>
    <div>
        <div class="box" v-for="(item, index) in arr" :key="index">
            <p><input type="checkbox" v-model="item.checkall" @click="all(index)"> <span @click="qh(index)">{{
                    item.title
            }}</span></p>
            <ul v-if="item.flag">
                <li v-for="(it, ind) in item.children" :key="ind">
                    <input type="checkbox" v-model="it.checked"> {{ it.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Case1',

    data() {
        return {
            arr: [
                {
                    title: "人员",   //标题内容
                    checkall: false,  //全选变量
                    flag: true,    //是否显示下拉菜单内容
                    children: [      //下拉菜单的内容
                        {
                            checked: false,
                            name: "第一组01"
                        },
                        {
                            checked: false,
                            name: "第一组02"
                        },
                        {
                            checked: false,
                            name: "第一组03"
                        },
                        {
                            checked: false,
                            name: "第一组04"
                        },
                        {
                            checked: false,
                            name: "第一组05"
                        }
                    ]
                },
                {
                    title: "项目",
                    checkall: false,
                    flag: false,
                    children: [
                        {
                            checked: false,
                            name: "第一组01"
                        },
                        {
                            checked: false,
                            name: "第一组02"
                        },
                        {
                            checked: false,
                            name: "第一组03"
                        },
                        {
                            checked: false,
                            name: "第一组04"
                        },
                        {
                            checked: false,
                            name: "第一组05"
                        }
                    ]
                },
                {
                    title: "机构",
                    checkall: false,
                    flag: false,
                    children: [
                        {
                            checked: false,
                            name: "第一组01"
                        },
                        {
                            checked: false,
                            name: "第一组02"
                        },
                        {
                            checked: false,
                            name: "第一组03"
                        },
                        {
                            checked: false,
                            name: "第一组04"
                        },
                        {
                            checked: false,
                            name: "第一组05"
                        }
                    ]
                }
            ]
        };
    },

    mounted() {

    },
    watch: {
        arr: {
            handler(val) {
                val.forEach(item=>{
                    // 全选的状态为下面全部复选框的状态 如果都选中 全选选中 否则全选不选中
                    item.checkall=item.children.every(it=>it.checked)
                })
            },
            // 开启深度监听
            deep: true,
            // 立即执行 页面一加载就执行
            immediate: true

        }
    },
    methods: {
        qh(index) {
            // 遍历所有数据，让所有标签下拉菜单隐藏 
            this.arr.forEach(item => item.flag = false)
            //只让点击下拉菜单显示
            this.arr[index].flag = !this.arr[index].flag
        },
        all(index) {
            // console.log(this.arr[index].checkall);
            // 获取点击当前的数据children  遍历让他复选框选中状态为全选的状态
            this.arr[index].children.forEach(item => item.checked = !this.arr[index].checkall)
        }
    },
};
</script>

<style lang="scss" scoped>
p {
    display: flex;
    height: 20px;
    align-items: center;
    background-color: gray;

    span {
        text-align: center;
        flex: 1;
    }
}
</style>