<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#step-bar-that-contains-status"></a>
      Step bar that contains status
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Shows the status of the step for each step.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-steps :space="200" :active="1" finish-status="success">
        <el-step title="Done"></el-step>
        <el-step title="Processing"></el-step>
        <el-step title="Step 3"></el-step>
      </el-steps>

      <CodeHighlighter lang="html">{{ code2 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code2 } from "./data";

export default defineComponent({
  name: "step-bar-that-contains-status",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code2,
    };
  },
});
</script>
