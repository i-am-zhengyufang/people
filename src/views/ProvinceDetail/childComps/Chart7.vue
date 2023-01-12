<template>
  <dv-border-box-11 :title="clickName">
    <flop :value="parseInt(totalNumber)" :key="clickCode" />
    <div class="chart7"></div>
  </dv-border-box-11>
</template>

<script>
import Flop from "components/Flop";
import { handleRoam } from "@/utils/business";
import { getGeoJson } from "@/utils/discovery";
import { mapState } from "vuex";
export default {
  name: "Chart7",
  props: {},
  components: { Flop },
  data() {
    return {
      totalNumber: 0,
    };
  },
  computed: {
    ...mapState(["clickCode", "clickId", "clickName"]),
  },
  mounted() {
    this.totalNumber =
      this.$root.data.res.area_data.area_list[this.clickId].data[0][0];

    this.echartsInit();
  },
  watch: {
    clickId(value1, value2) {
      const arr = this.$root.data.res.area_data.area_list[this.clickId].data[0];
      this.totalNumber = arr[arr.length - 1];
      this.echartsInit();
    },
  },
  methods: {
    async echartsInit() {
      const geoJson = await getGeoJson(this.clickCode + "_full.json");
      let option = {
        geo: {
          show: true,
          map: "city",
          roam: true,
          layoutSize: "100%",
          aspectScale: 0.75,
          layoutCenter: ["50%", "49.5%"],
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
              label: {
                show: true,
                color: "#fff",
              },
            },
            emphasis: {
              areaColor: "rgba(147, 235, 248, 0)",
            },
          },
        },

        series: [
          {
            type: "map",
            map: "city",
            tooltip: {
              show: false,
            },
            layoutCenter: ["50%", "48%"], //地图位置
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
              },
              emphasis: {
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
        ],
      };
      this.$echarts.registerMap("city", geoJson.data);
      let chart7 = this.$echarts.init(document.querySelector(".chart7"));
      chart7.setOption(option, true);
      handleRoam(chart7);
    },
  },
};
</script>

<style lang="scss" scoped>
.dv-border-box-11 {
  height: 300px;
  margin-bottom: 20px;
}
.number-grow-warp {
  position: absolute;
  top: 80px;
  left: 40px;
}
.chart7 {
  position: absolute;
  top: 20%;
  width: 100%;
  height: 230px;
}
</style>