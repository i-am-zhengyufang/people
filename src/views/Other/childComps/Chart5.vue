<template>
  <dv-border-box-11 title="受教育人口数">
    <div class="chart5"></div>
  </dv-border-box-11>
</template>

<script>
export default {
  name: "Chart5",
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
      // let year = this.res.area_data.area_years_list.slice(12);
      const year = [2012, 2014, 2015, 2016, 2017, 2018, 2019];

      console.log(this.res.area_data.area_years_list);
      let optionXyMap01 = {
        timeline: {
          axisType: "category",
          autoPlay: true,
          playInterval: 1000,
          symbolSize: 12,
          left: "5%",
          right: "5%",
          bottom: "5%",
          width: "90%",
          data: year,
          tooltip: {
            formatter: year,
          },
        },
        baseOption: {
          tooltip: {
            show: true,
          },
          title: {
            text: "拥有大专学历及以上人口数排名",
            left: "55%",
            top: "60%",
          },
          animationDuration: 0,
          animationDurationUpdate: 1000,
          animationEasing: "linear",
          animationEasingUpdate: "linear",
          grid: {
            left: "15%",
            top: "5%",
            bottom: "20%",
          },
        },
        options: [],
      };
      for (let n = 0; n < year.length; n++) {
        let res = [];
        for (let key of this.res.area_data.area_list) {
          res.push({
            name: key.name,
            value: key.data[13][11 + n],
          });
        }
        res = res.sort(cmp("value")).slice(21);
        function cmp(attr) {
          return function (a, b) {
            a = a[attr];
            b = b[attr];
            return a - b;
          };
        }
        let province = res.map((item) => item.name);
        optionXyMap01.options.push({
          xAxis: {
            type: "value",
            scale: true,
            position: "top",
            boundaryGap: false,
            splitLine: {
              lineStyle: {
                color: ["rgba(255, 255, 255, 0.2)"],
              },
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              margin: 1,
              textStyle: {
                color: "#ddd",
              },
            },
          },
          yAxis: {
            inverse: true,
            type: "category",
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              //   interval: 1,
              textStyle: {
                color: "#ddd",
              },
            },
            animationDuration: 300,
            animationDurationUpdate: 300,
            data: province,
          },
          series: [
            {
              realtimeSort: true,
              seriesLayoutBy: "column",

              type: "bar",
              barWidth: "35%",
              label: {
                normal: {
                  color: "#fff",
                  show: true,
                  fontSize: 10,
                  position: "right",
                  precision: 1,
                  valueAnimation: true,
                },
              },
              itemStyle: {
                color: "#6daf53",
              },
              data: res,
            },
          ],
        });
      }

      let chart5 = this.$echarts.init(
        document.querySelector(".chart5"),
        "westeros"
      );
      chart5.setOption(optionXyMap01);
      console.log("呜呜呜");
    },
  },
};
</script>

<style lang="scss" scoped>
.dv-border-box-11 {
  height: 480px;
  padding-top: 50px;
  margin-bottom: 20px;
}
.chart5 {
  height: 100%;
}
</style>