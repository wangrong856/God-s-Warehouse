<template>
  <div>
      <ul>
        <li v-for="item,index in arr" :key="index">
            <h2>
                <input type="checkbox" v-model="item.flag">
                <span>{{item.title}}</span>
            </h2>
            <ul>
                <li><input type="checkbox">第一组数据</li>
                <li  v-for="it,ind in item.children" :key="ind">
                    <input type="checkbox">
                    {{it.name}}
                </li>
            </ul>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "MyChecked",

  data() { 
    return {
      arr: [
        {
          title: "人员",
          flag: false,
          children: [
            {
              isCheck: false,
              name: "第一组01",
            },
            {
              isCheck: false,
              name: "第一组02",
            },
            {
              isCheck: false,
              name: "第一组03",
            },
            {
              isCheck: false,
              name: "第一组04",
            },
            {
              isCheck: false,
              name: "第一组05",
            },
          ],
        },
        {
          title: "项目",
          flag: false,
          children: [
            {
              isCheck: false,
              name: "第二组01",
            },
            {
              isCheck: false,
              name: "第二组02",
            },
            {
              isCheck: false,
              name: "第二组03",
            },
            {
              isCheck: false,
              name: "第二组04",
            },
            {
              isCheck: false,
              name: "第二组05",
            },
          ],
        },
        {
          title: "机构",
          flag: false,
          children: [
            {
              isCheck: false,
              name: "第三组01",
            },
            {
              isCheck: false,
              name: "第三组02",
            },
            {
              isCheck: false,
              name: "第三组03",
            },
            {
              isCheck: false,
              name: "第三组04",
            },
            {
              isCheck: false,
              name: "第三组05",
            },
          ],
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>