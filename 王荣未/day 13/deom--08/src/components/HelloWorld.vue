<template>
  <div class="holeew">
    {{ numEvent }}
    hiol
    <button type="submit" @click="add"></button>
  </div>
</template>

<script>
export default {
  name: "Deom08HelloWorld",

  data() {
    return {};
  },

  props: ["numEvent"],

  mounted() {},

  methods: {
    add() {
      this.$emit("update:numEvent", this.numEvent);
    },
  },
};
</script>

<style lang="scss" scoped></style>
