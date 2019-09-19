<template>
  <div class="mdui-drawer">
    <ul class="nav-item mdui-list">
      <li>
        <a class="mdui-list-item mdui-ripple">foo</a>
      </li>
      <li>
        <a class="mdui-list-item mdui-ripple">foo</a>
      </li>
      <li>
        <a class="mdui-list-item mdui-ripple">foo</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BaseSideBar"
};
</script>

<style>
.mdui-drawer {
  top: 64px;
}
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.mdui-list-item{
    padding-left: 72px;
    font-size: 15px
}
</style>