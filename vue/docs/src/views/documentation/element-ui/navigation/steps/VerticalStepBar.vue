<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#vertical-step-bar"></a>
      Vertical step bar
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Vertical step bars.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div style="height: 300px">
        <el-steps direction="vertical" :active="1">
          <el-step title="Step 1"></el-step>
          <el-step title="Step 2"></el-step>
          <el-step title="Step 3"></el-step>
        </el-steps>
      </div>

      <CodeHighlighter lang="html">{{ code6 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code6 } from "./data";

export default defineComponent({
  name: "vertical-step-bar",
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
