<template>
  <div class="border">
    <div class="title">受教育程度</div>
    <div class="chart6"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
  computed: {
    ...mapState(["clickId"]),
  },
  watch: {
    clickId(value1, value2) {
      this.echartsInit();
    },
  },
  methods: {
    echartsInit() {
      const names = ["未上过学", "小学", "初中", "高中", "大专及以上"];
      const value = this.res.area_data.area_list[this.clickId].data;
      const year = this.res.area_data.area_years_list;
      let totalOption = {
        color: ["#ff9f7f", "#ed8884", "#9fe6b8", "#0096ff", "#32c5e9"],
        title: {
          text: "单位：万",
          left: "center",
          top: 0,
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "item",
        },
        timeline: {
          orient: "vertical",
          autoPlay: true,
          left: "0%",
          top: "2%",
          bottom: "1%",
          axisType: "category",
          symbolSize: 4,
          interval: 1,
          data: year,
          label: {
            position: 5,
          },
        },
        options: [],
      };
      for (let i = 0; i < year.length; i++) {
        totalOption.options.push({
          series: [
            {
              name: "受教育程度",
              type: "pie",
              radius: "55%",
              center: ["60%", "50%"],
              data: [
                { value: value[9][i], name: names[0] },
                { value: value[10][i], name: names[1] },
                { value: value[11][i], name: names[2] },
                { value: value[12][i], name: names[3] },
                { value: value[13][i], name: names[4] },
              ].sort(function (a, b) {
                return a.value - b.value;
              }),
              roseType: "radius",
              label: {
                color: "#fff",
              },
              labelLine: {
                lineStyle: {
                  color: "#fff",
                },
                smooth: 0.2,
                length: 1,
                length2: 3,
              },

              animationType: "scale",
              animationEasing: "elasticOut",
              animationDelay: function (idx) {
                return Math.random() * 200;
              },
            },
          ],
        });
      }

      let chart6 = this.$echarts.init(
        document.querySelector(".chart6"),
        "westeros"
      );
      chart6.setOption(totalOption, true);
    },
  },
};
</script>

<style lang="scss" scoped>
.chart6 {
  height: 365px;
}
</style>