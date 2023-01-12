<template>
  <dv-border-box-11 title="各省性别比">
    <div class="chart2"></div>
  </dv-border-box-11>
</template>

<script>
// import { res, geoJson } from "@/data";
import { handleRoam } from "@/utils/business";
export default {
  name: "Chart2",
  props: {},
  components: {},
  data() {
    return {
      res: {},
      geoJson: {},
    };
  },
  async mounted() {
    this.res = this.$root.data.res;
    this.geoJson = this.$root.data.geoJson;
    this.echartsInit();
  },
  methods: {
    echartsInit() {
      const year = [2013, 2014, 2015, 2016, 2017, 2018, 2019];
      const color = ["#759aa0", "#73b9bc", "#8dc1a9", "#e69d87"];
      let optionXyMap01 = {
        timeline: {
          axisType: "category",
          autoPlay: true,
          playInterval: 2000,
          symbolSize: 12,
          left: "5%",
          right: "5%",
          bottom: "0%",
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
          visualMap: {
            type: "piecewise",
            pieces: [
              {
                min: 110,
                color: color[0],
              },
              {
                min: 106,
                max: 110,
                color: color[1],
              },
              {
                min: 102,
                max: 106,
                color: color[2],
              },
              {
                max: 102,
                color: color[3],
              },
            ],
            orient: "vertical",
            itemWidth: 10,
            itemHeight: 10,
            showLabel: true,
            seriesIndex: [0],
            textStyle: {
              color: "#7B93A7",
              fontSize: 10,
            },
            bottom: "15%",
            left: "5%",
          },
          grid: {
            left: "70%",
            top: "5%",
            bottom: "20%",
          },
          geo: {
            show: true,
            map: "china",
            roam: true,
            layoutSize: "80%",
            aspectScale: 0.75,
            layoutCenter: ["30%", "51.5%"],
            itemStyle: {
              normal: {
                borderColor: "rgba(147, 235, 248, 1)",
                borderWidth: 2,
                areaColor: {
                  type: "radial",
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                },
                shadowColor: "rgba(128, 217, 248, 1)",
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowBlur: 10,
              },
              emphasis: {
                areaColor: "rgba(147, 235, 248, 0)",
                label: {
                  show: true,
                  color: "#fff",
                },
              },
            },
          },
        },
        animationDurationUpdate: 3000,
        animationEasingUpdate: "quinticInOut",
        options: [],
      };
      for (let n = 0; n < year.length; n++) {
        let res = [];
        for (let key of this.res.area_data.area_list) {
          res.push({
            name: key.name,
            value: key.data[14][12 + n],
          });
        }
        res.sort(cmp("value"));
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
              show: false,
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
              interval: 1,
              textStyle: {
                color: "#ddd",
              },
            },
            data: province,
          },
          series: [
            {
              name: "男女比",
              type: "map",
              map: "china",
              layoutCenter: ["30%", "50%"], //地图位置
              layoutSize: "80%",
              roam: true,
              select: {
                disabled: true,
              },
              itemStyle: {
                normal: {
                  borderColor: "rgba(147, 235, 248, 0.6)",
                  borderWidth: 0.8,
                  areaColor: {
                    type: "linear-gradient",
                    x: 0,
                    y: 1200,
                    x2: 1000,
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0,
                        color: "#009DA1", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#005B9E", // 50% 处的颜色
                      },
                    ],
                    global: true, // 缺省为 false
                  },
                },
                emphasis: {
                  areaColor: "rgba(147, 235, 248, 0)",
                  label: {
                    show: true,
                    // 鼠标放上去的时候出现省份，且名字为白色
                    color: "#fff",
                  },
                },
              },
              zlevel: 1,
              data: res,
            },
            {
              type: "bar",
              barWidth: "35%",
              label: {
                normal: {
                  color: "#fff",
                  show: true,
                  fontSize: 10,
                  position: "right",
                  interval: 1,
                  formatter: function (params) {
                    return params.data.value.toFixed(2);
                  },
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

      let chart2 = this.$echarts.init(
        document.querySelector(".chart2"),
        "westeros"
      );
      this.$echarts.registerMap("china", this.geoJson);

      chart2.setOption(optionXyMap01);
      handleRoam(chart2);
    },
  },
};
</script>

<style lang="scss" scoped>
.dv-border-box-11 {
  height: 460px;
  padding-top: 70px;
  margin-bottom: 20px;
}
.chart2 {
  height: 100%;
}
</style>