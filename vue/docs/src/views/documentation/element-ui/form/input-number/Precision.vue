<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#precision"></a>
      Precision
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-input-number
        v-model="num"
        :precision="2"
        :step="0.1"
        :max="10"
      ></el-input-number>

      <CodeHighlighter lang="html">{{ code5 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code5 } from "./data";

export default defineComponent({
  name: "precision",
  data() {
    return {
      num: 1,
    };
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code5,
    };
  },
});
</script>
