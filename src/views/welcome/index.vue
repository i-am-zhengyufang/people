<template>
  <div class="welcome">
    <h3>中国人口数据可视化</h3>
    <!-- 
        <div
          @animationend="func"
          class="family animate__animated"
          :class="isActive ? 'animate__bounceInLeft' : 'animate__rotateIn'"
          :style="{ animationIterationCount: !isActive ? 'infinite' : 1 }"
        >
          <img src="~assets/img/family.png" alt="" />
        </div> -->
    <vue-typed-js
      :strings="['welcome to...']"
      :fadeOutClass="'fadeOutClass'"
      :loop="true"
      :loopCount="4"
    >
      <p class="typing"></p>
    </vue-typed-js>
    <a class="frame-btn" @click="goHome">
      <span class="frame-btn__outline frame-btn__outline--tall">
        <span class="frame-btn__line frame-btn__line--tall"></span>
        <span class="frame-btn__line frame-btn__line--flat"></span>
      </span>
      <span class="frame-btn__outline frame-btn__outline--flat">
        <span class="frame-btn__line frame-btn__line--tall"></span>
        <span class="frame-btn__line frame-btn__line--flat"></span>
      </span>
      <span class="frame-btn__solid"></span>
      <span class="frame-btn__text">进入网站</span>
    </a>
    <div id="particles"></div>
  </div>
  <!-- 充当背景墙，不知道为啥直接给welcome加只能显示一部分，应该是样式冲突了 -->
</template>

<script>
import particlesJson from "assets/json/particles.json";
export default {
  name: "index",
  props: {},
  components: {},
  data() {
    return {
      isActive: true,
    };
  },
  mounted() {
    particlesJS("particles", particlesJson);
  },
  methods: {
    func() {
      this.isActive = false;
    },
    getImgUrl(index) {
      return require(`@/assets/img/star${index}.png`);
    },
    goHome() {
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="scss" scoped>
.welcome {
  height: 100vh;
  background: url("~assets/img/Group.png") #071411 0 0/100%;
  background-repeat: no-repeat;
  position: relative;
  margin: 0 auto;
  color: $theme-color;
  font-family: FZYaoti;
  overflow-y: hidden;
  @include flex-around(column);
  h3 {
    text-shadow: 0 0 10px $theme-color;
    font-size: 45px;
    font-weight: 400;
  }
  .typed-element {
    font-size: 20px;
    position: absolute;
    top: 400px;
  }
  .family {
    width: 250px;
    height: 250px;
    position: relative;
    border-radius: 50%;
    background: -webkit-radial-gradient(
      rgb(224, 197, 108),
      rgba(70, 74, 70, 0.1)
    );
    box-shadow: 0 0 20px 20px rgba(107, 121, 107, 0.4);
    animation-duration: 2s;
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 60%;
    width: 60%;
  }
  #particles {
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
}
$ease_out: cubic-bezier(0.165, 0.84, 0.44, 1);

@mixin transition() {
  transition: 700ms $ease_out;

  &:hover {
    transition: 400ms $ease_out;
  }
}

$framePad: 5px;
.frame-btn {
  position: relative;
  margin-top: 50px;
  line-height: $framePad * 2;
  display: inline-block;
  padding: ($framePad * 5) ($framePad * 6);
  font-size: $framePad * 3;
  letter-spacing: $framePad * 0.6;
  text-decoration: none;
  z-index: 999;
  &__text {
    color: #b2876f;
    font-weight: bold;
    text-transform: uppercase;
    transition: 300ms ease;
    position: relative;

    .frame-btn:hover & {
      color: white;
    }
  }
  &__solid {
    position: absolute;
    top: 0;
    left: 0;
    margin: $framePad * 2;
    background-color: #b2876f;
    width: calc(100% - (#{$framePad} * 4));
    height: calc(100% - (#{$framePad} * 4));
    transform-origin: 50%;
    transform: scale(0.85);
    opacity: 0;
    transition: 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

    .frame-btn:hover & {
      opacity: 1;
      transform: scale(1);
    }
  }
  &__outline {
    position: absolute;
    top: 0;
    left: 0;
    // background-color: rgba(black, 0.05);

    &--tall {
      margin: 0 $framePad;
      width: calc(100% - (#{$framePad} * 2));
      height: 100%;
    }
    &--flat {
      margin: $framePad 0;
      height: calc(100% - (#{$framePad} * 2));
      width: 100%;
    }
  }
  &__line {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    &--tall {
      &:before,
      &:after {
        height: 100%;
        width: $framePad * 0.2;
        top: 0;

        .frame-btn:hover .frame-btn__outline--flat & {
          transform: scaleY(0);
        }
        .frame-btn:hover .frame-btn__outline--tall & {
          margin: $framePad 0;
          height: calc(100% - (#{$framePad} * 2));
        }
      }

      &:before {
        left: 0;
      }
      &:after {
        right: 0;
      }
    }
    &--flat {
      &:before,
      &:after {
        width: 100%;
        height: $framePad * 0.2;
        left: 0;

        .frame-btn:hover .frame-btn__outline--tall & {
          transform: scaleX(0);
        }
        .frame-btn:hover .frame-btn__outline--flat & {
          margin: 0 $framePad;
          width: calc(100% - (#{$framePad} * 2));
        }
      }

      &:before {
        top: 0;
      }
      &:after {
        bottom: 0;
      }
    }
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      background-color: #b2876f;
      transition: 800ms cubic-bezier(0.165, 0.84, 0.44, 1);
      .frame-btn:hover & {
        transition: 400ms cubic-bezier(0.165, 0.84, 0.44, 1);
      }
    }
  }
}
</style>
