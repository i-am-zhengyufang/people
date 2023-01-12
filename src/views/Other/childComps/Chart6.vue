<template>
  <div class="border">
    <div class="title">地区分布</div>
    <div class="chart6"></div>
  </div>
</template>

<script>
export default {
  name: "Chart6",
  props: {},
  components: {},
  data() {
    return {
      res: {},
    };
  },
  mounted() {
    this.res = this.$root.data.res;
    this.echartsInit();
  },
  methods: {
    echartsInit() {
      const year = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
      let option = {
        color: ["#76da91", "#7cd6cf", "#f8cb7f", "#f89588"],
        legend: {},
        tooltip: {},
        dataZoom: [
          {
            showDataShadow: false,
            start: 20,
            end: 40,
            bottom: "5%",
            handleIcon:
              "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
            handleSize: "110%",
            xAxisIndex: [0, 1],
            handleStyle: {
              color: "#d3dee5",
            },
            textStyle: {
              color: "#fff",
            },
            brushSelect: false,
          },
          {
            type: "inside",
            realtime: true,
            start: 20, // dataZoom百分比
            end: 40,
            xAxisIndex: [0, 1],
          },
        ],
        xAxis: {
          type: "category",
          data: year,
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          name: "单位：万",
          nameTextStyle: {
            align: "right",
          },
          type: "value",
          splitLine: {
            show: false,
          },
        },
        grid: {
          left: "3%",
          top: "18%",
          bottom: "15%",
          containLabel: true,
        },
        series: [
          {
            name: "东部",
            type: "bar",
            data: [
              51461, 51818, 52169, 52519, 52951, 53363, 53750, 54164, 56372,
            ],
          },
          {
            name: "中部",
            type: "bar",
            data: [
              35927, 36085, 36262, 36488, 36709, 36900, 37111, 37246, 36469,
            ],
          },
          {
            name: "西部",
            type: "bar",
            data: [
              36428, 36637, 36839, 37131, 37414, 37695, 37956, 38180, 38285,
            ],
          },
          {
            name: "东北",
            type: "bar",
            data: [
              10973, 10976, 10976, 10947, 10910, 10875, 10836, 10794, 9852,
            ],
          },
        ],
      };
      let chart6 = this.$echarts.init(
        document.querySelector(".chart6"),
        "westeros"
      );
      chart6.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.chart6 {
  height: 325px;
}
</style>