<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#closable"></a>
      Closable
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">A close button can be added.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-button :plain="true" @click="open1">message</el-button>
      <el-button :plain="true" @click="open2">success</el-button>
      <el-button :plain="true" @click="open3">warning</el-button>
      <el-button :plain="true" @click="open4">error</el-button>

      <CodeHighlighter :field-height="400" lang="html">{{
        code3
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "./data";

export default defineComponent({
  name: "closable",
  components: {
    CodeHighlighter,
  },
  methods: {
    open1() {
      this.$message({
        showClose: true,
        message: "This is a message.",
      });
    },

    open2() {
      this.$message({
        showClose: true,
        message: "Congrats, this is a success message.",
        type: "success",
      });
    },

    open3() {
      this.$message({
        showClose: true,
        message: "Warning, this is a warning message.",
        type: "warning",
      });
    },

    open4() {
      this.$message({
        showClose: true,
        message: "Oops, this is a error message.",
        type: "error",
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
́́
