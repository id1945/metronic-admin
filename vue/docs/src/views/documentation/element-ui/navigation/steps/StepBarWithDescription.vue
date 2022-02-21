<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#step-bar-with-description"></a>
      Step bar with description
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">There is description for each step.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-steps :active="1">
        <el-step title="Step 1" description="Some description"></el-step>
        <el-step title="Step 2" description="Some description"></el-step>
        <el-step title="Step 3" description="Some description"></el-step>
      </el-steps>

      <CodeHighlighter lang="html">{{ code4 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code4 } from "./data";

export default defineComponent({
  name: "step-bar-with-description",
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
