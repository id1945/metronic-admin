<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#steps"></a>
      Steps
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Allows you to define incremental steps.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-input-number v-model="num" :step="2"></el-input-number>

      <CodeHighlighter lang="html">{{ code3 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "./data";

export default defineComponent({
  name: "steps",
  data() {
    return {
      num: 5,
    };
  },
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
