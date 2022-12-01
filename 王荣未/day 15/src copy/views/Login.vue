<template>
  <div class="login">
    <checkbox-y size="mini" :checked="flag" @change="onChange"></checkbox-y>
    <div class="login_top">
      <router-view></router-view>
    </div>

    <div class="preview_img" ref="eview">
      <div
        class="img"
        v-for="(t, i) in imgList"
        :key="i"
        @mouseover="mouseover(i)"
        @mouseout="mouseout"
      >
        <img :src="t" width="350px" height="350px" />
        <div class="hover-mask" v-show="isShow" ref="mask"></div>
        <div class="big" v-show="isShow" ref="big">
          <img :src="t" class="bigImg" ref="bigImg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import checkboxY from "@/components/checkbox-y";

export default {
  components: { checkboxY },
  name: "loginIndex",

  data() {
    return {
      flag: false,
      imgList: [
        "/img/download-1.png",
        // "/img/download-2.png",
        // "/img/download.png"
      ],
      isShow: false,
    };
  },

  mounted() {},

  methods: {
    mouseover(i) {
      this.isShow = true;
      this.mouseovers(i);
    },
    mouseout() {
      this.isShow = false;
    },
    onChange() {
      this.flag = !this.flag;
    },
    mouseovers(i) {
      // i 下标
      var eview = this.$refs.eview;
      var mask = this.$refs.mask;
      var bigImg = this.$refs.bigImg;
      var big = this.$refs.big;
      eview.addEventListener("mouseover", function (e) {
        //鼠标在盒子内的坐
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        //遮挡层移动的距离
        var maskX = x - mask[i].offsetWidth / 5;
        var maskY = y - mask[i].offsetHeight / 5;
        //大图移动距离
        //遮挡层的最大移动距离
        var maskMaxX = eview.offsetWidth - mask[i].offsetWidth;
        var maskMaxY = eview.offsetHeight - mask[i].offsetHeight;
        //如果X坐标小于0  就让它停留在0 的位置
        if (maskX <= 0) {
          maskX = 0;
        } else if (maskX >= maskMaxX) {
          maskX = maskMaxX;
        }
        //如果Y坐标小于0  就让它停留在0 的位置
        if (maskY <= 0) {
          maskY = 0;
        } else if (maskY >= maskMaxY) {
          maskY = maskMaxY;
        }
        //遮挡层移动
        mask[i].style.left = maskX + "px";
        mask[i].style.top = maskY + "px";

        //大图片最大移动距离
        var bigMaxX = bigImg[i].offsetWidth - big[i].offsetWidth;
        var bigMaxY = bigImg[i].offsetHeight - big[i].offsetHeight;
        //大图片的移动距离 X Y
        // 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
        var bigX = (maskX * bigMaxX) / maskMaxX;
        var bigY = (maskY * bigMaxY) / maskMaxY;
        //大图和小图（鼠标移动）方向相反
        bigImg[i].style.left = -bigX + "px";
        bigImg[i].style.top = -bigY + "px";
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.preview_img {
  width: 352px;
  position: relative;
  height: 352px;
  border: 1px solid #ff1c1c;
  .hover-mask {
    width: 150px;
    height: 150px;
    position: absolute;
    left: 0;
    top: 0;
    background: rgb(249 223 105 / 54%);
    cursor: move;
  }
  .big {
    position: absolute;
    width: 500px;
    height: 500px;
    top: 0;
    left: 352px;
    z-index: 999;
    border: 1px solid #000;
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }
  }
}
</style>
