<template>
  <div class="education animate__animated animate__bounceInUp">
    <div class="left">
      <chart-1 />
      <chart-3 />
    </div>
    <div class="center">
      <chart-5 />
      <chart-2 />
    </div>
    <div class="right">
      <chart-4 />
      <chart-6 />
    </div>
  </div>
</template>

<script>
import Chart1 from "./childComps/Chart1";
import Chart2 from "./childComps/Chart2";
import Chart3 from "./childComps/Chart3";
import Chart4 from "./childComps/Chart4";
import Chart5 from "./childComps/Chart5";
import Chart6 from "./childComps/Chart6";
export default {
  name: "index",
  props: {},
  components: {
    Chart1,
    Chart2,
    Chart3,
    Chart4,
    Chart5,
    Chart6,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.education {
  display: flex;
  height: 800px;
  .left {
    flex: 1;
    margin-top: 25px;
  }
  .center {
    flex: 2;
    margin: 0 20px;
  }
  .right {
    margin-top: 25px;
    flex: 1;
  }
}
</style>