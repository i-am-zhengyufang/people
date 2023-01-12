<template>
  <div class="border">
    <div class="title">年龄分布统计</div>
    <div class="chart3"></div>
  </div>
</template>

<script>
// import { res } from "@/data";
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
      let sportsIcon = {
        c: "data:image/png;base64,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",
        b: "data:image/png;base64,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",
        a: "data:image/png;base64,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",
      };
      let year = this.res.nationwide_data.statistics_class_list[6].year_list;
      let totalOption = {
        baseOption: {
          tooltip: {
            trigger: "item",
          },

          legend: {
            orient: "horizontal",
            icon: "circle",
            x: "right",
            textStyle: {
              color: "#fff",
            },
            data: ["6-14岁", "14-65岁", "65岁以上"],
          },
        },
        timeline: {
          orient: "vertical",
          autoPlay: true,
          left: "1%",
          top: "1%",
          bottom: "1%",
          axisType: "category",
          data: year,
          label: {
            position: 15,
          },
        },
        options: [],
      };

      for (let i = 0; i < year.length; i++) {
        totalOption.options.push({
          series: [
            {
              type: "pie",
              radius: ["60%", "70%"],
              center: ["50%", "50%"],
              color: ["#0E7CE2", "#FF8352", "#E271DE"],
              data: [
                {
                  value: this.res.nationwide_data.data_list[6][i],
                  name: "6-14岁",
                },
                {
                  value: this.res.nationwide_data.data_list[7][i],
                  name: "14-65岁",
                },
                {
                  value: this.res.nationwide_data.data_list[8][i],
                  name: "65岁以上",
                },
              ],

              emphasis: {
                label: {
                  show: true,
                },
              },
              labelLine: {
                normal: {
                  show: true,
                  length: 20,
                  length2: 20,
                  lineStyle: {
                    color: "#12EABE",
                    width: 2,
                  },
                },
              },
              label: {
                normal: {
                  formatter: function (params) {
                    let str = "";
                    switch (params.name) {
                      case "6-14岁":
                        str = "{a|}" + "{rate|\n" + params.percent + "%}";
                        break;
                      case "14-65岁":
                        str = "{b|}" + "{rate|\n" + params.percent + "%}";
                        break;
                      case "65岁以上":
                        str = "{c|}" + "{rate|\n" + params.percent + "%}";
                        break;
                    }
                    return str;
                  },
                  // position: "inside",
                  rich: {
                    a: {
                      width: 50,
                      height: 40,
                      lineHeight: 40,
                      backgroundColor: {
                        image: sportsIcon.a,
                      },
                    },
                    b: {
                      width: 50,
                      height: 40,
                      lineHeight: 40,
                      backgroundColor: {
                        image: sportsIcon.b,
                      },
                    },
                    c: {
                      width: 50,
                      height: 40,
                      lineHeight: 40,
                      backgroundColor: {
                        image: sportsIcon.c,
                      },
                    },

                    rate: {
                      fontSize: 15,
                      color: "#FFF",
                    },
                  },
                },
              },
            },
          ],
        });
      }
      let chart3 = this.$echarts.init(
        document.querySelector(".chart3"),
        "westeros"
      );
      chart3.setOption(totalOption);
    },
  },
};
</script>

<style lang="scss" scoped>
.chart3 {
  height: 255px;
}
</style>
