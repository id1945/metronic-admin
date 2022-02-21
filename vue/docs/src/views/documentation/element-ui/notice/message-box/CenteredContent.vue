<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#centered-content"></a>
      Centered content
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Content of MessageBox can be centered.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-button type="text" @click="open">Click to open Message Box</el-button>

      <CodeHighlighter :field-height="400" lang="html">{{
        code7
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code7 } from "./data";

export default defineComponent({
  name: "centered-content",
  components: {
    CodeHighlighter,
  },
  methods: {
    open() {
      this.$confirm(
        "This will permanently delete the file. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning",
          center: true,
        }
      )
        .then(() => {
          this.$message({
            type: "success",
            message: "Delete completed",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled",
          });
        });
    },
  },
  setup() {
    return {
      code7,
    };
  },
});
</script>
