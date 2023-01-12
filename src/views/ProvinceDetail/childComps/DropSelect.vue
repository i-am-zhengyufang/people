<template>
  <el-select
    v-model="value"
    placeholder="请选择"
    @change="change"
    :popper-append-to-body="false"
  >
    <el-option v-for="item in options" :key="item" :value="item"> </el-option>
  </el-select>
</template>

<script>
export default {
  name: "DropSelect",
  components: {},
  data() {
    return {
      // value: "",
      options: this.$root.data.provinceName,
      value: this.$store.state.clickName,
    };
  },
  created() {
    console.log("www");
  },
  methods: {
    change(name) {
      console.log(name);
      this.$emit("hanleBack", name);
    },
  },
};
</script>
<style lang="scss" scoped>
.el-select {
  width: 130px;
  ::v-deep .el-input__inner {
    background-color: transparent;
  }

  ::v-deep .el-scrollbar,
  ::v-deep .el-select-dropdown {
    background-color: transparent;
    color: #fff;
  }

  ::v-deep .el-scrollbar__wrap,
  ::v-deep .el-select-dropdown__list {
    background-color: #0b1a37;
    color: #fff;
  }

  ::v-deep .el-select-dropdown__item.hover,
  .el-select-dropdown__item:hover {
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
  }
}
</style>