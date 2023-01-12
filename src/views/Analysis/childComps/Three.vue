<template>
  <div class="content">
    <div class="left">
      <div class="analysis-text">
        （二）人口的老龄化速度加快，劳动力人口持续减少
      </div>
      <div class="title">七普各年龄段分布</div>
      <div class="chart5"></div>
    </div>
    <div class="right">
      <div class="title">七普数据概览</div>
      <Table />
      <div class="title">老龄化成因</div>
      <div class="chart6"></div>
    </div>
  </div>
</template>

<script>
import Table from "components/Table.vue";
export default {
  name: "Three",
  props: {},
  components: {
    Table,
  },
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
      let year = this.res.nationwide_data.statistics_class_list[6].year_list;

      let option = {
        color: ["#434d91", "#be3728", "#86953a"],
        xAxis: {
          type: "category",
          data: year,
          splitLine: {
            show: false,
          },
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            let res = params[0].name;
            for (let item of params) {
              res +=
                "<br>" +
                item.marker +
                item.seriesName +
                "&nbsp&nbsp&nbsp&nbsp" +
                item.value +
                "%";
            }
            return res;
          },
        },
        legend: {
          top: "5%",
          icon: "circle",
        },
        grid: {
          left: "10%",
          right: "5%",
          bottom: "5%",
        },
        yAxis: {
          type: "value",
          max: 100,
          axisLabel: {
            formatter: function (a) {
              return a + ".0%";
            },
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            type: "bar",
            name: "6-14岁",
            stack: "总量",
            data: this.res.nationwide_data.data_list[6],
            label: {
              show: true,
            },
          },
          {
            type: "bar",
            name: "14-65岁",
            stack: "总量",
            data: this.res.nationwide_data.data_list[7],
            label: {
              show: true,
            },
          },
          {
            type: "bar",
            name: "65岁以上",
            stack: "总量",
            data: this.res.nationwide_data.data_list[8],
            label: {
              show: true,
              color: "#fff",
              formatter: function (a) {
                return a.value.toFixed(2);
              },
            },
          },
        ],
      };
      let chart5 = this.$echarts.init(
        document.querySelector(".chart5"),
        "westeros"
      );
      chart5.setOption(option);

      let option1 = {
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 180,
              edgeLength: 20,
            },
            roam: "scale",
            label: {
              show: true,
              fontSize: 14,
            },
            data: [
              {
                name: "经济社会发展",
                symbol: "circle",
                symbolSize: 20,
                draggable: true,
                label: {
                  color: "auto",
                  fontSize: 30,
                  rotate: -20,
                },
                itemStyle: {
                  color: "#ffc26d",
                },
              },
              {
                name: "计划生育政策",
                draggable: true,
                symbol: "circle",
                symbolSize: 10,
                label: {
                  color: "auto",
                  rotate: 25,
                },
                itemStyle: {
                  color: "#82ed9b",
                },
              },
              {
                name: "生育意愿的改变",
                draggable: true,
                symbol: "circle",
                symbolSize: 10,
                label: {
                  color: "auto", //这样就会随着itemStyle变色；1
                },
                itemStyle: {
                  color: "#9381ff",
                },
              },
            ],
          },
        ],
      };
      let chart6 = this.$echarts.init(
        document.querySelector(".chart6"),
        "westeros"
      );
      chart6.setOption(option1);
    },
  },
};
</script>
<style lang="scss" scoped>
@font-face {
  font-family: electronicFont;
  src: url(~assets/font/DS-DIGIT.TTF);
}
.content {
  display: flex;
  justify-content: space-around;
  .left {
    .chart5 {
      height: 400px;
      width: 700px;
    }
  }
  .right {
    .chart6 {
      height: 300px;
      width: 550px;
    }
  }
}
</style>