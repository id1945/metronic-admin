<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#basic-usage"></a>
      Basic usage
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">The basic skeleton.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-skeleton />

      <CodeHighlighter lang="html">{{ code1 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code1 } from "./data";

export default defineComponent({
  name: "basic-usage",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code1,
    };
  },
});
</script>
