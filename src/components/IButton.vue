<template>
  <button @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    handleClick(event) {
      this.$emit("on-click", event);
      console.log('asd')
    }
  }
};
</script>

<style>
</style>