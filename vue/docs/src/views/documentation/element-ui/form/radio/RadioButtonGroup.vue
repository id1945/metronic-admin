<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#radio-button-group"></a>
      Radio button group
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Suitable for choosing from some mutually exclusive options.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-radio-group v-model="radio">
        <el-radio :label="3">Option A</el-radio>
        <el-radio :label="6">Option B</el-radio>
        <el-radio :label="9">Option C</el-radio>
      </el-radio-group>

      <CodeHighlighter lang="html">{{ code3 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "./data";

export default defineComponent({
  name: "radio-button-group",
  data() {
    return {
      radio: 3,
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
