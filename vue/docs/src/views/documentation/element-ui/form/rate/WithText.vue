<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#with-text"></a>
      With text
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Using text to indicate rating score</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-rate
        v-model="value"
        :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
        show-text
      >
      </el-rate>

      <CodeHighlighter lang="html">{{ code3 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "./data";

export default defineComponent({
  name: "with-text",
  data() {
    return {
      value: null,
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
