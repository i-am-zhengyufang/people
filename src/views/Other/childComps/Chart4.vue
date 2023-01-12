<template>
  <div class="border">
    <div class="title">文盲率</div>
    <ul class="option-list">
      <li
        v-for="(item, index) in year"
        :key="index"
        :class="{ active: currentIndex == index }"
      >
        {{ item }}
      </li>
    </ul>
    <div class="chart4"></div>
  </div>
</template>

<script>
export default {
  name: "Chart4",
  props: {},
  components: {},
  data() {
    return {
      currentIndex: 0,
      year: [2000, 2010, 2020],
      res: {},
    };
  },
  mounted() {
    this.res = this.$root.data.res;
    this.echartsInit();
  },
  methods: {
    echartsInit() {
      let option = {
        series: {
          type: "pie",
          name: "文盲率",
          radius: ["0%", "60%"],
          center: ["50%", "50%"],
          itemStyle: {
            borderRadius: 10,
          },
          data: [
            {
              value: this.res.nationwide_data.data_list[21][0],
              label: {
                show: true,
                formatter: "{a}{c}%",
                fontSize: 18,
                color: "white",
              },
              itemStyle: {
                color: "#19d760",
              },
            },
            {
              value: 100 - this.res.nationwide_data.data_list[21][0],
              label: {
                show: false,
              },
              itemStyle: {
                color: "#7cd6cf",
              },
            },
          ],
        },
      };
      let chart4 = this.$echarts.init(
        document.querySelector(".chart4"),
        "westeros"
      );
      chart4.setOption(option);
      let timer;
      let that = this;
      function playTime() {
        if (timer) clearInterval(timer);
        timer = setInterval(function () {
          that.currentIndex++;
          if (that.currentIndex == 3) that.currentIndex = 0;
          let temp = that.res.nationwide_data.data_list[21][that.currentIndex];
          option.series.data[0].value = temp;
          option.series.data[1].value = 100 - temp;
          chart4.setOption(option);
        }, 3000);
      }
      playTime();
    },
  },
};
</script>

<style lang="scss" scoped>
.border {
  .option-list {
    padding-left: 20px;
    li {
      float: left;
      color: #4c9bfd;
      padding: 0 15px;
      &.active {
        color: #fff;
        background-color: #4c9bfd;
      }
    }
  }
  .chart4 {
    height: 280px;
  }
}
</style>