<template>
  <div class="border">
    <div class="title">家庭户数分布统计</div>
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
      const percent = [[0.185], [0.296], [0.223], [0.159], [0.078], [0.061]];
      let option = {
        series: [
          {
            type: "liquidFill",
            name: "一人户",
            center: ["20%", "25%"],
            radius: "25%",
            color: ["#00c0ff"],
            data: [0.185],
            label: {
              formatter: function (param) {
                return (
                  param.seriesName + "\n" + (param.value * 100).toFixed(1) + "%"
                );
              },
              color: "#fff",
              fontSize: 10,
            },
            // outline  外边
            outline: {
              borderDistance: -0,
              itemStyle: {
                borderWidth: 5,
                borderColor: "#00C0FF",
                shadowBlur: 10,
                shadowColor: "#fff",
              },
            },
            // 内图 背景色 边
            backgroundStyle: {
              color: "rgba(0,37,83,0.8)",
            },
          },
          {
            type: "liquidFill",
            name: "二人户",
            color: ["#00ffb0"],
            center: ["50%", "25%"],
            data: [0.296],
            radius: "25%",
            label: {
              formatter: function (param) {
                return (
                  param.seriesName + "\n" + (param.value * 100).toFixed(1) + "%"
                );
              },
              color: "#fff",
              fontSize: 10,
            },
            outline: {
              borderDistance: 0,
              itemStyle: {
                borderWidth: 5,
                borderColor: "#00FFB0",
                shadowBlur: 10,
                shadowColor: "#fff",
              },
            },
            backgroundStyle: {
              color: "rgba(0,37,83,0.8)",
            },
          },
          {
            type: "liquidFill",
            name: "三人户",
            // 水球颜色
            color: ["#ffbf11"],
            center: ["80%", "25%"],
            data: percent[2],
            radius: "25%",
            label: {
              formatter: function (param) {
                return (
                  param.seriesName + "\n" + (param.value * 100).toFixed(1) + "%"
                );
              },
              color: "#fff",
              fontSize: 10,
            },
            outline: {
              borderDistance: 0,
              itemStyle: {
                borderWidth: 5,
                borderColor: "#FFBF11",
                shadowBlur: 10,
                shadowColor: "#fff",
              },
            },
            // 内图 背景色 边
            backgroundStyle: {
              color: "rgba(0,37,83,0.8)",
            },
          },
          {
            type: "liquidFill",
            name: "四人户",
            // 水球颜色
            color: ["#e4707d"],
            center: ["20%", "65%"],
            data: percent[3],
            radius: "25%",
            label: {
              formatter: function (param) {
                return (
                  param.seriesName + "\n" + (param.value * 100).toFixed(1) + "%"
                );
              },
              color: "#fff",
              fontSize: 10,
            },
            outline: {
              borderDistance: 0,
              itemStyle: {
                borderWidth: 5,
                borderColor: "#e4707d",
                shadowBlur: 10,
                shadowColor: "#fff",
              },
            },
            // 内图 背景色 边
            backgroundStyle: {
              color: "rgba(0,37,83,0.8)",
            },
          },
          {
            type: "liquidFill",
            name: "五人户",
            // 水球颜色
            color: ["#f07f52"],
            center: ["50%", "65%"],
            data: percent[4],
            radius: "25%",
            label: {
              formatter: function (param) {
                return (
                  param.seriesName + "\n" + (param.value * 100).toFixed(1) + "%"
                );
              },
              color: "#fff",
              fontSize: 10,
            },
            outline: {
              borderDistance: 0,
              itemStyle: {
                borderWidth: 5,
                borderColor: "#f07f52",
                shadowBlur: 10,
                shadowColor: "#fff",
              },
            },
            // 内图 背景色 边
            backgroundStyle: {
              color: "rgba(0,37,83,0.8)",
            },
          },
          {
            type: "liquidFill",
            name: "六人户及其以上",
            // 水球颜色
            color: ["#506cc0"],
            center: ["80%", "65%"],
            data: percent[5],
            radius: "25%",
            label: {
              formatter: function (param) {
                return (
                  param.seriesName + "\n" + (param.value * 100).toFixed(1) + "%"
                );
              },
              color: "#fff",
              fontSize: 10,
            },
            outline: {
              borderDistance: 0,
              itemStyle: {
                borderWidth: 5,
                borderColor: "#506cc0",
                shadowBlur: 10,
                shadowColor: "#fff",
              },
            },
            // 内图 背景色 边
            backgroundStyle: {
              color: "rgba(0,37,83,0.8)",
            },
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
  height: 280px;
}
</style>