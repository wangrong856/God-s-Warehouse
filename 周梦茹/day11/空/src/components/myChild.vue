<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>序号</th>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>头像</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item,index in arr" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.age}}</td>
                    <td>
                        <slot :row="item">
                            {{item.img}}
                        </slot>
                    </td>
                    <td>
                        <slot name="setting" :row="item" :$index="index"></slot>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'myChild',
    props:{arr:Array},
    data() {
        return {
            
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