<template>
    <div class="list">
        <table width="100%">
            <thead>
                <th>
                    #
                </th>
                <th align="left">商品名称</th>
                <th>商品标签</th>
                <th>商品操作</th>
            </thead>
            <tbody>
                <tr v-for="(item, index) in list" :key="index">
                    <td>
                        {{ item.id }}
                    </td>
                    <td>
                        {{ item.goods_name }}
                    </td>
                    <slot name="add" :item="item"></slot>
                    <td align="center">
                        <slot name="del" :index="index"></slot>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'GoodsList',
    props: ['list'],
    data() {
        return {
            flag: false
        };
    },

    methods: {
    },
};
</script>

<style lang="scss" scoped>
.list {
    padding-top: 80px;
    padding-bottom: 70px;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
}

input {
    margin: 5px;
    border-radius: 5px;
    width: 50px;
    border: 2px solid lightblue;
}

td,
th {
    border-bottom: 2px solid #efefef;
    border-right: 2px solid #efefef;
}

p {
    margin: 0;
}

.tags {
    padding-bottom: 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.tag {
    width: 50px;
    margin: 5px;
    border-radius: 5px;
    font-weight: 600;
    background-color: #fec107;
    padding: 3px;
    box-sizing: border-box;
}

.addtab {
    width: 50px;
    border-radius: 5px;
    margin: 5px;
    color: #fff;
    padding: 5px;
    box-sizing: border-box;
    background-color: #0065d1;
}
</style>