<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#basic-usage"></a>
      Basic usage
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Radio should not have too many options. Otherwise, use the Select
      component instead.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-radio v-model="radio" label="1">Option A</el-radio>
      <el-radio v-model="radio" label="2">Option B</el-radio>

      <CodeHighlighter lang="html">{{ code1 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code1 } from "./data";

export default defineComponent({
  name: "basic-usage",
  components: {
    CodeHighlighter,
  },
  setup() {
    const radio = ref("1");
    return {
      radio,
      code1,
    };
  },
});
</script>
