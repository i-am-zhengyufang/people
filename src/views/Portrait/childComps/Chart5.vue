<template>
  <div class="border">
    <div class="title">各大年龄段统计</div>
    <div class="chart5"></div>
  </div>
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
      const names = [
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
      let tempRes = this.res.nationwide_data.data_list[19][0];
      let option = {
        tooltip: {
          trigger: "item",
        },
        color: [
          "#92a6ff",
          "#92a6ff",
          "#92a6ff",
          "#92a6ff",
          "#92a6ff",
          "#92a6ff",
          "#92a6ff",
          "#92a6ff",
          "#92a6ff",
          "#92a6ff",
          "#92a6ff",
          "#92a6ff",
          "#92a6ff",
          "#92a6ff",
          "#92a6ff",
          "#92a6ff",
          "#92a6ff",
          "#92a6ff",
        ],

        series: [
          {
            name: "各年龄段（单位：万）",
            type: "funnel",
            sort: "descending",
            left: "5%",
            top: "2%",
            bottom: "2%",
            label: {
              color: "#fff",
            },
            labelLine: {
              lineStyle: {
                color: "#6D480E",
              },
            },
            itemStyle: {
              // borderColor: "#1a1f30",
              borderWidth: 2,
              shadowColor: "#0bc4e9",
              shadowBlur: 8,
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "#0dc4e9", // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: "#92a6ff",
                  },
                  {
                    offset: 1,
                    color: "#5935bb", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            data: [
              { value: tempRes[0], name: names[0] },
              { value: tempRes[1], name: names[1] },
              { value: tempRes[2], name: names[2] },
              { value: tempRes[3], name: names[3] },
              { value: tempRes[4], name: names[4] },
              { value: tempRes[5], name: names[5] },
              { value: tempRes[6], name: names[6] },
              { value: tempRes[7], name: names[7] },
              { value: tempRes[8], name: names[8] },
              { value: tempRes[9], name: names[9] },
              { value: tempRes[10], name: names[10] },
              { value: tempRes[11], name: names[11] },
              { value: tempRes[12], name: names[12] },
              { value: tempRes[13], name: names[13] },
              { value: tempRes[14], name: names[14] },
              { value: tempRes[15], name: names[15] },
              { value: tempRes[16], name: names[16] },
              { value: tempRes[17], name: names[17] },
              { value: tempRes[18], name: names[18] },
              { value: tempRes[19], name: names[19] },
            ],
          },
        ],
      };
      let chart5 = this.$echarts.init(
        document.querySelector(".chart5"),
        "westeros"
      );
      chart5.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.chart5 {
  height: 420px;
}
</style>