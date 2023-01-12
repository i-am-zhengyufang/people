<template>
  <div class="number-grow-warp">
    <span
      ref="numberGrow"
      :data-time="time"
      class="number-grow"
      :data-value="value"
    >
    </span>
    万人
  </div>
</template>
<script>
export default {
  name: "Flop",
  props: {
    value: Number,
    time: {
      type: Number, // 从0-具体数值之间变化的速度，单位秒
      default() {
        return 1.5;
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.numberGrow(this.$refs.numberGrow); // 取消注释--查看效果
  },
  methods: {
    // 文字变化效果
    numberGrow(ele) {
      // debugger;
      //【这里调速度 1 ，步进值， 通俗地讲，就是每次跳的时候，增加的一个增量】
      let step = parseInt((this.value * 60) / (this.time * 1000));
      // 设置当前值(这个值是计时器持续运行时，每次页面上显示的跳动值，不是最终的那个具体值)
      let current = 0;
      // 设置开始值
      let start = 0;
      // 设置定时器，用来反复横跳的，哈哈哈
      let t = setInterval(() => {
        // 每次增加一点步进值
        start += step;
        // 开始值大于传过来的的值，说明 到点了，不用 继续横跳了
        if (start > this.value) {
          clearInterval(t);
          // 把穿过的值赋给start，结束
          start = this.value;
          // 清掉计时器
          t = null;
        }
        if (start == 0) {
          start = this.value;
          clearInterval(t);
        }
        // 当前值等于开始值，那就结束
        if (this.value === 0) {
          return;
        }
        current = start;
        // 正则
        ele.innerHTML = current
          .toString()
          .replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, "$1,");
      }, this.time * 10); // 【这里调速度 2， 通俗地讲，这里是页面上，肉眼能看到的跳动频率】
      // 本来想设置成 秒 *1000的，但是实在太慢了，就改成 *100了
    },
  },
};
</script>
  <style scoped lang="scss">
.number-grow-warp {
  transform: translateZ(0);
  color: #fff;
  font-size: 30px;
}
</style>
