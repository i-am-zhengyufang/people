<template>
  <dv-border-box-11 title="年末各省总人口">
    <div class="chart2"></div>
  </dv-border-box-11>
</template>

<script>
import { handleRoam } from "@/utils/business";
export default {
  name: "Chart2",
  components: {},
  data() {
    return {
      res: {},
    };
  },
  async mounted() {
    this.res = this.$root.data.res;
    this.geoJson = this.$root.data.geoJson;
    this.getRes();
  },
  methods: {
    getRes() {
      const geoCoordMap = {
        广东省: [113.12244, 23.009505],
        山东省: [117.1582, 36.8701],
        河南省: [113.4668, 34.6234],
        江苏省: [118.8062, 31.9208],
        四川省: [103.9526, 30.7617],
        河北省: [114.4995, 38.1006],
        湖南省: [113.0823, 28.2568],
        浙江省: [119.5313, 29.8773],
        安徽省: [117.29, 32.0581],
        湖北省: [114.3896, 30.6628],
        广西壮族自治区: [108.479, 23.1152],
        云南省: [102.9199, 25.4663],
        江西省: [116.0046, 28.6633],
        辽宁省: [123.1238, 42.1216],
        贵州省: [106.6992, 26.7682],
        陕西省: [109.1162, 34.2004],
        福建省: [119.4543, 25.9222],
        山西省: [112.3352, 37.9413],
        黑龙江省: [127.9688, 45.368],
        重庆市: [108.384366, 30.439702],
        新疆维吾尔自治区: [87.9236, 43.5883],
        甘肃省: [103.5901, 36.3043],
        上海市: [121.4648, 31.2891],
        吉林省: [125.8154, 44.2584],
        内蒙古自治区: [110.3467, 41.4899],
        北京市: [116.4551, 40.2539],
        天津省: [117.4219, 39.4189],
        海南省: [110.3893, 19.8516],
        宁夏回族自治区: [106.3586, 38.1775],
        青海省: [101.4038, 36.8207],
        西藏自治区: [91.11, 29.97],
        台湾: [121.5135, 25.0308],
      };

      const colors = [
        [
          "#1DE9B6",
          "#F46E36",
          "#04B9FF",
          "#5DBD32",
          "#FFC809",
          "#FB95D5",
          "#BDA29A",
          "#6E7074",
          "#546570",
          "#C4CCD3",
        ],
        [
          "#37A2DA",
          "#67E0E3",
          "#32C5E9",
          "#9FE6B8",
          "#FFDB5C",
          "#FF9F7F",
          "#FB7293",
          "#E062AE",
          "#E690D1",
          "#E7BCF3",
          "#9D96F5",
          "#8378EA",
          "#8378EA",
        ],
        [
          "#DD6B66",
          "#759AA0",
          "#E69D87",
          "#8DC1A9",
          "#EA7E53",
          "#EEDD78",
          "#73A373",
          "#73B9BC",
          "#7289AB",
          "#91CA8C",
          "#F49F42",
        ],
      ];
      let colorIndex = 0;
      const year = ["2016", "2017", "2018", "2019", "2020"];
      let mapData = [[], [], [], [], [], []];

      /*柱子Y名称*/
      let categoryData = [];
      let barData = [];
      for (let key of this.res.area_data.area_list) {
        mapData[0].push({
          year: "2016",
          name: key.name,
          value: key.data[0][15],
        }),
          mapData[1].push({
            year: "2017",
            name: key.name,
            value: key.data[0][16],
          }),
          mapData[2].push({
            year: "2018",
            name: key.name,
            value: key.data[0][17],
          }),
          mapData[3].push({
            year: "2019",
            name: key.name,
            value: key.data[0][18],
          }),
          mapData[4].push({
            year: "2020",
            name: key.name,
            value: key.data[0][19],
          });
      }
      categoryData = mapData[0].map((item) => item.name);
      for (var i = 0; i < mapData.length; i++) {
        barData.push([]);
        for (var j = 0; j < mapData[i].length; j++) {
          barData[i].push(mapData[i][j].value);
        }
      }
      let convertData = function (data) {
        let res = [];
        for (let i = 0; i < data.length; i++) {
          let geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
            });
          }
        }
        return res;
      };

      let optionXyMap01 = {
        timeline: {
          data: year,
          axisType: "category",
          autoPlay: true,
          playInterval: 3000,
          left: "25%",
          right: "15%",
          bottom: "2%",
          // width: "70%",
          label: {
            normal: {
              textStyle: {
                color: "#fff",
              },
            },
          },
          symbolSize: 10,
          lineStyle: {
            color: "#555",
          },
          checkpointStyle: {
            borderColor: "#d4e1fc",
            borderWidth: 2,
          },
          controlStyle: {
            showNextBtn: true,
            showPrevBtn: true,
            normal: {
              color: "#666",
              borderColor: "#666",
            },
            emphasis: {
              color: "#aaa",
              borderColor: "#aaa",
            },
          },
        },
        baseOption: {
          animation: true,
          animationDuration: 1000,
          animationEasing: "cubicInOut",
          animationDurationUpdate: 1000,
          animationEasingUpdate: "cubicInOut",
          grid: {
            right: "0%",
            top: "10%",
            bottom: "20%",
            width: "20%",
          },
          tooltip: {
            trigger: "axis", // hover触发器
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          geo: {
            show: true,
            map: "china",
            roam: true,
            layoutSize: "100%",
            aspectScale: 0.75,
            layoutCenter: ["35%", "60%"],
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

        options: [],
      };
      for (let n = 0; n < year.length; n++) {
        optionXyMap01.options.push({
          // backgroundColor: "#333333",
          visualMap: {
            show: true,
            min: 1000,
            max: 15000,
            itemHeight: 80,
            left: "5%",
            top: "65%",
            text: ["高", "低"],
            textStyle: {
              color: "#fff",
            },
            calculable: true,
            seriesIndex: [2],
            inRange: {
              color: ["#fff", colors[colorIndex][n]], // 蓝绿
            },
          },
          title: [
            {
              id: "statistic",
              text: year[n] + "(单位：万)",
              left: "70%",
              top: "0%",
              textStyle: {
                color: "#fff",
                fontSize: 20,
              },
            },
          ],
          xAxis: {
            show: false,
          },
          yAxis: {
            type: "category",
            axisLine: {
              show: true,
              lineStyle: {
                color: "#ddd",
              },
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: "#ddd",
              },
            },
            axisLabel: {
              interval: 1,
              textStyle: {
                color: "#ddd",
              },
            },
            data: categoryData,
          },
          series: [
            //表层地图
            {
              type: "map",
              map: "china",
              tooltip: {
                show: false,
              },
              layoutCenter: ["35%", "61.5%"], //地图位置
              layoutSize: "100%",
              roam: true,
              select: {
                disabled: true,
              },
              itemStyle: {
                normal: {
                  borderColor: "rgba(147, 235, 248, 0.6)",
                  borderWidth: 0.8,
                  areaColor: "#142957",
                  // areaColor: {
                  // type: "linear-gradient",
                  // x: 0,
                  // y: 1200,
                  // x2: 1000,
                  // y2: 0,
                  // color: "#142957",
                  // colorStops: [
                  //   {
                  //     offset: 0,
                  //     color: "#009DA1", // 0% 处的颜色
                  //   },
                  //   {
                  //     offset: 1,
                  //     color: "#005B9E", // 50% 处的颜色
                  //   },
                  // ],
                  // global: true, // 缺省为 false
                  // },
                },
                emphasis: {
                  // areaColor: "rgba(147, 235, 248, 0)",
                  areaColor: "#2b91b7",
                  label: {
                    show: true,
                    // 鼠标放上去的时候出现省份，且名字为白色
                    color: "#fff",
                  },
                },
              },
              zlevel: 1,
            },
            {
              //文字和标志
              name: "light",
              type: "scatter",
              coordinateSystem: "geo",
              data: convertData(mapData[n]),
              symbolSize: function (val) {
                return val[2] / 450;
              },

              itemStyle: {
                normal: {
                  color: colors[colorIndex][n],
                },
              },
            },
            //地图点的动画效果
            {
              //  name: 'Top 5',
              type: "effectScatter",
              coordinateSystem: "geo",
              data: convertData(mapData[n]),
              symbolSize: function (val) {
                return val[2] / 450;
              },
              showEffectOn: "render",
              rippleEffect: {
                brushType: "stroke",
              },
              hoverAnimation: true,

              itemStyle: {
                normal: {
                  color: colors[colorIndex][n],
                  shadowBlur: 10,
                  shadowColor: colors[colorIndex][n],
                },
              },
              zlevel: 1,
            },
            //柱状图
            {
              zlevel: 1.5,
              type: "bar",
              symbol: "none",
              barWidth: "30%",
              itemStyle: {
                normal: {
                  color: colors[colorIndex][n],
                },
              },
              data: barData[n],
            },
          ],
        });
      }
      let myChart = this.$echarts.init(document.querySelector(".chart2"));
      this.$echarts.registerMap("china", this.geoJson);

      myChart.setOption(optionXyMap01);

      handleRoam(myChart);

      let that = this;
      myChart.on("click", function (params) {
        if (params.componentSubType == "map") {
          that.$router.push({
            path: "/province-detail",
            query: {
              name: params.name,
            },
          });
        }
      });
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