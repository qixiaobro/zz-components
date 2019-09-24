<template>
  <div
    :class="['mdui-textfield',{'mdui-textfield-floating-label':floatTag},{'mdui-textfield-expandable':iconOpen!==''},{'mdui-float-right':openRight}]"
  >
    <button class="mdui-textfield-icon mdui-btn mdui-btn-icon" v-if="iconOpen!==''">
      <i class="mdui-icon material-icons">{{iconOpen}}</i>
    </button>
    <i class="mdui-icon material-icons" v-if="icon!==''&&iconOpen==''">{{icon}}</i>
    <label v-if="fixTag||floatTag" class="mdui-textfield-label">{{label}}</label>
    <input
      :class="['mdui-textfield-input']"
      :type="type"
      :placeholder="floatTag?'':placeholder"
      :disabled="disabled"
      v-bind:value="value"
      v-on:input="$emit('input',$event.target.value)"
    />
    <button class="mdui-textfield-close mdui-btn mdui-btn-icon" v-if="iconClose!==''">
      <i class="mdui-icon material-icons">{{iconClose}}</i>
    </button>
    <div class="mdui-textfield-helper" v-if="helper!==''&&iconOpen==''">{{helper}}</div>
  </div>
</template>

<script>
export default {
  name: "ZInput",
  model:{
      prop:'value',
      event:'input'
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: ""
    },
    fixTag: {
      type: Boolean,
      default: false
    },
    floatTag: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    helper: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    iconOpen: {
      type: String,
      default: ""
    },
    iconClose: {
      type: String,
      default: ""
    },
    openRight: {
      type: Boolean,
      default: false
    }
  },
  data() {
      return{
          value:'',
      }
  }
};
</script>

<style>
</style>