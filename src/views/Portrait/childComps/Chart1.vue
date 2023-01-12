<template>
  <div class="border">
    <div class="title">全国性别比</div>
    <div class="chart1"></div>
  </div>
</template>

<script>
export default {
  name: "Chart1",
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
      const year =
        this.res.nationwide_data.statistics_class_list[1].year_list.slice(60);
      const male = this.res.nationwide_data.data_list[1].slice(60); //载入数据
      const female = this.res.nationwide_data.data_list[2].slice(60); //载入数据

      let option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
          trigger: "axis",
        },
        legend: {},
        grid: {
          left: "5%",
          right: "15%",
          top: "10%",
          bottom: "20%",
          containLabel: true,
        },
        dataZoom: {
          xAxisIndex: 0,
          bottom: "10%",
          start: 0,
          end: 50,
          height: 2,
          brushSelect: false,
          handleIcon: "circle",
          handleSize: 10,
          showDataShadow: false,
          textStyle: {
            color: "#fff",
          },
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,

            splitLine: {
              show: false,
            },
            axisTick: {
              show: true,
              interval: 0,
              alignWithLabel: true,
              lineStyle: {
                color: "#fff",
              },
            },
            data: year,
          },
        ],
        yAxis: {
          type: "value",
          scale: true,
          name: "万",
          nameTextStyle: {
            padding: [0, 25, 0, 0],
            color: "#fff",
          },
          axisLine: {
            //y轴线
            show: false,
            lineStyle: {
              color: "rgba(72, 81, 119, .4)",
              width: 1,
            },
          },
          axisTick: {
            show: false, //坐标轴小标记
          },
          splitLine: {
            // show: false,
            lineStyle: {
              color: "rgb(72, 81, 119)", //横向网格线颜色
              width: 1,
              type: "dashed",
            },
          },
        },
        series: [
          {
            name: "男性人口数",
            type: "line",
            smooth: true,
            data: male,
            emphasis: {
              itemStyle: {
                borderWidth: 5,
                borderColor: "#fff",
              },
            },
          },
          {
            name: "女性人口数",
            type: "line",
            smooth: true,
            data: female,
            emphasis: {
              itemStyle: {
                borderWidth: 5,
                borderColor: "#fff",
              },
            },
          },
        ],
      };
      let chart1 = this.$echarts.init(
        document.querySelector(".chart1"),
        "westeros"
      );
      chart1.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.chart1 {
  height: 340px;
}
</style>