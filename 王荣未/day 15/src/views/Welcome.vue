<template>
  <div>
    <!-- 卡片区域 -->
    <el-row :gutter="12" style="margin: 50px 125px">
      <el-col :span="8">
        <el-card class="box-card">
          <i
            class="el-icon-s-order"
            style="color: rgb(69, 171, 255); font-size: 100px"
          ></i>
          <div class="box">
            <div class="title">今日订单总数</div>
            <div class="count">200</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <i
            class="el-icon-money"
            style="color: rgb(69, 171, 255); font-size: 100px"
          ></i>
          <div class="box">
            <div class="title">今日销售总额</div>
            <div class="count">￥5000.0</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <i
            class="el-icon-coin"
            style="color: rgb(69, 171, 255); font-size: 100px"
          ></i>
          <div class="box">
            <div class="title">昨日销售总额</div>
            <div class="count">￥5000.0</div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 卡片区域 -->
    <el-row :gutter="12" style="margin: 50px 125px">
      <el-col :span="8">
        <el-card class="box-card">
          <i
            class="el-icon-s-goods"
            style="color: rgb(69, 171, 255); font-size: 100px"
          ></i>
          <div class="box">
            <div class="title">商品总数量</div>
            <div class="count">100000+</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <i
            class="el-icon-s-custom"
            style="color: rgb(69, 171, 255); font-size: 100px"
          ></i>
          <div class="box">
            <div class="title">注册用户人数</div>
            <div class="count">100000+</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <i
            class="el-icon-present"
            style="color: rgb(69, 171, 255); font-size: 100px"
          ></i>
          <div class="box">
            <div class="title">VIP用户数量</div>
            <div class="count">88888+</div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-card style="margin: 50px 125px">
      <div slot="header">
        <div class="head">待处理事务</div>
      </div>
      <div class="footer">
        <ul>
          <li>
            <span style="font-size: 18px; margin-left: 10px">待付款订单</span>
            <span
              style="
                color: rgb(245, 108, 108);
                margin-left: 210px;
                font-size: 18px;
              "
              >(10)</span
            >
            <hr />
          </li>
          <li>
            <span style="font-size: 18px; margin-left: 10px">已完成订单</span>
            <span
              style="
                color: rgb(245, 108, 108);
                margin-left: 210px;
                font-size: 18px;
              "
              >(10)</span
            >
            <hr />
          </li>
          <li>
            <span style="font-size: 18px; margin-left: 10px"
              >待确认收货订单</span
            >
            <span
              style="
                color: rgb(245, 108, 108);
                margin-left: 175px;
                font-size: 18px;
              "
              >(10)</span
            >
            <hr />
          </li>
        </ul>
        <ul>
          <li>
            <span style="font-size: 18px; margin-left: 10px">待发货订单</span>
            <span
              style="
                color: rgb(245, 108, 108);
                margin-left: 210px;
                font-size: 18px;
              "
              >(10)</span
            >
            <hr />
          </li>
          <li>
            <span style="font-size: 18px; margin-left: 10px">新缺货登记</span>
            <span
              style="
                color: rgb(245, 108, 108);
                margin-left: 210px;
                font-size: 18px;
              "
              >(10)</span
            >
            <hr />
          </li>
          <li>
            <span style="font-size: 18px; margin-left: 10px"
              >待处理退款申请</span
            >
            <span
              style="
                color: rgb(245, 108, 108);
                margin-left: 175px;
                font-size: 18px;
              "
              >(10)</span
            >
            <hr />
          </li>
        </ul>
        <ul>
          <li>
            <span style="font-size: 18px; margin-left: 10px">已发货订单</span>
            <span
              style="
                color: rgb(245, 108, 108);
                margin-left: 210px;
                font-size: 18px;
              "
              >(10)</span
            >
            <hr />
          </li>
          <li>
            <span style="font-size: 18px; margin-left: 10px"
              >待处理退货订单</span
            >
            <span
              style="
                color: rgb(245, 108, 108);
                margin-left: 175px;
                font-size: 18px;
              "
              >(10)</span
            >
            <hr />
          </li>
          <li>
            <span style="font-size: 18px; margin-left: 10px"
              >广告位即将到期</span
            >
            <span
              style="
                color: rgb(245, 108, 108);
                margin-left: 175px;
                font-size: 18px;
              "
              >(10)</span
            >
            <hr />
          </li>
        </ul>
      </div>
    </el-card>

    <!-- 卡片区域 -->
    <el-row :gutter="12" style="margin: 50px 125px">
      <el-col :span="12">
        <el-card>
          <div slot="header">
            <div class="head">商品总览</div>
          </div>
          <div class="footer">
            <ul>
              <li>
                <div style="color: rgb(245, 108, 108); font-size: 25px">
                  1000
                </div>
                <div style="padding-top: 10px; font-size: 20px">已下架</div>
              </li>
              <li>
                <div style="color: rgb(245, 108, 108); font-size: 25px">
                  1000
                </div>
                <div style="padding-top: 10px; font-size: 20px">已上架</div>
              </li>
              <li>
                <div style="color: rgb(245, 108, 108); font-size: 25px">
                  500
                </div>
                <div
                  style="padding-top: 10px; font-size: 20px; margin-left: -10px"
                >
                  库存紧张
                </div>
              </li>
              <li>
                <div style="color: rgb(245, 108, 108); font-size: 25px">
                  5000
                </div>
                <div
                  style="padding-top: 10px; font-size: 20px; margin-left: -10px"
                >
                  全部商品
                </div>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div slot="header">
            <div class="head">用户总览</div>
          </div>
          <div class="footer">
            <ul>
              <li>
                <div style="color: rgb(245, 108, 108); font-size: 25px">
                  100
                </div>
                <div
                  style="padding-top: 10px; font-size: 20px; margin-left: -10px"
                >
                  今日新增
                </div>
              </li>
              <li>
                <div style="color: rgb(245, 108, 108); font-size: 25px">
                  200
                </div>
                <div
                  style="padding-top: 10px; font-size: 20px; margin-left: -10px"
                >
                  昨日新增
                </div>
              </li>
              <li>
                <div style="color: rgb(245, 108, 108); font-size: 25px">
                  1000
                </div>
                <div
                  style="padding-top: 10px; font-size: 20px; margin-left: -10px"
                >
                  本月新增
                </div>
              </li>
              <li>
                <div style="color: rgb(245, 108, 108); font-size: 25px">
                  8900
                </div>
                <div
                  style="padding-top: 10px; font-size: 20px; margin-left: -10px"
                >
                  会员总数
                </div>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "welcomeIndex",
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss" scoped>
::v-deep .el-card {
  background: #fff;
}
.box-card {
  padding-left: 20px;
}
.box {
  display: inline-block;
  vertical-align: top;
  padding-top: 20px;
  padding-left: 30px;
}
.title {
  font-size: 20px;
  color: rgb(144, 147, 153);
}
.count {
  font-size: 20px;
  margin-top: 20px;
}

::v-deep .el-card__header {
  background-color: rgb(242, 246, 252) !important;
}

.head {
  font-size: 20px;
  font-weight: 700;
  color: rgb(96, 98, 102);
}

.footer ul {
  list-style: none;
  display: flex;
}

.footer ul li {
  flex: 1;
  padding: 5px 10px;
}
</style>
