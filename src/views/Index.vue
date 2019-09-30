<template>
  <div class="index">
    <img alt="Vue logo" src="@/assets/img/logo.png" v-on:click="gotoSubPage" />
    <p>Welcome to Your Vue.js App</p>
  </div>
</template>

<script>
export default {
  name: "index",
  methods: {
    gotoSubPage() {
      this.$router.push({
        path: "subpage.htm"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.index {
  background-color: $bg-color;
}
</style>
