<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#fixed-position"></a>
      Fixed position
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      The affix component provides two fixed positions: <code>top</code> and
      <code>bottom</code>.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-affix position="bottom" :offset="20">
        <el-button type="primary">Offset bottom 20px</el-button>
      </el-affix>

      <CodeHighlighter lang="html">{{ code3 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "./data";

export default defineComponent({
  name: "fixed-position",
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
