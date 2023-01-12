<template>
  <!-- 这里我并没有进行封装，等比赛过后我在搞好了 -->
  <div class="exp">
    <h1 class="item-title">60岁以上</h1>
    <ul>
      <li>
        <h4>人口数(亿)</h4>
        <span>2.6</span>
      </li>
      <li>
        <h4>占比</h4>
        <span>18.7%</span>
      </li>
      <li>
        <h4>同比(百分点)</h4>
        <span>
          5.44
          <img src="~assets/img/up.png" alt="" />
        </span>
      </li>
    </ul>
    <h1 class="item-title">65岁以上</h1>
    <ul>
      <li>
        <h4>人口数(亿)</h4>
        <span>1.9</span>
      </li>
      <li>
        <h4>占比</h4>
        <span>13.5%</span>
      </li>
      <li>
        <h4>同比(百分点)</h4>
        <span>
          4.63
          <img src="~assets/img/up.png" alt="" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.exp {
  height: 200px;
  font-family: Microsoft Yahei;
  .item-title {
    color: #e5307a;
  }
  ul {
    display: flex;
    justify-content: space-around;
    li {
      h4 {
        margin: 10px 0;
      }
      span {
        font-family: electronicFont;
        color: #e34848;
        font-size: 30px;
      }
      &:first-child span {
        color: #babb44;
      }
      &:last-child span {
        color: #07e1f8;
      }
    }
  }
}
</style>