<template>
  <div class="border">
    <div class="title">各种率</div>
    <div class="chart3"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Chart3",
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
    this.res = this.$root.data.res;
    this.echartsInit();
  },
  watch: {
    clickId(value1, value2) {
      this.echartsInit();
    },
  },
  methods: {
    echartsInit() {
      let year = this.res.area_data.area_years_list;
      year.pop();
      let data1 = this.res.area_data.area_list[this.clickId].data[1];
      let data2 = this.res.area_data.area_list[this.clickId].data[2];
      let data3 = this.res.area_data.area_list[this.clickId].data[3];
      data1.pop();
      data2.pop();
      data3.pop();
      const color = ["#4194fc", "#3bbc86", "#e86a98"];
      let option = {
        grid: {
          right: "5%",
          top: "18%",
          bottom: "20%",
        },
        legend: {
          show: true,
          textStyle: {
            color: "#fff",
          },
          data: ["出生率", "死亡率", "自然增长率"],
        },
        tooltip: {
          trigger: "axis", // hover触发器
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
          // formatter: "{b0}: {c0}<br />{b1}: {c1}",
        },
        xAxis: {
          splitLine: {
            show: false,
          },
          axisTick: { show: false },
          axisLabel: {
            color: "#fff",
          },
          type: "category",
          data: year,
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          type: "value",
          gridIndex: 0,
          nameTextStyle: {
            align: "center",
          },
          axisLabel: {
            color: "#fff",
            formatter: "{value}%",
          },
        },
        series: [
          {
            name: "出生率",
            data: data1,
            type: "line",
            symbolSize: 8,
            symbol: "circle",
            itemStyle: {
              color: color[0],
              emphasis: {
                borderColor: color[0],
                borderWidth: 4,
              },
            },
          },
          {
            name: "死亡率",
            data: data2,
            type: "line",
            symbolSize: 8,
            symbol: "circle",
            itemStyle: {
              color: color[1],
              emphasis: {
                borderColor: color[1],
                borderWidth: 4,
              },
            },
          },
          {
            name: "自然增长率",
            data: data3,
            type: "line",
            symbolSize: 8,
            symbol: "circle",
            itemStyle: {
              color: color[2],
              emphasis: {
                borderColor: color[2],
                borderWidth: 4,
              },
            },
          },
        ],
      };
      let chart3 = this.$echarts.init(document.querySelector(".chart3"));
      chart3.setOption(option, true);
    },
  },
};
</script>

<style lang="scss" scoped>
.border {
  color: #fff;
}
.chart3 {
  height: 280px;
}
</style>