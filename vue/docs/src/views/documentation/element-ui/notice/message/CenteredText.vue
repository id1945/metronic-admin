<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#centered-text"></a>
      Centered text
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use the <code>center</code> attribute to center the text.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-button :plain="true" @click="openCenter">Centered text</el-button>

      <CodeHighlighter lang="html">{{ code4 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code4 } from "./data.ts";

export default defineComponent({
  name: "centered-text",
  components: {
    CodeHighlighter,
  },
  methods: {
    openCenter() {
      this.$message({
        message: "Centered text",
        center: true,
      });
    },
  },
  setup() {
    return {
      code4,
    };
  },
});
</script>
́
