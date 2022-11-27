<template>
    <div>
      <input type="text" v-model.number="a"><br>
      <input type="text" v-model.number="b"><br>
      {{num}}
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyappApp',
  
    data() {
      return {
        a: '',
        b: ''
      };
    },
    computed: {
      num() {
        return this.a + this.b
      }
    },
  
    mounted() {
  
    },
  
    methods: {
  
    },
  };
  </script>
  
  <style lang="scss" scoped>
  
  </style>