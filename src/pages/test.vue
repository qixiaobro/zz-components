<template>
  <i-button @click.native="handleClick">native</i-button>
</template>

<script>
import IButton from "../components/IButton";
export default {
  components: {
    IButton
  },
  methods:{
      handleClick(){
          console.log('zxc')
      }
  }
};
</script>

<style>
</style>