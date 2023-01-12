<template>
  <div class="border">
    <div class="title">汉族比重</div>
    <ul class="option-list">
      <li
        v-for="(item, index) in year"
        :key="index"
        :class="{ active: currentIndex == index }"
      >
        {{ item }}
      </li>
    </ul>
    <div class="chart5"></div>
  </div>
</template>

<script>
export default {
  name: "Chart5",
  props: {},
  components: {},
  data() {
    return {
      currentIndex: 0,
      year: [2000, 2010, 2020],
      res: {},
    };
  },
  mounted() {
    this.res = this.$root.data.res;
    this.echartsInit();
  },
  methods: {
    echartsInit() {
      let dataArr = 91.6;
      const color = "#468EFD";
      let option = {
        tooltip: {
          // formatter: "{a}  {c}%",
        },
        series: [
          {
            name: "汉族比重",
            type: "gauge",
            radius: "40%",
            splitNumber: 10,
            axisLine: {
              lineStyle: {
                color: [
                  [dataArr / 100, color],
                  [1, "#111F42"],
                ],
                width: 8,
              },
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            itemStyle: {
              show: false,
            },
            detail: {
              formatter: function (value) {
                return value.toFixed(1) + "%";
              },
              offsetCenter: [0, 82],
              textStyle: {
                padding: [0, 0, 0, 0],
                fontSize: 18,
                fontWeight: "700",
                color: color,
              },
            },
            title: {
              show: false,
            },
            data: [
              {
                value: dataArr,
              },
            ],
            pointer: {
              show: true,
              length: "75%",
              radius: "20%",
              width: 5, //指针粗细
            },
            animationDuration: 6000,
          },
          {
            name: "外部刻度",
            type: "gauge",
            //  center: ['20%', '50%'],
            radius: "70%",
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: [[1, "rgba(0,0,0,0)"]],
              },
            }, //仪表盘轴线
            axisLabel: {
              show: true,
              color: "#4d5bd1",
              distance: 25,
            }, //刻度标签。
            axisTick: {
              show: true,
              splitNumber: 7,
              lineStyle: {
                color: color, //用颜色渐变函数不起作用
                width: 1,
              },
              length: -8,
            }, //刻度样式
            splitLine: {
              show: true,
              length: -20,
              lineStyle: {
                color: color, //用颜色渐变函数不起作用
              },
            }, //分隔线样式
            detail: {
              show: false,
            },
            pointer: {
              show: false,
            },
          },
        ],
      };

      // let option = {
      //   tooltip: {
      //     trigger: "item",
      //     formatter: (params) => {
      //       return params.data.name + "：" + params.data.value.toFixed(1) + "%";
      //     },
      //   },
      //   series: {
      //     type: "pie",
      //     radius: ["20%", "40%"],
      //     label: {
      //       color: "#fff",
      //     },
      //     data: [
      //       {
      //         value: this.res.nationwide_data.data_list[15][0],
      //         name: "汉族比重",
      //       },
      //       {
      //         value: 100 - this.res.nationwide_data.data_list[15][0],
      //         name: "少数民族比重",
      //       },
      //     ],
      //   },
      // };
      let chart5 = this.$echarts.init(
        document.querySelector(".chart5"),
        "westeros"
      );
      chart5.setOption(option);
      let timer;
      let that = this;
      function playTime() {
        if (timer) clearInterval(timer);
        timer = setInterval(function () {
          that.currentIndex++;
          if (that.currentIndex == 3) that.currentIndex = 0;
          option.series[0].data[0].value =
            that.res.nationwide_data.data_list[15][that.currentIndex];
          option.series[0].axisLine.lineStyle.color = [
            [dataArr / 100, color],
            [1, "#111F42"],
          ];
          chart5.setOption(option);
        }, 7000);
      }
      playTime();
    },
  },
};
</script>

<style lang="scss" scoped>
.border {
  .option-list {
    padding-left: 20px;
    li {
      float: left;
      color: #4c9bfd;
      padding: 0 15px;
      &.active {
        color: #fff;
        background-color: #4c9bfd;
      }
    }
  }
  .chart5 {
    height: 280px;
  }
}
</style>