<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#step-bar-with-icon"></a>
      Step bar with icon
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      A variety of custom icons can be used in the step bar.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-steps :active="1">
        <el-step title="Step 1" icon="el-icon-edit"></el-step>
        <el-step title="Step 2" icon="el-icon-upload"></el-step>
        <el-step title="Step 3" icon="el-icon-picture"></el-step>
      </el-steps>

      <CodeHighlighter lang="html">{{ code5 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code5 } from "./data";

export default defineComponent({
  name: "step-bar-with-icon",
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
