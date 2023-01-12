<template>
  <div class="content">
    <div class="left">
      <div class="analysis-text">
        （三）性别结构进一步趋于平衡，但出生性别比依然偏高
      </div>
      <div class="title">人口总数和自然增长率</div>
      <div class="chart7"></div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "Five",
  props: {},
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.echartsInit();
  },
  methods: {
    echartsInit() {
      const year = [1953, 1964, 1982, 1990, 2000, 2010, 2020];
      let option = {
        color: ["#d77537", "#00f15a"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        legend: {},
        xAxis: [
          {
            type: "category",
            data: year,
            axisPointer: {
              type: "shadow",
            },
            splitLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false,
            },
            name: "万",
          },
          {
            type: "value",
            min: 90,
            max: 120,
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "男性比女性多出人数",
            type: "bar",
            barWidth: 30,
            data: [2090, 1846, 3069, 3706, 4127, 3398, 3490],
            itemStyle: {
              color: "#87cefa",
            },
          },
          {
            name: "出生性别比",
            type: "line",
            symbol: "none",
            yAxisIndex: 1,
            markLine: {
              label: {
                color: "#fff",
              },
              data: [
                {
                  yAxis: 103,
                  lineStyle: {
                    color: "#ed3f35",
                  },
                },
                {
                  yAxis: 107,
                  lineStyle: {
                    color: "#ed3f35",
                  },
                },
              ],
            },
            data: [105.6, 105.5, 108.5, 110.3, 118.6, 118.1, 111.3],
          },
          {
            name: "总人口性别比",
            type: "line",
            symbol: "none",
            yAxisIndex: 1,
            data: [107.56, 105.46, 106.3, 106.6, 106.74, 105.2, 105.07],
          },
        ],
      };
      let chart7 = this.$echarts.init(
        document.querySelector(".chart7"),
        "westeros"
      );
      chart7.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-around;
  .left {
    .chart7 {
      height: 500px;
      width: 650px;
    }
  }
  .right {
    width: 550px;
  }
}
</style>