<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#limit-length"></a>
      Limit length
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-input
        type="text"
        placeholder="Please input"
        v-model="text"
        maxlength="10"
        show-word-limit
      >
      </el-input>
      <div style="margin: 20px 0"></div>
      <el-input
        type="textarea"
        placeholder="Please input"
        v-model="textarea"
        maxlength="30"
        show-word-limit
      >
      </el-input>

      <CodeHighlighter :field-height="400" lang="html">{{
        code13
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code13 } from "./data";

export default defineComponent({
  name: "limit-length",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      text: ref(""),
      textarea: ref(""),
      code13,
    };
  },
});
</script>
