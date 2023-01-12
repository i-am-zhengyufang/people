<template>
  <div class="border">
    <div class="title">抚养比统计</div>
    <div class="chart4"></div>
  </div>
</template>

<script>
export default {
  name: "Chart4",
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
      const year = this.res.nationwide_data.statistics_class_list[16].year_list;
      let option = {
        animationDuration: 10000,
        tooltip: {
          show: true,
          trigger: "axis",
        },
        grid: {
          left: "15%",
          right: "15%",
          top: "5%",
          bottom: "15%",
        },
        xAxis: {
          type: "category",
          name: "年份",
          data: year,
          splitLine: {
            show: false,
          },
          axisTick: {
            show: true,
            alignWithLabel: true,
            lineStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: {
          axisLabel: {
            formatter: "{value}%",
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: "总抚养比",
            type: "line",
            symbol: "circle",
            symbolSize: 12,
            smooth: false,
            emphasis: {
              focus: "series",
            },
            lineStyle: {
              type: "dotted",
              shadowBlur: 3,
              shadowColor: "rgba(3, 107, 200,.5)",
              shadowOffsetY: 8,
            },
            itemStyle: {
              color: "rgb(3, 107, 200)",
            },
            endLabel: {
              show: true,
              color: "#fff",
              formatter: function (params) {
                return params.value + "%";
              },
            },
            data: this.res.nationwide_data.data_list[16],
          },
          {
            name: "少儿抚养比",
            type: "line",
            symbol: "circle",
            symbolSize: 12,
            smooth: false,
            emphasis: {
              focus: "series",
            },
            lineStyle: {
              type: "dotted",
              shadowBlur: 3,
              shadowColor: "rgba(22, 238, 142,.5)",
              shadowOffsetY: 8,
            },
            itemStyle: {
              color: "rgb(22, 238, 142)",
            },
            endLabel: {
              show: true,
              color: "#fff",
              formatter: function (params) {
                return params.value + "%";
              },
            },
            data: this.res.nationwide_data.data_list[17],
          },
          {
            name: "老年抚养比",
            type: "line",
            symbol: "circle",
            symbolSize: 12,
            smooth: false,
            emphasis: {
              focus: "series",
            },
            lineStyle: {
              type: "dotted",
              shadowBlur: 3,
              shadowColor: "rgba(251, 99, 96,.5)",
              shadowOffsetY: 8,
            },
            itemStyle: {
              color: "rgb(251, 99, 96)",
            },
            endLabel: {
              show: true,
              color: "#fff",
              formatter: function (params) {
                return params.value + "%";
              },
            },
            data: this.res.nationwide_data.data_list[18],
          },
        ],
      };
      let chart4 = this.$echarts.init(
        document.querySelector(".chart4"),
        "westeros"
      );
      chart4.setOption(option);
    },
  },
};
</script>
<style lang="scss" scoped>
.chart4 {
  height: 300px;
}
</style>
