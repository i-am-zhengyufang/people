<template>
  <div class="header-area">
    <div class="button_group">
      <div @click="clickHome" class="mac-botton red">
        <icon type="home" title="返回主页"></icon>
      </div>
      <div @click="HandleScreen" class="mac-botton yellow">
        <icon :type="isFull ? 'full' : 'exitFull'" title="全屏/退出全屏"></icon>
      </div>
      <div @click="clickReturn" class="mac-botton green">
        <icon type="return" title="返回上一层"></icon>
      </div>
    </div>
    <div class="center-title">中国人口数据可视化</div>
    <ul class="menu-list">
      <router-link
        v-for="(item, index) in menuList"
        :key="index"
        :to="index == 2 ? `${item.path}?name=北京市` : item.path"
        custom
        v-slot="{ navigate, isActive }"
      >
        <li
          @click="navigate"
          role="link"
          class="menu-item"
          :class="{ active: isActive }"
        >
          <icon :size="13" :type="item.meta.icon"></icon>
          <span>{{ item.meta.title }}</span>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { menuList } from "@/router";
import Icon from "components/Icon";
import { setFullScreen, exitFullScreen } from "@/utils/business";
export default {
  name: "App",
  props: {},
  components: { Icon },
  data() {
    return {
      isFull: true,
      menuList,
      city: "北京市",
    };
  },
  methods: {
    clickHome() {
      this.$router.push("/home");
    },
    clickReturn() {
      this.$router.go(-1);
    },
    HandleScreen() {
      if (this.isFull) this.setFullScreen();
      else this.exitFullScreen();
      this.isFull = !this.isFull;
    },
    setFullScreen() {
      setFullScreen(document.documentElement);
    },
    exitFullScreen() {
      exitFullScreen();
    },
  },
};
</script>

<style lang="scss" scoped>
.header-area {
  height: 90px;
  background: url(~assets/img/head-bottom2.png) center -5% no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  // 之所以用了上面的还要加text-align和line-height的原因是需要对里面的文本起作用
  text-align: center;
  .button_group {
    display: flex;
    flex: 1;
    .mac-botton {
      @include round(28px);
      @include flex-center;
      margin-left: 28px;
      &.red {
        background-color: $mac-button1;
        box-shadow: 0 0 18px 2px $mac-button1;
      }
      &.green {
        background-color: $mac-button2;
        box-shadow: 0 0 18px 2px $mac-button2;
      }

      &.yellow {
        background-color: $mac-button3;
        box-shadow: 0 0 18px 2px $mac-button3;
      }
    }
  }
  .center-title {
    flex: 2;
    width: 400px;
    height: 100%;
    line-height: 70px;
    background: url(~assets/img/head.gif) no-repeat 50% 42%;
    background-size: cover;
    font-size: 30px;
    color: $theme-color;
    text-shadow: 0 0 20px $theme-color;
  }
  .menu-list {
    flex: 1;
    display: flex;
    justify-content: center;
    cursor: pointer;
    .menu-item {
      position: relative;
      padding: 0 15px;
      color: #fff;
      span {
        margin-left: 10px;
      }
      &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 30px;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 45px;
        background: url(~assets/img/light.png) no-repeat 0 -15px;
        background-size: 100% 100%;
        opacity: 0;
      }
      &.active::before,
      &:hover::before {
        opacity: 1;
      }
      &.active {
        color: $emphasis-color;
      }
    }
  }
}
</style>