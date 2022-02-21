<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#prompt"></a>
      Prompt
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Prompt is used when user input is required.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-button type="text" @click="open">Click to open Message Box</el-button>

      <CodeHighlighter lang="html">{{ code3 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "./data";

export default defineComponent({
  name: "prompt",
  components: {
    CodeHighlighter,
  },
  methods: {
    open() {
      this.$prompt("Please input your e-mail", "Tip", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        inputPattern:
          /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: "Invalid Email",
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "Your email is:" + value,
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Input canceled",
          });
        });
    },
  },
  setup() {
    return {
      code3,
    };
  },
});
</script>
