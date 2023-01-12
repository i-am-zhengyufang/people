<template>
  <div class="border">
    <div class="title">受教育概况</div>
    <h1>{{ year }}年(单位：万)</h1>
    <dv-capsule-chart :config="config" />
  </div>
</template>

<script>
export default {
  name: "chart2",
  props: {},
  components: {},
  data() {
    return {
      config: {},
      year: "1964",
    };
  },
  created() {
    this.res = this.$root.data.res;
    this.getData(0); //记得初次要渲染一下，要不然就真的会空白3s
    this.timeTrigger();
  },
  methods: {
    getData(j) {
      const titlename = [
        "受到小学教育",
        "受到初中教育",
        "受到高中和中专教育",
        "受到大专及其以上",
      ];
      let data = [];
      let colors = ["#1089E7", "#F57474", "#90a215", "#F8B448"];
      for (let i = 0; i < titlename.length; i++) {
        data.push({
          name: titlename[i],
          value: this.res.nationwide_data.data_list[12 - i][j],
        });
      }
      this.config = { data, colors };
    },
    timeTrigger() {
      let j = 0;
      const years = this.res.nationwide_data.statistics_class_list[9].year_list;
      setInterval(() => {
        j++;
        if (j == years.length) j = 0;
        this.year = years[j];
        this.getData(j);
      }, 3000);
    },
  },
};
</script>
<style lang="scss" scoped>
h1 {
  float: right;
  font-size: 20px;
  color: #fff;
}
.dv-capsule-chart {
  height: 200px;
  font-family: "Microsoft Yahei";
}
</style>