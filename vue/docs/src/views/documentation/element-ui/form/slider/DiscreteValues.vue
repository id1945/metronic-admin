<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#discrete-values"></a>
      Discrete values
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">The options can be discrete.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div class="block">
        <span class="demonstration">Breakpoints not displayed</span>
        <el-slider v-model="value1" :step="10"> </el-slider>
      </div>
      <div class="block">
        <span class="demonstration">Breakpoints displayed</span>
        <el-slider v-model="value2" :step="10" show-stops> </el-slider>
      </div>

      <CodeHighlighter :field-height="400" lang="html">{{
        code2
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code2 } from "./data";

export default defineComponent({
  name: "discrete-values",
  data() {
    return {
      value1: 0,
      value2: 0,
    };
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code2,
    };
  },
});
</script>
