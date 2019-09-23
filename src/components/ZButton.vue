<template>
  <div>
    <button
      :class="['mdui-btn',{'mdui-btn-dense':small},{'mdui-ripple':ripple},buttonColor,{'mdui-btn-raised':raised},{'mdui-text-color-white':textColor},{'mdui-btn-icon':circle}]"
      :disabled="disabled"
    >
      <i class="mdui-icon material-icons" v-if="icon">{{icon}}</i>
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "ZButton",
  props: {
    small: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "" //可选值：primary / success / warning / danger / info / text
    },
    ripple: {
      //涟漪效果
      type: Boolean,
      default: false
    },
    raised: {
      //悬浮效果
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    }
  },
  computed: {
    buttonColor() {
      switch (this.type) {
        case "primary":
          this.textColor = true;
          return "mdui-color-blue";
          break;
        case "success":
          this.textColor = true;
          return "mdui-color-green";
          break;
        case "warning":
          this.textColor = true;
          return "mdui-color-orange";
          break;
        case "danger":
          this.textColor = true;
          return "mdui-color-red";
          break;
        case "info":
          this.textColor = true;
          return "mdui-color-grey";
          break;
        default:
          this.textColor = false;
          return "";
          break;
      }
    }
  },
  data() {
    return {
      textColor: false //按钮文字颜色
    };
  }
};
</script>
.defalut{
    color:#fff;
    font-weight:500;
}
<style>
</style>