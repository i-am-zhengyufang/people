<template>
  <div class="border">
    <div class="title">家庭户/集体户</div>
    <div class="chart4"></div>
  </div>
</template>

<script>
export default {
  name: "Chart4",
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
      let year = this.res.nationwide_data.statistics_class_list[22].year_list;
      let data1 = this.res.nationwide_data.data_list[22];
      let data2 = this.res.nationwide_data.data_list[23];
      let optionXyMap01 = {
        timeline: {
          data: year,
          axisType: "category",
          autoPlay: true,
          show: false,
        },
        baseOption: {
          tooltip: {
            show: true,
            trigger: "item",
            formatter: (params) => {
              return (
                params.marker +
                params.name +
                "：" +
                parseInt(params.value) +
                "%"
              );
            },
          },
          legend: {},
        },
        options: [],
      };
      for (let n = 0; n < year.length; n++) {
        optionXyMap01.options.push({
          title: {
            text: year[n] + "年",
            textStyle: {
              color: "#fff",
            },
          },
          series: [
            {
              center: ["50%", "50%"],
              radius: ["40%", "50%"],
              type: "pie",
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    textStyle: {
                      color: "#fff",
                    },
                    formatter: function (params) {
                      return parseInt(params.value) + "%";
                    },
                    position: "center",
                  },
                  labelLine: {
                    show: false,
                  },
                },
              },
              data: [
                {
                  name: "家庭户",
                  value: (data1[n] * 100) / (data1[n] + data2[n]),
                  itemStyle: {
                    color: "#ee3a3a",
                  },
                  emphasis: {
                    disabled: true,
                  },
                },
                {
                  name: "集体户",
                  value: (data2[n] * 100) / (data1[n] + data2[n]),
                  itemStyle: {
                    color: "#fff",
                    borderWidth: 4,
                    borderColor: "#fff",
                  },
                  emphasis: {
                    disabled: true,
                  },
                },
              ],
            },
          ],
        });
      }
      let chart4 = this.$echarts.init(
        document.querySelector(".chart4"),
        "westeros"
      );
      chart4.setOption(optionXyMap01);
    },
  },
};
</script>

<style lang="scss" scoped>
.chart4 {
  height: 280px;
}
</style>