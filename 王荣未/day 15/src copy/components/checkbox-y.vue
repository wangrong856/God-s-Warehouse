<template>
  <div class="w-checkbox-max">
    <!-- 复选组件 -->
    <div :class="{'i-checkebox2':size == 'middle','i-checkebox1':size == 'mini','i-checkebox3':size == 'large'}"
      @click="switchChecked">
      <div class="vi-checked2">
        <i v-if="!checked" :class="{'i-true2':size == 'middle','i-true1':size == 'mini','i-true3':size == 'large'}"></i>
        <i v-else :class="{'i-false2':size == 'middle','i-false1':size == 'mini','i-false3':size == 'large'}"
          :style="{'backgroundColor':color}"></i>
      </div>
      <div name="text" v-if="text !== ''"
        :class="{'i-text2':size == 'middle','i-text1':size == 'mini','i-text3':size == 'large'}">
        {{text}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "checkbox-y",
    data() {
      return {

      };
    },
    props: {
      checked: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: "middle"
      },
      color: {
        type: String,
        default: "#409eff"
      },
      text: {
        type: String,
        default: "12312"
      }
    },
    methods: {
      switchChecked() {
        this.$emit("change", this.checked)
      }
    }
  }
</script>

<style lang="scss">
  .w-checkbox-max {
    position: relative;
    z-index: 0;
    flex: 1;
  }

  // .vi-checked2 {}

  .i-checkebox1 {
    // width: 65px;
    height: 25px;
    margin: 1.5px 1.5px;
    display: flex;
  }

  .i-checkebox2 {
    // width: 130px;
    height: 50px;
    margin: 3px 3px;
    display: flex;
  }

  .i-checkebox3 {
    // width: 195px;
    height: 75px;
    margin: 4.5px 4.5px;
    display: flex;
  }

  .i-text1 {
    height: 25px;
    font-size: 17.5px;
    text-align: center;
    line-height: 25px;
    margin-left: 2.5px;
    font-weight: 300;
  }

  .i-text2 {
    height: 50px;
    font-size: 35px;
    text-align: center;
    line-height: 50px;
    margin-left: 5px;
    font-weight: 300;
  }

  .i-text3 {
    height: 75px;
    font-size: 52.5px;
    text-align: center;
    line-height: 75px;
    margin-left: 7.5px;
    font-weight: 300;
    display: block;

  }


  .i-true1 {
    width: 25px;
    height: 25px;
    background: #fff;
    border: 1.5px solid #bbbbbb8a;
    border-radius: 5px;
    box-sizing: border-box;
    position: relative;
    display: block;

    animation-name: fadeIn;
    /*动画名称*/
    animation-duration: 0s;
    /*动画持续时间*/
    animation-iteration-count: 1;
    /*动画次数*/
    animation-delay: 0s;
    /*延迟时间*/

  }

  .i-true2 {
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 9px;
    box-sizing: border-box;
    border: 3px solid #bbbbbb8a;
    position: relative;
    display: block;

    animation-name: fadeIn;
    /*动画名称*/
    animation-duration: 0s;
    /*动画持续时间*/
    animation-iteration-count: 1;
    /*动画次数*/
    animation-delay: 0s;
    /*延迟时间*/

  }

  .i-true3 {
    width: 75px;
    height: 75px;
    background: #fff;
    border: 4.5px solid #bbbbbb8a;
    border-radius: 15px;
    box-sizing: border-box;
    position: relative;

  }



  .i-false1 {
    width: 25px;
    height: 25px;
    background: #409eff;
    border: 1.5px solid #bbbbbb8a;
    box-sizing: border-box;
    border-radius: 5px;
    display: block;
    position: relative;
    animation-name: fadeIn;
    /*动画名称*/
    animation-duration: 1s;
    /*动画持续时间*/
    animation-iteration-count: 1;
    /*动画次数*/
    animation-delay: 0s;
    /*延迟时间*/

    &::before {
      content: "";
      width: 8px;
      height: 14.5px;
      position: absolute;
      background: transparent;
      top: 41%;
      left: 49%;
      display: block;
      box-sizing: border-box;
      -webkit-transform: rotate(45deg);
      transform: translate(-50%, -50%) rotate(45deg);
      border-bottom: 2.35px solid #fff;
      border-right: 2.25px solid #fff;
    }
  }

  .i-false2 {
    position: relative;
    width: 50px;
    height: 50px;
    background: #409eff;
    box-sizing: border-box;
    border-radius: 9px;
    border: 3px solid #bbbbbb8a;
    display: block;
    animation-name: fadeIn;
    /*动画名称*/
    animation-duration: 0.6s;
    /*动画持续时间*/
    animation-iteration-count: 1;
    /*动画次数*/
    animation-delay: 0s;
    /*延迟时间*/

    &::before {
      content: "";
      width: 16px;
      height: 29px;
      position: absolute;
      background: transparent;
      top: 41%;
      left: 49%;
      display: block;
      box-sizing: border-box;
      -webkit-transform: rotate(45deg);
      transform: translate(-50%, -50%) rotate(45deg);
      border-bottom: 4.7px solid #fff;
      border-right: 4.5px solid #fff;
    }
  }

  .i-false3 {
    position: relative;
    width: 75px;
    height: 75px;
    background: #409eff;
    border: 4.5px solid #bbbbbb8a;
    box-sizing: border-box;
    border-radius: 15px;
    position: relative;
    display: block;


    &::before {
      content: "";
      width: 24px;
      height: 43.5px;
      position: absolute;
      background: transparent;
      top: 41%;
      left: 49%;
      display: block;
      box-sizing: border-box;
      -webkit-transform: rotate(45deg);
      transform: translate(-50%, -50%) rotate(45deg);
      border-bottom: 7.05px solid #fff;
      border-right: 6.75px solid #fff;
    }
  }



  @keyframes fadeIn {
    0% {
      opacity: 0;
      /*初始状态 透明度为0*/
    }

    50% {
      opacity: 0;
      /*中间状态 透明度为0*/
    }

    100% {
      opacity: 1;
      /*结尾状态 透明度为1*/
    }
  }
</style>
