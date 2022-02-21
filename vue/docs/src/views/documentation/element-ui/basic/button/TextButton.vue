<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#text-button"></a>
      Text Button
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Buttons without border and background.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-button type="text">Text Button</el-button>
      <el-button type="text" disabled>Text Button</el-button>

      <CodeHighlighter lang="html">{{ code3 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "@/views/documentation/element-ui/basic/button/code";

export default defineComponent({
  name: "text-button",
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
