<template>
  <div class="mdui-appbar-with-toolbar mdui-theme-primary-blue mdui-theme-accent-pink">
    <header class="mdui-appbar mdui-appbar-fixed">
      <div class="mdui-toolbar mdui-color-theme">
        <span
          class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"
          mdui-drawer="{target: '#main-drawer', swipe: true}"
        >
          <i class="mdui-icon material-icons">menu</i>
        </span>
        <a href="../" class="mdui-typo-headline mdui-hidden-xs"></a>
      </div>
    </header>

    <div class="mdui-drawer" id="main-drawer">
      <div class="mdui-list" style="margin-bottom: 76px;">
        <ul>
          <li v-for="(value,key) in lists" :key="key">
            <router-link class="mdui-list-item mdui-ripple" style="padding-left:76px" :to="{path:value.path}">{{value.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="mdui-container doc-container">
      <router-view></router-view>
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
      ],
      open: true
    };
  },
  methods: {
    openDrawer() {
      if (this.open) {
        document.getElementById("drawer").className = "";
      } else {
        document.getElementById("drawer").className = "mdui-drawer-body-left";
      }
      this.open = !this.open;
    }
  },
  mounted: {
    // let inst = new mdui.Drawer(selector, options);
  }
};
</script>

<style>
.card {
  margin: 10px;
  padding: 20px;
}
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  /* margin-left: ; */
}
</style>