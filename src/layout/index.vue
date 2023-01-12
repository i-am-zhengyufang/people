<template>
  <div class="layout">
    <center-main v-if="this.$route.path == '/'" />
    <div class="box" v-else>
      <header-area />
      <left-navigation
        class="left"
        v-if="this.$route.path.substring(0, 5) == '/home'"
      />

      <center-main class="main" />
    </div>
  </div>
</template>

<script>
import HeaderArea from "./HeaderArea";
import LeftNavigation from "./LeftNavigation";
import CenterMain from "./CenterMain";
export default {
  name: "index",
  props: {},
  components: {
    HeaderArea,
    LeftNavigation,
    CenterMain,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  margin: 0 auto;
  font-family: FZYaoti;
  overflow: auto;
  .box {
    background: url("~assets/img/group6.jpg") #071411 0 0/100%;
  }
  .left {
    float: left;
  }
  .main {
    padding: 0 10px;
  }
}
</style>