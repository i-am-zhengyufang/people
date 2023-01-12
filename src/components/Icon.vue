
<script>
export default {
  name: "Icon",
  props: {
    size: {
      type: Number,
      default: 16,
    },
    type: {
      type: String,
      required: true,
    },
    title: String,
    color: String,
  },
  components: {},
  data() {
    return {};
  },
  render() {
    const Icon = (
      <i
        onClick={this.iconClick}
        title={this.title}
        class={`${this.getIconCls()}`}
        style={this.getIconStyle()}
      ></i>
    );
    return Icon;
  },
  methods: {
    getIconCls() {
      let Class = `iconfont icon-component icon-${this.type}`;
      return Class;
    },
    getIconStyle() {
      let style = {};
      if (this.size) style.fontSize = this.size;
      if (this.color) style.color = this.color;
      console.log(style);
      return style;
    },
    iconClick(e) {
      this.$emit("iconClick", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-component {
  cursor: pointer;
  display: inline-block;
  text-align: center;
}
</style>