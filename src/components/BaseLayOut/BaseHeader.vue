<template>
    <header class="mdui-appbar mdui-appbar-fixed">
      <div class="mdui-toolbar mdui-color-theme">
        <span
          class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"
          mdui-drawer="{target: '#main-drawer', swipe: true}"
        >
          <i class="mdui-icon material-icons">menu</i>
        </span>
        <a href="../" class="mdui-typo-headline mdui-hidden-xs">MDUI</a>
        <a href="./" class="mdui-typo-title">文档</a>
      </div>
    </header>
</template>

<script>
export default {
  name: "BaseHeader"
};
</script>

<style>

</style>