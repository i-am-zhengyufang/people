<template>
  <div class="border">
    <div class="title">城镇乡村人口</div>
    <div class="chart8"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Chart8",
  props: {},
  components: {},
  data() {
    return {
      res: {},
    };
  },
  computed: {
    ...mapState(["clickId"]),
  },
  mounted() {
    this.res = this.$root.data.extend;
    this.echartsInit();
  },
  watch: {
    clickId(value1, value2) {
      this.echartsInit();
    },
  },
  methods: {
    echartsInit() {
      const year = this.res.area_data.area_years_list;
      let option = {
        color: ["#1d9dff", "#00f7f8"],
        tooltip: {
          show: true,
        },
        legend: {},
        dataZoom: {
          start: 20,
          end: 50,
          textStyle: {
            color: "#fff",
          },
          brushSelect: false,
        },
        xAxis: {
          type: "category",
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            margin: 1,
            textStyle: {
              color: "#ddd",
            },
          },
          data: year,
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
        grid: {
          left: "15%",
          top: "25%",
          bottom: "25%",
        },
        series: [
          {
            type: "bar",
            name: "城镇人口",
            data: this.res.area_data.area_list[this.clickId].data[0],
          },
          {
            type: "bar",
            name: "农村人口",
            data: this.res.area_data.area_list[this.clickId].data[1],
          },
        ],
      };

      let chart8 = this.$echarts.init(
        document.querySelector(".chart8"),
        "westeros"
      );
      chart8.setOption(option, true);
    },
  },
};
</script>

<style lang="scss" scoped>
.chart8 {
  height: 200px;
}
</style>