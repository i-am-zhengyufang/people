<template>
  <div class="content">
    <div class="left">
      <div class="analysis-text">
        （一）全国人口规模继续增长，但增长速度和幅度持续放缓，并向零增长和负增长趋近
      </div>
      <div class="title">人口总数和自然增长率</div>
      <div class="chart1"></div>
    </div>
    <div class="right">
      <el-timeline>
        <el-timeline-item timestamp="1949—1957年" placement="top">
          <el-card>
            <h4>新中国成立后,社会安定，鼓励生育，第一次人口生育高峰</h4>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="1958—1961年" placement="top">
          <el-card>
            <h4>三年的自然灾害，使经济发展出现了波折,人口出现负增长</h4>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="1962—1970年" placement="top">
          <el-card>
            <h4>经济调整，出现新一轮补偿性生育高潮，第二个人口高增长阶段</h4>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="1971—1980年" placement="top">
          <el-card>
            <h4>
              中国政府开始实行计划生育并确定为一项基本国策，人口有控制增长阶段
            </h4>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="1981—2013年" placement="top">
          <el-card>
            <h4>
              以“一胎化”为基调的计划生育，生育率下降到更替水平, 并继续下降
            </h4>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2014-至今" placement="top">
          <el-card>
            <h4>
              单独二孩和全面二孩政策，生育率短暂回升后继续下降,2020生育率仅为1.3，处于较低水平，全国人口自然增长率仅为1.45‰，同样创下1978年以来的历史新低。
            </h4>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: "One",
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
      const year = this.res.nationwide_data.statistics_class_list[0].year_list;
      let option = {
        animationDuration: 5000,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          top: "10%",
          left: "50%",
        },
        dataZoom: [
          {
            showDataShadow: false,
            height: 20,
            start: 20,
            end: 40,
            bottom: "10%",
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
        xAxis: {
          splitLine: {
            show: false,
          },
          type: "category",
          data: year,
          name: "年份",
          axisTick: {
            show: true,
            lineStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: [
          {
            name: "年末总人口(万)",
            type: "value",
            splitLine: {
              show: false,
            },
            axisTick: {
              show: true,
              lineStyle: {
                color: "#fff",
              },
            },
            axisLine: {
              show: true,
            },
          },
          {
            name: "自然增长率(%)",
            type: "value",
            splitLine: {
              show: false,
            },
            axisTick: {
              show: true,
              lineStyle: {
                color: "#fff",
              },
            },
            axisLine: {
              show: true,
            },
          },
        ],
        grid: {
          left: "10%",
          right: "10%",
          top: "10%",
          bottom: "20%",
        },
        series: [
          {
            yAxisIndex: 0,
            name: "年末总人口",
            data: this.res.nationwide_data.data_list[0],
            type: "bar",
            itemStyle: {
              color: "#27d08a",
            },
          },
          {
            yAxisIndex: 1,
            name: "自然增长率",
            data: this.res.nationwide_data.data_list[5],
            type: "line",
            smooth: true,
            symbolSize: 2,
            lineStyle: {
              width: 1,
            },
            itemStyle: {
              color: "#e86a98",
              emphasis: {
                color: "#e86a98",
              },
            },
          },
        ],
      };
      let chart1 = this.$echarts.init(
        document.querySelector(".chart1"),
        "westeros"
      );
      chart1.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-around;
  .left {
    .chart1 {
      height: 550px;
      width: 650px;
    }
  }
  .right {
    width: 550px;
  }
}
</style>