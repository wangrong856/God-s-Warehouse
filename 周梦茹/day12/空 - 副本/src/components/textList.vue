<template>
  <div>
      <table border cellspacing="0" width="1000px" height="400px">
        <tr>
            <td>
                用户名 <br>
                <input type="text">
            </td>
        </tr>
        <tr>
            <td>
                密码 <br>
                <input type="text">
            </td>
        </tr>
        <tr>
            <td>
                性别 <br>
                <input type="radio" >男
                <input type="radio" >女
            </td>
        </tr>
        <tr>
            <td>
                <input type="checkbox">抽烟
                <input type="checkbox">喝酒
                <input type="checkbox">烫头
            </td>
        </tr>
        <tr>
            <td>
                来自于 <br>
                <select name="" id="">
                    <option value="北京">北京</option>
                    <option value="河南">河南</option>
                    <option value="上海">上海</option>
                </select>
            </td>
        </tr>
      </table>
  </div>
</template>

<script>
export default {
  name: "textList",
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>