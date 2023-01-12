<template>
  <div class="border">
    <div class="title">年龄分布</div>
    <div class="chart5"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Chart5",
  props: {},
  components: {},
  data() {
    return {};
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
      let myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
      let year = this.res.area_data.area_years_list;
      let optionXyMap01 = {
        timeline: {
          data: year,
          axisType: "category",
          autoPlay: true,
          playInterval: 3000,
          left: "5%",
          right: "5%",
          bottom: "2%",
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
            top: "0%",
            left: "15%",
            bottom: "25%",
            right: "20%",
            // containLabel: true
          },
        },

        options: [],
      };
      for (let i = 0; i < year.length; i++) {
        const item = this.res.area_data.area_list[this.clickId].data;
        let list1 = [item[6][i], item[7][i], item[8][i]];
        const sum = list1.reduce((total, item) => total + item);
        let list2 = list1.map((item) => parseInt((item * 100) / sum));

        optionXyMap01.options.push({
          xAxis: {
            show: false,
          },
          yAxis: [
            {
              type: "category",
              inverse: true,
              data: ["0-14岁", "14-64岁", "65岁及以上"],
              // 不显示y轴的线
              axisLine: {
                show: false,
              },
              // 不显示刻度
              axisTick: {
                show: false,
              },
              axisLabel: {
                color: "#fff",
              },
              splitLine: {
                show: false,
              },
            },
            {
              data: list1,
              axisLabel: {
                formatter: "{value}万",
                color: "#fff",
              },
              inverse: true,
              // 不显示y轴的线
              axisLine: {
                show: false,
              },
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
            },
          ],
          series: [
            {
              name: "条",
              type: "bar",
              data: list2,
              yAxisIndex: 0,
              // 修改第一组柱子的圆角
              itemStyle: {
                barBorderRadius: 20,
                // 此时的color 可以修改柱子的颜色
                color: function (params) {
                  return myColor[params.dataIndex];
                },
              },
              // 柱子之间的距离
              barCategoryGap: 50,
              //柱子的宽度
              barWidth: 10,
              // 显示柱子内的文字
              label: {
                show: true,
                color: "#fff",
                position: "inside",
                // {c} 会自动的解析为 数据  data里面的数据
                formatter: "{c}%",
              },
            },
            {
              name: "框",
              type: "bar",
              barCategoryGap: 50,
              barWidth: 15,
              yAxisIndex: 1,
              data: [100, 100, 100, 100, 100],
              itemStyle: {
                color: "none",
                borderColor: "#00c1de",
                borderWidth: 3,
                barBorderRadius: 15,
              },
            },
          ],
        });
      }

      let chart5 = this.$echarts.init(
        document.querySelector(".chart5"),
        "westeros"
      );
      chart5.setOption(optionXyMap01, true);
    },
  },
};
</script>

<style lang="scss" scoped>
.chart5 {
  height: 200px;
}
</style>