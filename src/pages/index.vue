<template>
  <div class="mdui-container-fluid">
    <div class="mdui-row">
      <BaseHeader class="mdui-col-xs-12"></BaseHeader>
    </div>
    <div class="mdui-row">
      <BaseSideBar class="mdui-col-xs-2" :lists="lists"></BaseSideBar>
      <div class="mdui-col-xs-10">
        <router-view class="card"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeader from "../components/BaseLayOut/BaseHeader";
import BaseSideBar from "../components/BaseLayOut/BaseSideBar";

export default {
  name: "index",
  components: {
    BaseHeader,
    BaseSideBar
  },
  data() {
    return {
      lists: [
        {
          name: "Button按钮",
          path: "ExButton"
        },
        {
          name: "Input输入框",
          path: "ExInput"
        },
        {
          name: "Radio单选框"
        },
        {
          name: "Checkbox多选框"
        }
      ]
    };
  }
};
</script>

<style>
.card {
  margin: 10px;
  padding: 20px;
}
</style>