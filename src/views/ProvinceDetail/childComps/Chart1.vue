<template>
  <div class="border">
    <div class="title">年末总人口</div>
    <dv-scroll-board :config="config" :key="clickId" />
  </div>
</template>

<script>
import Flop from "components/Flop";
import { mapState } from "vuex";
export default {
  name: "Chart1",
  components: { Flop },
  data() {
    return {
      res: {},
      config: {
        header: ["年份", "人口数"],
        data: [],
        columnWidth: [50],
        index: true,
        rowNum: 4,
        headerBGC: "rgba(255, 255, 255, 0.1)",
        // evenRowBGC: "#072951",
        evenRowBGC: "rgba(0,0,0,0)",
        oddRowBGC: "rgba(0,0,0,0)",
      },
    };
  },
  computed: {
    ...mapState(["clickCode", "clickId", "clickName"]),
  },

  mounted() {
    this.res = this.$root.data.res;
    this.echartsInit();
  },
  watch: {
    clickId(value1, value2) {
      this.echartsInit();
    },
  },
  methods: {
    echartsInit() {
      console.log(this.clickId);
      this.config.data.length = 0; //每次都先初始化再push
      for (let i = 0; i < this.res.area_data.area_years_list.length; i++) {
        this.config.data.push([
          this.res.area_data.area_years_list[i],
          this.res.area_data.area_list[this.clickId].data[0][i] + "万",
        ]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.border {
  .dv-scroll-board {
    height: 125px;
    ::v-deep .header {
      color: #68d8fe;
    }
  }
}
</style>