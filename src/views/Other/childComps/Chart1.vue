<template>
  <div class="border">
    <div class="title">城市农村人口</div>
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
      let option = {
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            let str =
              params[0].marker +
              params[0].seriesName +
              "：" +
              params[0].value +
              "</br>" +
              params[1].marker +
              params[1].seriesName +
              "：" +
              params[1].value;
            clearInterval(timer);
            return str;
          },
          axisPointer: {
            type: "cross",
            textStyle: {
              color: "#fff",
            },
          },
        },
        grid: {
          top: "20%",
          bottom: "10%",
          left: "1%",
          right: "10%",
          containLabel: true,
          textStyle: {
            color: "#fff",
          },
        },
        legend: {
          x: "26%",
          icon: "roundRect",
          top: "11%",
          textStyle: {
            color: "#90979c",
          },
          data: ["城市人口", "农村人口"],
        },

        calculable: true,
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "rgba(204,187,225,0.5)",
            },
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          boundaryGap: false, //让数据挨着y轴
          data: this.res.nationwide_data.statistics_class_list[13].year_list,
        },
        yAxis: [
          {
            name: "万人",
            type: "value",
            scale: true,
            nameTextStyle: {
              align: "right",
            },
            splitLine: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(204,187,225,0.5)",
              },
            },
          },
        ],
        dataZoom: [
          {
            type: "slider",
            show: false,
            realtime: true,
            startValue: 0,
            endValue: 4,
          },
        ],
        series: [
          {
            name: "城市人口",
            type: "line",

            symbolSize: 6,
            symbol: "circle",
            itemStyle: {
              color: "#ffff00",
            },
            data: this.res.nationwide_data.data_list[13],
          },
          {
            name: "农村人口",
            type: "line",

            symbolSize: 6,
            symbol: "circle",
            itemStyle: {
              color: "#00b1ff",
            },
            data: this.res.nationwide_data.data_list[14],
          },
        ],
      };
      let a = 1;
      let chart1 = this.$echarts.init(
        document.querySelector(".chart1"),
        "westeros"
      );
      chart1.setOption(option);
      let timer;
      let that = this;
      function playTime() {
        if (timer) clearInterval(timer);
        timer = setInterval(function () {
          if (
            a ==
            that.res.nationwide_data.statistics_class_list[13].year_list
              .length -
              4
          ) {
            a = 0;
          }
          chart1.dispatchAction({
            type: "dataZoom",
            startValue: a,
            endValue: a + 4,
          });
          a++;
        }, 2000);
      }
      playTime();
      chart1.on("globalout", function (params) {
        playTime();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.chart1 {
  height: 300px;
}
</style>