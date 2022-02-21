<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#center"></a>
      Center
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Title and description can be centered.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-steps :active="2" align-center>
        <el-step title="Step 1" description="Some description"></el-step>
        <el-step title="Step 2" description="Some description"></el-step>
        <el-step title="Step 3" description="Some description"></el-step>
        <el-step title="Step 4" description="Some description"></el-step>
      </el-steps>

      <CodeHighlighter lang="html">{{ code3 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "./data";

export default defineComponent({
  name: "center",
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
