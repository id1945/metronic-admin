<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#types"></a>
      Types
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Used to show the feedback of Success, Warning, Message and Error
      activities.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-button :plain="true" @click="open2">success</el-button>
      <el-button :plain="true" @click="open3">warning</el-button>
      <el-button :plain="true" @click="open1">message</el-button>
      <el-button :plain="true" @click="open4">error</el-button>

      <CodeHighlighter :field-height="400" lang="html">{{
        code2
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code2 } from "./data";

export default defineComponent({
  name: "types",
  methods: {
    open1() {
      this.$message("This is a message.");
    },
    open2() {
      this.$message({
        message: "Congrats, this is a success message.",
        type: "success",
      });
    },

    open3() {
      this.$message({
        message: "Warning, this is a warning message.",
        type: "warning",
      });
    },

    open4() {
      this.$message.error("Oops, this is a error message.");
    },
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code2,
    };
  },
});
</script>
