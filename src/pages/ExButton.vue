<template>
  <div class="mdui-container-fluid">
    <div>基础:</div>
    <div class="mdui-row" style="margin-top:10px;margin-bottom:10px;">
      <div class="mdui-col-xs-1">
        <z-button>默认按钮</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple>涟漪按钮</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple style="color:red">颜色按钮</z-button>
      </div>
    </div>
    <div>分类按钮:</div>
    <div class="mdui-row" style="margin-top:10px;margin-bottom:10px;">
      <div class="mdui-col-xs-1">
        <z-button ripple type="primary">主要按钮</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="success">成功按钮</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="warning">警告按钮</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="danger">危险按钮</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="info">信息按钮</z-button>
      </div>
    </div>
    <div>悬浮按钮:</div>
    <div class="mdui-row" style="margin-top:10px;margin-bottom:10px;">
      <div class="mdui-col-xs-1">
        <z-button ripple type="primary" raised>主要按钮</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="success" raised>成功按钮</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="warning" raised>警告按钮</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="danger" raised>危险按钮</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="info" raised>信息按钮</z-button>
      </div>
    </div>
    <div>图标按钮:</div>
    <div class="mdui-row" style="margin-top:10px;margin-bottom:10px;">
      <div class="mdui-col-xs-1">
        <z-button ripple type="primary" raised icon="search">搜索</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="success" raised icon="check">成功</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="warning" raised icon="alarm">警告</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="danger" raised icon="delete">删除</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="info" raised icon="info">信息</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="primary" raised icon="search"></z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="success" raised icon="check"></z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="warning" raised icon="alarm"></z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="danger" raised icon="delete"></z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="info" raised icon="info"></z-button>
      </div>
    </div>
    <div>圆形按钮:</div>
    <div class="mdui-row" style="margin-top:10px;margin-bottom:10px;">
      <div class="mdui-col-xs-1">
        <z-button ripple type="primary" raised circle icon="search"></z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="success" raised circle icon="check"></z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="warning" raised circle icon="alarm"></z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="danger" raised circle icon="delete"></z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="info" raised circle icon="info"></z-button>
      </div>
    </div>
    <div>小型按钮:</div>
    <div class="mdui-row" style="margin-top:10px;margin-bottom:10px;">
      <div class="mdui-col-xs-1">
        <z-button ripple type="primary" raised small icon="search">搜索</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="success" raised small icon="check">成功</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="warning" raised small icon="alarm">警告</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="danger" raised small icon="delete">删除</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="info" raised small icon="info">信息</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="primary" raised small icon="search"></z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="success" raised small icon="check"></z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="warning" raised small icon="alarm"></z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="primary" raised circle small icon="search"></z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="success" raised circle small icon="check"></z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="warning" raised circle small icon="alarm"></z-button>
      </div>
    </div>
    <div>禁用按钮:</div>
    <div class="mdui-row" style="margin-top:10px;margin-bottom:10px;">
      <div class="mdui-col-xs-1">
        <z-button ripple type="primary" raised disabled>主要按钮</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="success" raised disabled>成功按钮</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="warning" raised disabled>警告按钮</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="danger" raised disabled>危险按钮</z-button>
      </div>
      <div class="mdui-col-xs-1">
        <z-button ripple type="info" raised disabled>信息按钮</z-button>
      </div>
    </div>
  </div>
</template>

<script>
import zButton from "../components/ZButton";
export default {
  name: "ExButton",
  components: {
    zButton
  }
};
</script>

<style>
</style>