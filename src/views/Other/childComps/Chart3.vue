<template>
  <div class="border">
    <div class="title">城镇化率</div>
    <ul class="option-list">
      <li
        v-for="(item, index) in year"
        :key="index"
        :class="{ active: currentIndex == index }"
      >
        {{ item }}
      </li>
    </ul>
    <div class="chart3"></div>
  </div>
</template>

<script>
export default {
  name: "Chart3",
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
          radius: [90, 95],
          center: ["50%", "50%"],
          itemStyle: {
            normal: {
              labelLine: {
                show: false,
              },
            },
          },
          data: [
            {
              value: this.res.nationwide_data.data_list[20][0],
              label: {
                show: true,
                position: "center",
                formatter: "{c}%",
                fontSize: 44,
                fontWeight: 900,
                color: "white",
              },
              itemStyle: {
                color: "#139FBE",
                shadowColor: "#82ffff",
                borderWidth: 10,
                borderColor: "#82ffff",
                shadowBlur: 10,
              },
            },
            {
              value: 100 - this.res.nationwide_data.data_list[20][0],
              itemStyle: {
                normal: {
                  color: "#82ffff",
                },
              },
            },
          ],
        },
      };
      let chart3 = this.$echarts.init(
        document.querySelector(".chart3"),
        "westeros"
      );
      chart3.setOption(option);

      let timer;
      let that = this;
      function playTime() {
        if (timer) clearInterval(timer);
        timer = setInterval(function () {
          that.currentIndex++;
          if (that.currentIndex == 3) that.currentIndex = 0;
          let temp = that.res.nationwide_data.data_list[20][that.currentIndex];
          option.series.data[0].value = temp;
          option.series.data[1].value = 100 - temp;
          chart3.setOption(option);
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
  .chart3 {
    height: 305px;
  }
}
</style>