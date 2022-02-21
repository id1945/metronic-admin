<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#clearable"></a>
      Clearable
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-input placeholder="Please input" v-model="input" clearable>
      </el-input>

      <CodeHighlighter lang="html">{{ code3 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "./data";

export default defineComponent({
  name: "clearable",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      input: ref(""),
      code3,
    };
  },
});
</script>
