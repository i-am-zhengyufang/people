<template>
  <el-carousel trigger="click" :autoplay="false" @change="change">
    <el-carousel-item v-for="(item, index) in pages" :key="index">
      <components :is="item" v-show="item == pages[idx]" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import Zero from "./childComps/Zero.vue";
import One from "./childComps/One.vue";
import Two from "./childComps/Two.vue";
import Three from "./childComps/Three.vue";
import Four from "./childComps/Four.vue";
export default {
  name: "index",
  props: {},
  components: { Zero, One, Two, Three, Four },
  data() {
    return {
      idx: 0,
      pages: ["Zero", "One", "Two", "Three", "Four"],
    };
  },
  methods: {
    change(idx) {
      this.idx = idx;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-carousel__container {
  height: 800px;
  color: #fff;
  .el-carousel__arrow {
    background-color: #fdee89;
    top: 300px;
    color: #000;
  }
  .el-carousel__item {
    padding: 20px;
  }
}
::v-deep .el-carousel__indicators--horizontal {
  top: 680px;
}
::v-deep .is-active .el-carousel__button {
  background-color: #fdee89;
}
</style>