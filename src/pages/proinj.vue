<template>
  <div style="margin-top:100px;">
    username:
    <input v-model="username" />
    sex:
    <input v-model="person.sex" />
    age:
    <input v-model="person.age" />
    <pro-inj-s></pro-inj-s>
  </div>
</template>

<script>
import proInjS from "./proinjSon";
export default {
  name: "proinj",
  provide() {
    return {
      username: this.username,//非响应式
      person: this.person,//响应式
      parent: this
    };
  },
  components: {
    proInjS
  },
  data() {
    return {
      username: "jane",
      person: {
        sex: "female",
        age: 10
      }
    };
  }
};
</script>

<style>
</style>