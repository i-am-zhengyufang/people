<template>
  <div class="content">
    <!-- <div class="left">
      <div class="text">人口金字塔</div>
      人口金字塔为糖葫芦形
      <div class="chart4"></div>
    </div> -->
    <div class="wrap">
      <div class="left">
        <div class="title">到2100年世界主要经济体60+老龄化程度（%）</div>
        <img src="~assets/img/world-old2.png" alt="" />
      </div>
      <div class="right">
        <div class="title">政策解读</div>
        <div class="link">
          <a
            href="http://www.gov.cn/zhengce/2019-11/22/content_5454389.htm"
            target="_blank"
            title="坚持以人民为中心,积极应对人口老龄化——国家发展改革委负责人就《国家积极应对人口老龄化中长期规划》答记者问
            2019-11-22"
            >坚持以人民为中心,积极应对人口老龄化——国家发展改革委负责人就《国家积极应对人口老龄化中长期规划》答记者问
            2019-11-22</a
          >
          <a
            href="http://www.gov.cn/zhengce/2019-11/23/content_5454778.htm"
            target="_blank"
            >《国家积极应对人口老龄化中长期规划》应对老龄化上升为国家战略
            2019-11-23</a
          >
          <a
            href="http://www.gov.cn/zhengce/2019-10/08/content_5437116.htm"
            target="_blank"
            >将人口老龄化挑战转化为推进人民幸福的积极因素——专访国家发改委社会司司长欧晓理
            2019-10-8</a
          >
          <a
            href="http://www.gov.cn/zhengce/2019-02/14/content_5365484.htm"
            target="_blank"
            >“网约护士”试点是应对老龄化之举 2019-2-14</a
          >
          <a
            href="http://www.gov.cn/zhengce/2019-11/23/content_5454746.htm"
            target="_blank"
            >应对老龄化上升为国家战略 2019-11-23</a
          >
          <a
            href="http://www.gov.cn/zhengce/2020-11/19/content_5562488.htm"
            target="_blank"
            >积极应对人口老龄化跻身国家战略,有何深意? 2020-11-19</a
          >
          <a
            href="http://www.gov.cn/zhengce/2021-11/25/content_5653252.htm"
            target="_blank"
            title="积极应对人口老龄化,激发老龄社会活力——国家卫健委相关部门负责人解读《中共中央
            国务院关于加强新时代老龄工作的意见》 2021-11-25"
            >积极应对人口老龄化,激发老龄社会活力——国家卫健委相关部门负责人解读《中共中央
            国务院关于加强新时代老龄工作的意见》 2021-11-25</a
          >
        </div>
      </div>
    </div>
    <div class="title">应对人口老龄化策略</div>
    <div class="detail">
      <div class="card">
        <img src="~assets/img/old-way1.png" alt="" />
        <span class="left-text">夯实应对人口老龄化的社会财富储备</span>
      </div>
      <div class="card">
        <img src="~assets/img/old-way3.png" alt="" />
        <span class="left-text">改善劳动力有效供给</span>
      </div>
      <div class="card">
        <img src="~assets/img/old-way2.png" alt="" />
        <span class="left-text">打造高质量的为老服务和产品供给体系</span>
      </div>
      <div class="card">
        <img src="~assets/img/old-way4.png" alt="" />
        <span class="left-text">构建养老、孝老、敬老的社会环境</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Four",
  props: {},
  components: {},
  data() {
    return {
      res: {},
    };
  },
  mounted() {
    // this.res = this.$root.data.res;
    // this.echartsInit();
  },
  methods: {
    echartsInit() {
      const ageGrade = [
        "0-4岁",
        "5-9岁",
        "10-14岁",
        "15-19岁",
        "20-24岁",
        "25-29岁",
        "30-34岁",
        "35-39岁",
        "40-44岁",
        "45-49岁",
        "50-54岁",
        "55-59岁",
        "60-64岁",
        "65-69岁",
        "70-74岁",
        "75-79岁",
        "80-84岁",
        "85-89岁",
        "90-94岁",
        "95岁以上",
      ];

      let maleList = this.res.nationwide_data.data_list[25][7];
      let femaleList = this.res.nationwide_data.data_list[26][7];
      femaleList = femaleList.map((item) => (item * 100) / 504681);
      maleList = maleList.map((item) => (-item * 100) / 524473);

      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow", // 默认为直线，可选为：'line' |
          },
          formatter: function (params) {
            let res = params[0].name;
            for (let item of params) {
              res +=
                "<br/>" +
                item.marker +
                item.seriesName +
                ":" +
                Math.abs(item.value);
            }
            return res;
          },
        },
        legend: {
          x: "2%",
          y: "0%",
        },
        color: ["#2575fc", "#ff1493"], //颜色设置、
        grid: {
          top: "10%",
          bottom: "10%",
        },
        xAxis: [
          {
            type: "value",
            axisTick: {
              show: true,
              lineStyle: {
                color: "#d8d8d8",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#d8d8d8",
              },
            },
            axisLabel: {
              formatter: function (a) {
                return Math.abs(a) + ".0%";
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "category",
            nameLocation: "middle",
            axisTick: { show: false },
            data: ageGrade,
            axisLabel: {
              color: "#fff",
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "男性",
            type: "bar",
            stack: "总量",
            data: maleList,
            itemStyle: {
              color: "#314c4d",
            },
          },
          {
            name: "女性",
            type: "bar",
            stack: "总量",
            data: femaleList,
            itemStyle: {
              color: "#fe685b",
            },
          },
        ],
      };
      let chart4 = this.$echarts.init(
        document.querySelector(".chart4"),
        "westeros"
      );
      chart4.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  justify-content: space-around;
  font-family: Microsoft Yahei;
  height: 380px;
  .left {
    flex: 3;
    margin-right: 20px;
    // background: url(~assets/img/world-old2.png) no-repeat 0 0 / 100% 100%;
    img {
      height: 80%;
      width: 100%;
    }
  }
  .right {
    flex: 1;
    .link {
      a {
        font-family: "Courier New", Courier, monospace;
        display: inline-block;
        width: 305px;
        padding: 10px;
        color: #fff;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        &:hover {
          color: #599aeb;
        }
      }
    }
  }
}
.detail {
  font-size: 18px;
  justify-content: space-between;
  display: flex;
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 180px;
    span {
      flex: 1;
      margin-top: 20px;
      font-size: 12px;
      color: #599aeb;
    }
    img {
      // 给它加flex没用，不对齐了
      height: 140px;
      width: 280px;
      border-radius: 10px;
    }
  }
}
</style>