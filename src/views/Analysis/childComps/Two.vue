<template>
  <div class="content">
    <div class="left">
      <div class="exp">
        如果用 CBR 代表出生率, TFR 表示总和生育率, hx
        代表分年龄生育率占总和生育率的比例, Cx 代表分年龄育龄女性占总人口比例,
        TFR = CBR / ∑ hx · Cx
      </div>
      <div class="title">生育率</div>
      <div class="chart3"></div>
      <div class="title">关键词</div>
      <div class="chart2"></div>
    </div>
    <div class="right">
      <div class="title">优化生育措施</div>
      <div class="detail">
        <div class="card card1">组织实施好三孩生育政策</div>
        <div class="card card2">提高优生优育服务水平</div>
        <div class="card card3">发展普惠托育服务体系</div>
        <div class="card card4">降低生育、养育、教育成本</div>
      </div>
      <div class="title">政策解读</div>
      <div class="link">
        <a
          href="http://www.gov.cn/zhengce/2021-06/01/content_5614518.htm"
          target="_blank"
          >国家卫生健康委有关负责人就实施三孩生育政策答新华社记者问 2021-6-1</a
        >
        <a
          href="http://www.gov.cn/zhengce/2021-07/20/content_5626190.htm"
          target="_blank"
          >共中央 国务院关于优化生育政策促进人口长期均衡发展的决定 2021-7-20</a
        >
        <a
          href="http://www.gov.cn/zhengce/2021-07/21/content_5626255.htm"
          target="_blank"
          >解读《中共中央 国务院关于优化生育政策促进人口长期均衡发展的决定》
          2021-07-21</a
        >
        <a
          href="http://www.gov.cn/zhengce/2021-07/22/content_5626487.htm"
          target="_blank"
          >三孩生育政策如何实施?——有关人士回应社会关切 2021-07-22</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Two",
  props: {},
  components: {},
  data() {
    return {
      res: {},
      year: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
      fertilityRate: [
        1.632, 1.81, 1.637, 1.75, 1.531, 1.76, 1.685, 1.506, 1.505, 1.3,
      ],
    };
  },
  mounted() {
    this.res = this.$root.data.res;
    this.echartsInit();
  },
  methods: {
    echartsInit() {
      let option = {
        animationDuration: 1000,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            name: "生育意愿降低原因",
            type: "graph",
            layout: "force",
            force: {
              repulsion: 200,
              gravity: 0.01,
              edgeLength: 150,
              layoutAnimation: true,
            },
            edgeSymbol: ["circle", "arrow"],
            // 名称及对应位置
            data: [
              {
                name: "生育率降低原因",
                x: 100,
                y: 100,
                category: 0,
                symbol: "circle",
                symbolSize: 100,
                itemStyle: {
                  color: "#fc853e",
                },
                draggable: "true",
              },
              {
                name: "生育妇女规模减少",
                category: 1,
                x: 50,
                y: 150,
                symbol: "circle",
                symbolSize: 80,
                itemStyle: {
                  color: "#af5aff",
                },
                draggable: "true",
              },
              {
                name: "婚育年龄推迟",
                category: 2,
                x: 100,
                y: 200,
                symbol: "circle",
                symbolSize: 80,
                itemStyle: {
                  color: "#af5aff",
                },
                draggable: "true",
              },
              {
                x: 130,
                y: 10,
                name: "结婚率降低，离婚率升高",
                symbol: "circle",
                symbolSize: 80,
                itemStyle: {
                  color: "#af5aff",
                },
                draggable: "true",
              },
              {
                x: 160,
                y: 10,
                name: "经济社会发展",
                symbol: "circle",
                symbolSize: 80,
                itemStyle: {
                  color: "#af5aff",
                },
                draggable: "true",
              },
              {
                x: 100,
                y: 40,
                name: "群众生育意愿降低",
                symbol: "circle",
                symbolSize: 80,
                draggable: "true",
                itemStyle: {
                  color: "#af5aff",
                },
              },
              {
                x: 20,
                y: 100,
                name: "新冠疫情",
                symbol: "circle",
                symbolSize: 80,
                draggable: "true",
                itemStyle: {
                  color: "#af5aff",
                },
              },
              {
                x: 300,
                y: 10,
                name: "经济负担重",
                symbol: "circle",
                symbolSize: 60,
                draggable: "true",
                itemStyle: {
                  color: "#05d4f3",
                },
              },
              {
                x: 600,
                y: 310,
                name: "婴幼儿无人照料",
                symbol: "circle",
                symbolSize: 60,
                draggable: "true",
                itemStyle: {
                  color: "#05d4f3",
                },
              },
              {
                x: 500,
                y: 70,
                name: "女性难以平衡家庭与工作",
                symbol: "circle",
                symbolSize: 60,
                draggable: "true",
                itemStyle: {
                  color: "#05d4f3",
                },
              },
            ],
            category: [{ name: "0" }, { name: "1" }, { name: "2" }],

            // 对应关系
            links: [
              {
                source: "生育率降低原因",
                target: "生育妇女规模减少",
                lineStyle: {
                  color: "#fc853e",
                },
              },
              {
                source: "生育率降低原因",
                target: "婚育年龄推迟",
                lineStyle: {
                  color: "#fc853e",
                },
              },
              {
                source: "生育率降低原因",
                target: "结婚率降低，离婚率升高",
                lineStyle: {
                  color: "#fc853e",
                },
              },
              {
                source: "生育率降低原因",
                target: "群众生育意愿降低",
                lineStyle: {
                  color: "#fc853e",
                },
              },
              {
                source: "生育率降低原因",
                target: "经济社会发展",
                lineStyle: {
                  color: "#fc853e",
                },
              },
              {
                source: "生育率降低原因",
                target: "新冠疫情",
                lineStyle: {
                  color: "#fc853e",
                },
              },
              {
                source: "群众生育意愿降低",
                target: "经济负担重",
                lineStyle: {
                  color: "#af5aff",
                },
              },
              {
                source: "群众生育意愿降低",
                target: "婴幼儿无人照料",
                lineStyle: {
                  color: "#af5aff",
                },
              },
              {
                source: "群众生育意愿降低",
                target: "女性难以平衡家庭与工作",
                lineStyle: {
                  color: "#af5aff",
                },
              },
            ],
            focusNodeAdjacency: true,
            roam: true,
            label: {
              show: true,
              color: "#fff",
              position: "inside",
            },
            itemStyle: {
              shadowColor: "rgba(255, 255, 255, 0.8)",
              shadowBlur: 10,
            },
            lineStyle: {
              width: 3,
              curveness: 0.3 /* 连接线的弯曲程度 */,
            },
          },
        ],
      };
      let chart2 = this.$echarts.init(
        document.querySelector(".chart2"),
        "westeros"
      );
      chart2.setOption(option);
      let option1 = {
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "10%",
          top: "20%",
          bottom: "20%",
        },
        xAxis: {
          type: "category",
          data: this.year,
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false,
          },
        },
        series: {
          showSymbol: false,
          smooth: false,
          itemStyle: {
            color: "#ed3f35",
          },
          data: this.fertilityRate,
          type: "line",
        },
      };
      let chart3 = this.$echarts.init(
        document.querySelector(".chart3"),
        "westeros"
      );
      chart3.setOption(option1);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-around;
  .left {
    .chart2 {
      width: 550px;
      height: 400px;
    }
    .chart3 {
      width: 550px;
      height: 150px;
    }
  }
  .right {
    .detail {
      color: #000;
      font-size: 18px;
      justify-content: space-between;
      display: flex;
      flex-wrap: wrap;
      .card {
        width: 48%;
        @include center(150px);
        margin-bottom: 30px;
        border-radius: 10px;
        background: url("~assets/img/cost.jpg") no-repeat 0 / cover;
        background-color: #fff;
      }
      .card1 {
        background-image: url("~assets/img/three-children.jpg");
      }
      .card2 {
        background-image: url("~assets/img/Birth.jpg");
      }
      .card3 {
        background-image: url("~assets/img/Childcare.jpg");
      }
    }
    .link {
      a {
        font-family: "Courier New", Courier, monospace;
        display: inline-block;
        color: #fff;
        padding: 10px;
        font-size: 14px;
        &:hover {
          color: #599aeb;
        }
      }
    }
  }
}
</style>