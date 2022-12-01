<template>
  <div>
    <div id="view" class="view i-view col ft-30" v-cloak>
      <!-- nav -->
      <div class="tab-box" ref="tabBox">
        <div class="tab-item-box overflow-x">
          <div
            :class="['tab-item', cur == index ? 'active' : '']"
            :style="{ width: 100 / tabList.length + '%' }"
            v-for="(item, index) in tabList"
            :key="index"
            @click="changeTab(index)"
          >
            {{ item }}
          </div>
          <!-- 划入 -->
          <div
            class="bottom-line"
            :style="{
              width: 100 / tabList.length - w + '%',
              marginLeft:
                (100 / tabList.length - (100 / tabList.length - w)) / 2 + '%',
            }"
          ></div>
        </div>
      </div>
      <!-- 内容 -->
      <div class="content">
        <div
          class="content-box"
          @touchStart="touchStart"
          @touchmove="touchmove"
          @touchend="touchend"
        >
          <div
            class="content-item"
            v-for="(item, index) in dataList"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueAppLogin",

  data() {
    return {
      tabList: [1, 2, 3, 4, 5, 6],
      dataList: [1, 2, 3, 4, 5, 6],
      startX: null,
      moveX: null,
      cur: 0,
      index: 0,
    };
  },
  props: {
    w: {
      type: Number,
      default: 10,
    },
  },
  mounted() {
    var itemWidth = document.querySelector(".content-item").offsetWidth;
    document.querySelector(".content-box").style.width =
      itemWidth * this.dataList.length + "%";
  },
  updated() {},
  methods: {
    changeTab(index) {
      this.cur = index;
      this.setMove(index);
    },
    /**
     * 设置偏移
     */
    setMove(index) {
      var itemWidth = document.querySelector(".content-item").offsetWidth;
      var bottomLineWidth = document.querySelector(".tab-item").offsetWidth;
      document.querySelector(".bottom-line").style.left =
        bottomLineWidth * index + "px";
      document.querySelector(".content-box").style.left =
        -(itemWidth * index) + "px";
    },
    /**
     *  触摸开始事件
     */
    touchStart(e) {
      this.startX = e.touches[0].clientX;
    },
    /**
     *  触摸移动事件
     */
    touchmove(e) {
      this.moveX = e.touches[0].clientX;
    },
    /**
     *  触摸结束事件
     */
    touchend(e) {
      e.preventDefault();
      if (this.moveX - this.startX > 0) {
        this.index = this.index - 1;
        this.cur = this.index;
        if (this.index >= 0) {
          this.setMove(this.index);
        } else {
          this.index = 0;
          this.cur = 0;
        }
      } else {
        this.index = this.index + 1;
        if (this.index >= this.dataList.length - 1) {
          this.index = this.dataList.length - 1;
        }
        this.setMove(this.index);
        this.cur = this.index;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
html {
  // font-size: calc(100vw / 7.5);
  font-family: "\5FAE\8F6F\96C5\9ED1";
}
html,
body {
  color: #222;
  background-color: #f5f5f5;
}
input,
textarea,
div {
  -webkit-tap-highlight-color: transparent;
}
.tab-box {
  width: 100%;
  height: 5.25rem;
}
.tab-item-box {
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.28rem;
}
.tab-item-box::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.tab-item-box {
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
.bottom-line {
  position: absolute;
  height: 0.08rem;
  background-color: #147ae2;
  bottom: 0;
  left: 0;
  margin: auto;
  transition: left 0.5s;
}
.tab-item {
  display: inline-block;
  height: 100%;
  text-align: center;
  line-height: 5.25rem;
}
.tab-item.active {
  color: #147ae2;
}
.content {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.content-box {
  height: 100%;
  position: absolute;
  left: 0;
  transition: left 0.5s;
}
.content-item {
  width: 100vw;
  display: inline-block;
  height: 100%;
}

/* 头部  */
.view {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.i-view {
  overflow: hidden;
}
.overflow-y {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.overflow-x {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
