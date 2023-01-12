<template>
  <div class="border">
    <div class="title">年末总人口</div>
    <div class="chart3"></div>
  </div>
</template>

<script>
export default {
  name: "Chart3",
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
      let option = {
        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#00fffb" }, // 0 起始颜色
          { offset: 1, color: "#0061ce" }, // 1 结束颜色
        ]),
        animationDuration: 5000,
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            let str = params[0].name + "</br>";
            //   item.marker就是显示那个颜色的小圆
            params.forEach((item) => {
              str +=
                item.marker + item.seriesName + " : " + item.value + "</br>";
            });
            return str;
          },
        },
        xAxis: {
          splitLine: {
            show: false,
          },
          type: "category",
          data: this.res.nationwide_data.statistics_class_list[0].year_list,
          name: "年份",
        },
        yAxis: {
          name: "万",
          nameTextStyle: {
            padding: [0, 20, 0, 0],
          },
          axisLine: {
            show: false,
          },
          type: "value",
          splitLine: {
            show: false,
          },
        },
        grid: {
          left: "10%",
          right: "10%",
          top: "20%",
          bottom: "35%",
        },
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 20,
            end: 40,
            bottom: "10%",
            height: 20,
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
        series: [
          {
            name: "年末总人口",
            data: this.res.nationwide_data.data_list[0],
            type: "bar",
            smooth: true,
          },
        ],
      };
      let chart3 = this.$echarts.init(
        document.querySelector(".chart3"),
        "westeros"
      );
      chart3.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.chart3 {
  height: 175px;
}
</style>