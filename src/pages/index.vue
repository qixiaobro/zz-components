<template>
  <div>
      <BaseHeader></BaseHeader>
      <BaseSideBar></BaseSideBar>
  </div>
</template>

<script>
import BaseHeader from '../components/BaseLayOut/BaseHeader';
import BaseSideBar from '../components/BaseLayOut/BaseSideBar';


export default {
    name:'index',
    components:{
        BaseHeader,
        BaseSideBar
    }
}
</script>

<style>

</style>