<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#read-only"></a>
      Read-only
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Read-only Rate is for displaying rating score. Half star is supported.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-rate
        v-model="value"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value} points"
      >
      </el-rate>

      <CodeHighlighter lang="html">{{ code4 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code4 } from "./data";

export default defineComponent({
  name: "read-only",
  data() {
    return {
      value: 3.7,
    };
  },
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
