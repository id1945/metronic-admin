<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#slider-with-input"></a>
      Slider with input box
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Set value via a input box.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div class="block">
        <el-slider v-model="value" show-input> </el-slider>
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
  name: "slider-with-input",
  data() {
    return {
      value: 0,
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
