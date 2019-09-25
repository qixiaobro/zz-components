<template>
  <div>
    <label>
      username:
      <h4>{{username}}</h4>
    </label>
    <br />
    <label>
      sex:
      <h4>{{person.sex}}</h4>
    </label>
    <br />
    <label>
      age:
      <h4>{{person.age}}</h4>
    </label>
    <br />
  </div>
</template>

<script>
export default {
  name: "proinjSon",
  inject: ["username", "person", "parent"],
  data() {
    return {};
  },
  mounted() {
    // console.log(this.parent);
  }
};
</script>

<style>
</style>