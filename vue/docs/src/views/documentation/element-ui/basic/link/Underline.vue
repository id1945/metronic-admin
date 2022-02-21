<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#underline"></a>
      Underline
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Underline of link</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div>
        <el-link :underline="false">Without Underline</el-link>
        <el-link>With Underline</el-link>
      </div>

      <CodeHighlighter lang="html">{{ code3 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "@/views/documentation/element-ui/basic/link/code";

export default defineComponent({
  name: "underline",
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
