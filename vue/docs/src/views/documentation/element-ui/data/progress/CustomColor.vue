<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#custom-color"></a>
      Custom color
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      You can use <code>color</code> attr to set the progress bar color. it
      accepts color string, function, or array.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-progress
        :percentage="percentage"
        :color="customColor"
        class="mb-5"
      ></el-progress>

      <el-progress
        :percentage="percentage"
        :color="customColorMethod"
        class="mb-5"
      ></el-progress>

      <el-progress
        :percentage="percentage"
        :color="customColors"
        class="mb-5"
      ></el-progress>
      <div>
        <el-button-group>
          <el-button icon="el-icon-minus" @click="decrease"></el-button>
          <el-button icon="el-icon-plus" @click="increase"></el-button>
        </el-button-group>
      </div>

      <CodeHighlighter :field-height="400" lang="html">{{
        code3
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "./data";

export default defineComponent({
  name: "custom-color",
  data() {
    return {
      percentage: 20,
      customColor: "#409eff",
      customColors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
    };
  },
  methods: {
    customColorMethod(percentage) {
      if (percentage < 30) {
        return "#909399";
      } else if (percentage < 70) {
        return "#e6a23c";
      } else {
        return "#67c23a";
      }
    },
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code3,
    };
  },
});
</script>
