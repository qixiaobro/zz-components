<template>
  <div style="padding:30px;">
    <h3>INPUT输入框</h3>
    <h4>基础:</h4>
    <div class="mdui-row" style="margin-top:10px;margin-bottom:10px;">
      <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-12" style="margin:5px 0;">
        <z-input placeholder="默认输入框" v-model="s"></z-input>
        {{s}}
      </div>
      <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-12" style="margin:5px 0;">
        <z-input fixTag label="固定label输入框"></z-input>
      </div>
      <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-12" style="margin:5px 0;">
        <z-input floatTag label="浮动label输入框"></z-input>
      </div>
    </div>
    <h4>helper含帮助文本提示框:</h4>
    <div class="mdui-row" style="margin-top:10px;margin-bottom:10px;">
      <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-12" style="margin:5px 0;">
        <z-input  helper="用户名限制1~9个字符"></z-input>
      </div>
      <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-12" style="margin:5px 0;">
        <z-input fixTag label="固定label输入框" helper="用户名限制1~9个字符"></z-input>
      </div>
      <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-12" style="margin:5px 0;">
        <z-input floatTag label="浮动label输入框" helper="用户名限制1~9个字符"></z-input>
      </div>
    </div>
    <h4>禁用输入框:</h4>
    <div class="mdui-row" style="margin-top:10px;margin-bottom:10px;">
      <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-12" style="margin:5px 0;">
        <z-input placeholder="默认输入框" disabled></z-input>
      </div>
      <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-12" style="margin:5px 0;">
        <z-input fixTag label="固定label输入框" disabled></z-input>
      </div>
      <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-12" style="margin:5px 0;">
        <z-input floatTag label="浮动label输入框" disabled></z-input>
      </div>
    </div>
    <h4>图标输入框:</h4>
    <div class="mdui-row" style="margin-top:10px;margin-bottom:10px;">
      <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-12" style="margin:5px 0;">
        <z-input placeholder="默认输入框" icon="email"></z-input>
      </div>
      <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-12" style="margin:5px 0;">
        <z-input fixTag label="固定label输入框" icon="account_circle"></z-input>
      </div>
      <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-12" style="margin:5px 0;">
        <z-input floatTag label="浮动label输入框" icon="textsms"></z-input>
      </div>
    </div>
    <h4>可展开输入框:</h4>
    <div class="mdui-row" style="margin-top:10px;margin-bottom:10px;">
      <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-12" style="margin:5px 0;">
        <z-input placeholder="左边展开" icon="email" iconClose="close" iconOpen="search"></z-input>
      </div>
      <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-12" style="margin:5px 0;">
        <z-input placeholder="右边展开" icon="email" iconClose="close" iconOpen="search" openRight></z-input>
      </div>
    </div>
  </div>
</template>

<script>
import ZInput from "../components/ZInput";
export default {
  name: "ExInput",
  components: {
    ZInput
  },
  data(){
    return{
      s:'',
    }
  }
};
</script>

<style>
</style>