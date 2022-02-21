<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#loading-button"></a>
      Loading Button
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Click the button to load data, then the button displays a loading state.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-button type="primary" :loading="true">Loading</el-button>

      <CodeHighlighter lang="html">{{ code6 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code6 } from "@/views/documentation/element-ui/basic/button/code";

export default defineComponent({
  name: "loading-button",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code6,
    };
  },
});
</script>
