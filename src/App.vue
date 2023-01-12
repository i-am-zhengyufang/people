<template>
  <div id="app">
    <!-- <layout v-if="!($route.path === '/')" /> -->
    <layout />
  </div>
</template>

<script>
import layout from "@/layout";

export default {
  name: "app",
  data() {
    return {};
  },
  mounted() {},
  components: { layout },
};
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  cursor: url(~assets/img/pointer.png) 8 3, auto;
}
</style>