<template>
  <div class="border">
    <!-- <dv-border-box-1> </dv-border-box-1> -->
    <div class="title">比率统计</div>
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
      const year = this.res.nationwide_data.statistics_class_list[0].year_list;
      let option = {
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
        legend: {
          data: ["出生率", "死亡率", "自然增长率"],
          left: "2%",
        },
        xAxis: {
          splitLine: {
            show: false,
          },
          type: "category",
          data: year,
          name: "年份",
        },
        yAxis: {
          name: "%",
          nameTextStyle: {
            // 调整到右侧距离
            padding: [0, 25, 0, 0],
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
          left: "15%",
          right: "5%",
          top: "25%",
          bottom: "35%",
        },
        dataZoom: [
          {
            showDataShadow: false,
            height: 20,
            start: 20,
            end: 40,
            bottom: "10%",
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
            name: "出生率",
            data: this.res.nationwide_data.data_list[3],
            type: "line",
            symbolSize: 2,
            lineStyle: {
              width: 1,
            },
            itemStyle: {
              color: "#4194fc",
              emphasis: {
                color: "#4194fc", //hover拐点颜色定义,因此会出现hover拐点填充的样子
              },
            },
          },
          {
            name: "死亡率",
            data: this.res.nationwide_data.data_list[4],
            type: "line",
            smooth: true,
            symbolSize: 2,
            lineStyle: {
              width: 1,
            },
            itemStyle: {
              color: "#3bbc86",
              emphasis: {
                color: "#3bbc86",
              },
            },
          },
          {
            name: "自然增长率",
            data: this.res.nationwide_data.data_list[5],
            type: "line",
            smooth: true,
            symbolSize: 2,
            lineStyle: {
              width: 1,
            },
            itemStyle: {
              color: "#e86a98",
              emphasis: {
                color: "#e86a98",
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
      let index = 0; //播放所在下标
      setInterval(function () {
        chart1.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: index,
        });
        index++;
        if (index == year.length) {
          index = 0;
        }
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.chart1 {
  height: 280px;
}
</style>