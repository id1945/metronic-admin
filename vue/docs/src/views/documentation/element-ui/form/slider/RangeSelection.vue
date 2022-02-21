<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#range-selection"></a>
      Range selection
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Selecting a range of values is supported.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div class="block">
        <el-slider v-model="value" range show-stops :max="10"> </el-slider>
      </div>

      <CodeHighlighter lang="html">{{ code3 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "./data";

export default defineComponent({
  name: "range-selection",
  data() {
    return {
      value: [4, 8],
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
