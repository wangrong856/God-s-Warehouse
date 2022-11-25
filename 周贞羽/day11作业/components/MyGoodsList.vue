<template>
  <div class="MyGoodsList">
    <div class="list">
      <div class="ccc">
        <table border="1" cellspacing="0">
        <tr>
          <td>#</td>
          <td>商品名称</td>
          <td>价格</td>
          <td>标签</td>
          <td>操作</td>
        </tr> 
        <tr  v-for="(item, index) in obj" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td >
            <p>
              <slot name="tagyu" :one="item" :$index="index"></slot>
            </p>
            
            <el-tag type="warning" v-for="(it,ind) in item.labal" :key="ind">
              {{it}}
            </el-tag>
            <!-- <el-tag type="warning">{{ item.labe }}</el-tag> -->
          </td>
          <td>
            <slot name="zi" :row="item" ></slot>
          </td>
        </tr>
      </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    obj:Array
  },

};
</script>

<style>
.MyGoodsList{
  padding:100px 100px;
}
td{
  width: 200px;
}
.tags{
  margin: 0px 35px;
}
input{
  width: 50px;
}
</style>