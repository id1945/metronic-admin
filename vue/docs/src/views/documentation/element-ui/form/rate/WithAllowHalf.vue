<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#with-allow-half"></a>
      With allow-half
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <div class="block">
        <el-rate v-model="value" allow-half />
      </div>

      <CodeHighlighter lang="html">{{ code2 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code2 } from "./data";

export default defineComponent({
  name: "with-allow-half",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      value: ref(null),
      code2,
    };
  },
});
</script>
