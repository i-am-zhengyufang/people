<template>
  <div class="province-detail">
    <div class="left">
      <chart-2 />
      <chart-8 />
      <chart-4 />
    </div>
    <div class="center">
      <drop-select @hanleBack="hanleBack" />
      <chart-1 />
      <chart-7 />
      <chart-5 />
    </div>
    <div class="right">
      <chart-3 />
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
import Chart7 from "./childComps/Chart7";
import Chart8 from "./childComps/Chart8";
import DropSelect from "./childComps/DropSelect";
import { mapState, mapMutations } from "vuex";
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
    Chart7,
    Chart8,
    DropSelect,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["clickCode", " clickId", "clickName"]),
  },
  created() {
    this.getClickItem(this.$route.query.name);
  },
  methods: {
    ...mapMutations(["updateClickCode", "updateClickId", "updateClickName"]),
    getClickItem(name) {
      let clickItem = this.$root.data.code.find((item) => item.name === name);
      this.updateClickName(name);
      this.updateClickCode(clickItem.adcode);
      this.updateClickId(clickItem.id);
    },
    hanleBack(name) {
      this.$router.push({
        path: "/province-detail",
        query: {
          name,
        },
      });
      this.getClickItem(this.$route.query.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.province-detail {
  display: flex;
  position: relative;
  height: 1000px;
  .left,
  .center,
  .right {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
  }
  .left {
    flex: 1;
  }
  .center {
    flex: 2;
    margin-left: 30px;
    margin-right: 30px;
  }
  .right {
    flex: 1;
  }
  ::v-deep .el-select {
    position: absolute;
    top: 300px;
    right: 350px;
    z-index: 999; //不加你都点不动了
  }
}
</style>