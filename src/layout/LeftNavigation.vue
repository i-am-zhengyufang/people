<template>
  <ul class="left-navigation">
    <router-link
      v-for="(item, index) in children"
      :key="index"
      :to="item.path"
      custom
      v-slot="{ navigate, isActive }"
    >
      <li
        @click="navigate"
        role="link"
        class="navigation-item"
        :class="{ active: isActive }"
      >
        <span>{{ item.meta.title }}</span>
      </li>
    </router-link>
  </ul>
</template>

<script>
import { children } from "@/router";
export default {
  name: "LeftNavigation",
  props: {},
  components: {},
  data() {
    return { children };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.left-navigation {
  padding-left: 5px;
  margin-top: 80px;
  .navigation-item {
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    margin-bottom: 30px;
    color: #fff;
    background: url(~assets/img/left-bg.png) no-repeat center center;
    background-size: 95% 95%;
    cursor: pointer;
    &.active {
      color: $emphasis-color;
      background-image: url(~assets/img/left-bg5.png);
      text-shadow: 0 0 10px $emphasis-color;
    }
  }
}
</style>