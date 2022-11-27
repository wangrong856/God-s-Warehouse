<template>
    <div>
        <my-scope-vue>
            <template v-slot="{msg,num}">
                <a href="javascript:;">{{msg}}</a>
                <div>{{num}}</div>
            </template>
        </my-scope-vue>
        <my-scope-vue>
            <template>
                
            </template>
        </my-scope-vue>
    </div>
</template>

<script>
import myScopeVue from '@/components/my-scope.vue';
export default {
    name: 'myScope',
    components:{myScopeVue},
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