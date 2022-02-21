<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#circular-progress-bar"></a>
      Circular progress bar
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-progress type="circle" :percentage="0"></el-progress>
      <el-progress type="circle" :percentage="25"></el-progress>
      <el-progress
        type="circle"
        :percentage="100"
        status="success"
      ></el-progress>
      <el-progress
        type="circle"
        :percentage="70"
        status="warning"
      ></el-progress>
      <el-progress
        type="circle"
        :percentage="50"
        status="exception"
      ></el-progress>

      <CodeHighlighter lang="html">{{ code4 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code4 } from "./data";

export default defineComponent({
  name: "circular-progress-bar",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code4,
    };
  },
});
</script>
