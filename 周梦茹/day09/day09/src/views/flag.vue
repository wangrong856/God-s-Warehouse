<template>
    <div class="home">
        <div class="box" v-for="(item, index) in arr" :key="index">
            <p @click.stop="qh(item, index)"> <input type="checkbox" v-model="item.checkall" @click.stop="all(item)">
                <span>{{ item.name }}</span>
            </p>
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
    name: 'Day09Flag',
    data() {
        return {

            arr: [
                {
                    name: "人员",
                    flag: false,
                    checkall: false,
                    children: [{
                        checked: false,
                        name: '第一组01'
                    },
                    {
                        checked: false,
                        name: '第一组02'
                    },
                    {
                        checked: false,
                        name: '第一组03'
                    },
                    {
                        checked: false,
                        name: '第一组04'
                    },
                    {
                        checked: false,
                        name: '第一组05'
                    },]
                },
                {
                    name: "项目",
                    flag: false,
                    checkall: false,
                    children: [{
                        checked: false,
                        name: '第一组01'
                    },
                    {
                        checked: false,
                        name: '第一组02'
                    },
                    {
                        checked: false,
                        name: '第一组03'
                    },
                    {
                        checked: false,
                        name: '第一组04'
                    },
                    {
                        checked: false,
                        name: '第一组05'
                    },]
                },
                {
                    name: "机构",
                    checkall: false,
                    flag: false,
                    children: [{
                        checked: false,
                        name: '第一组01'
                    },
                    {
                        checked: false,
                        name: '第一组02'
                    },
                    {
                        checked: false,
                        name: '第一组03'
                    },
                    {
                        checked: false,
                        name: '第一组04'
                    },
                    {
                        checked: false,
                        name: '第一组05'
                    },]
                }
            ]
        };
    },
    watch: {
        arr: {
            handler(val) {
                val.forEach(it => {
                    it.checkall = it.children.every(item => item.checked)
                })
            },
            deep: true,
            immediate: true
        }
    },
    methods: {
        qh(item) {
            this.arr.forEach(item => item.flag = false)
            item.flag = !item.flag
        },
        all(item) {
            item.children.forEach(it => it.checked = !item.checkall)
        }
    },
};
</script>

<style lang="scss" scoped>
.home {
    width: 800px;
    margin: 50px auto;
}

p {
    height: 30px;
    display: flex;
    align-items: center;
    background-color: gainsboro;

    span {
        text-align: center;
        flex: 1;
    }
}
</style>