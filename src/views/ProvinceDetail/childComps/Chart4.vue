<template>
  <div class="border">
    <div class="title">年末总人口</div>
    <div class="chart4"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Chart4",
  props: {},
  components: {},
  data() {
    return {
      res: {},
    };
  },
  computed: {
    ...mapState(["clickId"]),
  },
  watch: {
    clickId(value1, value2) {
      this.echartsInit();
    },
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
          data: this.res.area_data.area_years_list,
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
          left: "15%",
          right: "5%",
          top: "20%",
          bottom: "35%",
        },
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 20,
            end: 80,
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
            data: this.res.area_data.area_list[this.clickId].data[0],
            type: "bar",
            smooth: true,
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
  height: 175px;
}
</style>