<template>
  <div class="magnify">
    <div
      class="magnify-preview"
      @mousemove="move($event)"
      @mouseout="out"
      ref="magnifyPreview"
    >
      <!-- 默认显示图 -->
      <img :src="previewImg" alt="" />
      <!-- 移动遮罩层 -->
      <div class="preview-hover" ref="hoverBox"></div>
    </div>
    <div class="magnify-zoom" v-show="zoomVisiable" ref="magnifyZoom">
      <!-- 大预览图 -->
      <img :src="zoomImg" alt="" ref="bigImg" />
    </div>
  </div>
</template>

<script>
function offset(el) {
  let top = el.offsetTop;
  let left = el.offsetLeft;
  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }
  return {
    left: left,
    top: top,
  };
}
export default {
  name: "magnify-213",
  props: {
    // 默认展示图片
    previewImg: {
      type: String,
      default:
        "https://img14.360buyimg.com/n1/jfs/t1/61328/22/22084/66133/63428630Edd2a5c41/7b63aaa622bc6143.jpg",
    },
    // 大预览图
    zoomImg: {
      type: String,
      default:
        "https://img14.360buyimg.com/n1/jfs/t1/61328/22/22084/66133/63428630Edd2a5c41/7b63aaa622bc6143.jpg",
    },
  },
  data() {
    return {
      zoomVisiable: false,
      hoverVisiable: false,
    };
  },
  methods: {
    out() {
      this.zoomVisiable = false;
    },
    move(ev) {
      this.init();
      // 鼠标距离屏幕的绝对距离
      let moveX = ev.clientX;
      let moveY = ev.clientY;
      // 大盒子距离屏幕的绝对距离
      let offsetLeft = offset(this.magnifyPreview).left;

      let offsetTop = offset(this.magnifyPreview).top;
      // left top计算出遮罩层应该距离屏幕的绝对距离
      let left = moveX - offsetLeft - this.hoverWidth / 2;
      let top;
      if (this.scroll > 0) {
        top = moveY - offsetTop + this.scroll - this.hoverHeight / 2;
      } else {
        top = moveY - offsetTop - this.hoverHeight / 2;
      }
      let maxWidth = this.pWidth - this.hoverWidth;
      let maxHeight = this.pWidth - this.hoverHeight;
      left = left < 0 ? 0 : left > maxWidth ? maxWidth : left;
      top = top < 0 ? 0 : top > maxHeight ? maxHeight : top;
      let percentX = left / maxWidth;
      let percentY = top / maxHeight;
      this.hoverBox.style.left = left + "px";
      this.hoverBox.style.top = top + "px";
      this.bigImg.style.left = percentX * (this.bWidth - this.imgWidth) + "px";
      this.bigImg.style.top = percentY * (this.bHeight - this.imgHeight) + "px";
      this.zoomVisiable = true;
    },
    init() {
      this.hoverBox = this.$refs.hoverBox;
      this.magnifyPreview = this.$refs.magnifyPreview;
      this.bigImg = this.$refs.bigImg;
      this.imgBox = this.$refs.magnifyZoom;
      this.hoverWidth = this.hoverBox.offsetWidth;
      this.hoverHeight = this.hoverBox.offsetHeight;
      this.pWidth = this.magnifyPreview.offsetWidth;
      this.pHeight = this.magnifyPreview.offsetHeight;
      this.imgWidth = this.bigImg.offsetWidth;
      this.imgHeight = this.bigImg.offsetHeight;
      this.bWidth = this.imgBox.offsetWidth;
      this.bHeight = this.imgBox.offsetHeight;
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
    },
  },
};
</script>

<style lang="scss" scoped>
.magnify {
  position: relative;
  .magnify-preview {
    width: 350px;
    height: 350px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid #dededd;
    position: relative;
    &:hover .preview-hover {
      display: block;
      visibility: visible;
    }
    .preview-hover {
      box-sizing: border-box;
      position: absolute;
      display: none;
      left: 0;
      top: 0;
      width: 240px;
      height: 240px;
      // 遮罩背景颜色
      background: url("https://img-tmdetail.alicdn.com/tps/i4/T12pdtXaldXXXXXXXX-2-2.png")
        repeat 0 0;
      cursor: move;
      user-select: none;
    }
    img {
      // max-width: 478px;
      max-width: 100%;
      // max-height: 478px;
      max-height: 100%;
      display: inline-block;
    }
  }
  .magnify-zoom {
    width: 500px;
    height: 500px;
    overflow: hidden;
    position: absolute;
    left: 485px;
    border: 1px solid #dc7a7a;
    top: 0;
    img {
      width: 700px;
      height: 700px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
