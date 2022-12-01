// 一个混入对象 包含任意的组件选项
export const mixins = {
  data() {
    return {
      arr: JSON.parse(localStorage.getItem('arr')),
      msg: 'goods',
    }
  },
  watch: {
    arr: {
      handler(val) {
        localStorage.setItem('arr', JSON.stringify(val))
      },
      deep: true,
    },
  },

  methods: {
    add() {
      this.arr.push(6)
    },
    del(index) {
      this.arr.splice(index, 1)
    },
  },
}
