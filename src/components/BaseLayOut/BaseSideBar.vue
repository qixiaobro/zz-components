<template>
  <div>
    <ul class="mdui-list">
      <li v-for="(value,key) in lists" :key="key">
        <router-link class="mdui-list-item mdui-ripple" :to="{path:value.path}">{{value.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BaseSideBar",
  props: {
    lists: {
      type: Array,
      default: ""
    }
  }
};
</script>

<style>
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

</style>