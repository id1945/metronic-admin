<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#sizes"></a>
      Sizes
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Besides default size, Tag component provides three additional sizes for
      you to choose among different scenarios.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-tag>Default</el-tag>
      <el-tag size="medium">Medium</el-tag>
      <el-tag size="small">Small</el-tag>
      <el-tag size="mini">Mini</el-tag>

      <CodeHighlighter lang="html">{{ code4 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code4 } from "./data";

export default defineComponent({
  name: "sizes",
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
