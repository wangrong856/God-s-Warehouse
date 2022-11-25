<template>
    <div class="box">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>编号</th>
                    <th>资产名称</th>
                    <th>价格</th>
                    <th>创建时间</th>
                    <th>操作</th>
                </tr>
            </thead>
            <!-- 数据部分 -->
            <tbody>
                <tr v-for="item in list" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td :class="item.price > 100 ? 'cor' : ''">{{ item.price }}</td>
                    <td>{{ item.time | dateformat('YYYY-MM-DD') }}</td>
                    <td><a href="JavaScript:;" @click="del(index)">删除</a></td>
                </tr>
            </tbody>
            <!-- 底部foot -->
            <tfoot>
                <tr v-if="list.length !== 0" style="background-color: #eeeeee;">
                    <td>统计</td>
                    <td colspan="2">统计总价:{{ sum }}</td>
                    <td colspan="2">统计均价:{{ rate }}</td>
                </tr>
                <tr v-else>
                    <td colspan="5" style="text-align: center;">
                        暂无数据
                    </td>
                </tr>
            </tfoot>
        </table>
        <!-- 添加输入框 -->
        <div class="tfoot">
            <input type="text" class="form-control" placeholder="资产名称" v-model="name">
            <input type="text" class="form-control" placeholder="价格" v-model="price">
            <button type="button" class="btn btn-primary" @click="add">添加资产</button>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            list: JSON.parse(localStorage.getItem('list')) || [
                { id: 100, name: "外套", price: 199, time: new Date('2010-08-12') },
                { id: 101, name: "裤子", price: 34, time: new Date('2013-09-01') },
                { id: 102, name: "鞋", price: 25.4, time: new Date('2018-11-22') },
                { id: 103, name: "头发", price: 19900, time: new Date('2020-12-12') }
            ],
            price: 0,
            name: ''
        }
    },
    computed: {
        // 总价
        sum() {
            return this.list.reduce((sum, item) => sum += item.price, 0)
        },
        // 均价
        rate() {
            var rates = this.list.reduce((sum, item) => sum += item.price, 0) / this.list.length
            return rates.toFixed(2)
        }
    },
    watch: {
        list: {
            handler(val) {
                localStorage.setItem('list', JSON.stringify(val))
            },
            deep: true,
            immediate: true

        }
    },
    methods: {
        // 添加方法
        add() {
            // 获取数据最后一条数据的ID
            let id = this.list[this.list.length - 1].id
            // 创建对象存添加的数据
            var obj = {
                id: id + 1,
                name: this.name,
                price: Number(this.price),
                time: new Date()
            }
            // 判断名称或价格为空
            if (this.name == '' || this.price == '') {
                // 为空提示语句
                alert('资产名称或价格不能为空')
            } else {
                // 不为空添加数据
                this.list.push(obj)
            }
            // 添加完毕清空输入框
            this.name = ''
            this.price = 0
        },
        // 删除方法
        del(index) {
            // 判断是否删除
            if (confirm('确认删除吗？')) {
                // 数组index位置删除一个
                this.list.splice(index, 1)
            }
        }
    }
}
</script>

<style scoped lang="scss">
.table-bordered,
.box {
    width: 700px;
    margin: 50px auto 10px;

}

.cor {
    color: red;
}

.tfoot {
    width: 100%;
    display: flex;

    input {
        width: 180px;
        margin-right: 5px;

    }
}
</style>