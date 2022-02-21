<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#distinguishing-cancel-and-close"></a>
      Distinguishing cancel and close
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Alert components are non-overlay elements in the page that does not
      disappear automatically.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-button type="text" @click="open">Click to open Message Box</el-button>

      <CodeHighlighter :field-height="400" lang="html">{{
        code6
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code6 } from "./data";

export default defineComponent({
  name: "distinguishing-cancel-and-close",
  components: {
    CodeHighlighter,
  },
  methods: {
    open() {
      this.$confirm("You have unsaved changes, save and proceed?", "Confirm", {
        distinguishCancelAndClose: true,
        confirmButtonText: "Save",
        cancelButtonText: "Discard Changes",
      })
        .then(() => {
          this.$message({
            type: "info",
            message: "Changes saved. Proceeding to a new route.",
          });
        })
        .catch((action) => {
          this.$message({
            type: "info",
            message:
              action === "cancel"
                ? "Changes discarded. Proceeding to a new route."
                : "Stay in the current route",
          });
        });
    },
  },
  setup() {
    return {
      code6,
    };
  },
});
</script>
