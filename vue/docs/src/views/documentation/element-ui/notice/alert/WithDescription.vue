<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#with-description"></a>
      With Description
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Description includes a message with more detailed information.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-alert
        title="with description"
        type="success"
        description="This is a description."
      >
      </el-alert>

      <CodeHighlighter lang="html">{{ code6 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code6 } from "./data";

export default defineComponent({
  name: "with-description",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code6,
    };
  },
});
</script>
