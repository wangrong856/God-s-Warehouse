<template>
    <div>
        <p>请选择你要购买的书籍</p>
        <ul>
            <li v-for="(item, index) in arr" :key="index">
                {{ item.name }} <button @click="add(item)">买书</button>
            </li>
        </ul>
        <table border="1" width="500" cellspacing="0">
            <thead>
                <tr>
                    <th>序号</th>
                    <th>书名</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>合计</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in arr" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>

                    <td>{{ item.price }}</td>
                    <td>{{ item.count }}</td>
                    <td>{{ item.count * item.price }}</td>
                </tr>
            </tbody>
        </table>
        <p>总价格为:{{ sum }} </p>

        <div class="box2">

            <ul>
                <li v-for="(item, index) in num" :key="index">
                    <input type="checkbox" v-model="item.check">{{ item.n }}
                </li>
            </ul><br>
            <p>你选中的和为：{{ he }}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            arr: [
                {
                    name: "水浒传",
                    price: 107,
                    count: 0,
                },
                {
                    name: "西游记",
                    price: 192,
                    count: 0,
                },
                {
                    name: "三国演义",
                    price: 219,
                    count: 0,
                },
                {
                    name: "红楼梦",
                    price: 178,
                    count: 0,
                },
            ],
            num: [{ check: false, n: 9 }, { check: false, n: 15 }, { check: false, n: 19 }, { check: false, n: 25 }, { check: false, n: 29 }, { check: false, n: 31 }, { check: false, n: 48 }, { check: false, n: 57 }, { check: false, n: 62 }, { check: false, n: 79 }, { check: false, n: 87 }]
        };
    },
    computed: {
        sum() {
            return this.arr.reduce((sum, item) => sum += item.price * item.count, 0)
        },
        he() {
            var arr = this.num.filter(item => item.check)
            return arr.reduce((sum, item) => sum += item.n, 0)
        }
    },
    methods: {
        add(it) {
            var list = this.arr.find(item => {
                console.log(item.price);
                return item.price == it.price
            })
            list.count += 1
        }
    }
};
</script>
<style  scoped>
li {
    float: left
}
</style>