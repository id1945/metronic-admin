<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#password-box"></a>
      Password box
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-input
        placeholder="Please input password"
        v-model="input"
        show-password
      ></el-input>

      <CodeHighlighter lang="html">{{ code4 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code4 } from "./data";

export default defineComponent({
  name: "password-box",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      input: ref(""),
      code4,
    };
  },
});
</script>
