<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#disabled"></a>
      Disabled
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-input placeholder="Please input" v-model="input" :disabled="true">
      </el-input>

      <CodeHighlighter lang="html">{{ code2 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code2 } from "./data";

export default defineComponent({
  name: "disabled",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      input: ref(""),
      code2,
    };
  },
});
</script>
