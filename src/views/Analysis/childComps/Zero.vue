<template>
  <div class="content">
    <div class="title">目录树</div>
    <div class="category-tree"></div>
  </div>
</template>

<script>
export default {
  name: "Zero",
  props: {},
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.echartsInit();
  },
  methods: {
    echartsInit() {
      let data1 = {
        name: "分析所",
        children: [
          {
            name: "少子化",
            lineStyle: { color: "#FFAE57" },
            label: {
              fontSize: 16,
            },
            children: [
              { lineStyle: { color: "#FFAE57" }, name: "发展历程" },
              { lineStyle: { color: "#FFAE57" }, name: "原因分析" },
              { lineStyle: { color: "#FFAE57" }, name: "措施政策" },
            ],
          },
          {
            name: "老龄化",
            lineStyle: { color: "#54ebfc" },
            label: {
              fontSize: 16,
            },
            children: [
              {
                lineStyle: { color: "#54ebfc" },
                name: "数据概览",
              },
              {
                lineStyle: { color: "#54ebfc" },
                name: "老龄化成因",
              },
              {
                lineStyle: { color: "#54ebfc" },
                name: "对比世界",
              },
              {
                lineStyle: { color: "#54ebfc" },
                name: "措施政策",
              },
            ],
          },
        ],
      };
      let option = {
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
        },
        legend: {},
        series: [
          {
            type: "tree",
            data: [data1],
            top: "5%",
            left: "15%",
            bottom: "2%",
            right: "25%",
            symbol: "circle",
            symbolSize: 17,
            label: {
              normal: {
                fontSize: 24,
                position: "left",
                color: "#fff",
                verticalAlign: "middle",
                align: "right",
              },
            },

            leaves: {
              label: {
                normal: {
                  fontSize: 12,
                  position: "right",
                  color: "#fff",
                  verticalAlign: "middle",
                  align: "left",
                },
              },
            },
            roam: true, //是否开启鼠标缩放和平移漫游。scale/move/true
            focusNodeAdjacency: true,
            animationDuration: 550,
            animationDurationUpdate: 750,
          },
        ],
      };
      let tree = this.$echarts.init(
        document.querySelector(".category-tree"),
        "westeros"
      );
      tree.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.category-tree {
  height: 600px;
  width: 980px;
  margin: 0 auto;
}
</style>