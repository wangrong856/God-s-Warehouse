<template>
    <div>
        <table width="800px" border="1" cellspacing="0" align="center">
            <tr>
                <th>#</th>
                <th>商品名称</th>
                <th>价格</th>
                <th>标签</th>
                <th>操作</th>
            </tr>
            <tr v-for="(item, index) in list" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>
                    <p>
                        <slot name="addTag" :row="item"></slot>
                    </p>
                    <el-tag style="margin-right: 5px;" size="mini" v-for="(it,ind) in item.tag" 
                    :key="ind" type="warning" effect="dark">
                        {{ it }}
                    </el-tag>
                </td>
                <td>
                    <slot name="del" :row="item"></slot>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'my-table',
    props: {
        list: Array
    }
}
</script>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
}
table {
    tr {
        height: 50px;
    }
}
</style>