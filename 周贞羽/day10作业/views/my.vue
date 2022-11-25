<template>
    <div>
        <div class="box">
            <p>全选<input type="checkbox" v-model="isAll"> <button @click="Invert">反选</button></p>
            <ul>
                <li v-for="(item, index) in list" :key="index">{{ item.name }} <input type="checkbox"
                        v-model="item.check" /></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                { check: false, name: '猪八戒' },
                { check: false, name: '孙悟空' },
                { check: false, name: '唐僧' },
                { check: false, name: '白龙马' },
            ],
            check: false
        }
    },
    computed: {
        // 全选全不选
        isAll: {
            get() {
                return this.list.every(item => item.check)
            },
            set(val) {
                this.list.forEach(item => item.check = val)
            }
        }
    },
    methods: {
        // 反选
        Invert() {
            this.list.forEach(item => {
                if (item.check) return item.check = false
                item.check = true
            })
        }
    }
}
</script>

<style scoped>
.box {
    width: 600px;
    margin: 50px auto;
}
</style>