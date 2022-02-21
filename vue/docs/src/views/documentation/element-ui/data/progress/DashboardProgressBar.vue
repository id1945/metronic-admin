<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#dashboard-progress-bar"></a>
      Dashboard progress bar
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      You also can specify <code>type</code> attribute to
      <code>dashboard</code> to use dashboard progress bar.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-progress
        type="dashboard"
        :percentage="percentage"
        :color="colors"
      ></el-progress>
      <div>
        <el-button-group>
          <el-button icon="el-icon-minus" @click="decrease"></el-button>
          <el-button icon="el-icon-plus" @click="increase"></el-button>
        </el-button-group>
      </div>

      <CodeHighlighter :field-height="400" lang="html">{{
        code5
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code5 } from "./data";

export default defineComponent({
  name: "dashboard-progress-bar",
  data() {
    return {
      percentage: 10,
      colors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
    };
  },
  methods: {
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
      code5,
    };
  },
});
</script>
