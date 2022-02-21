<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#centered-text"></a>
      Centered text
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use the <code>center</code> attribute to center the text.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-alert
        class="mb-5"
        title="success alert"
        type="success"
        center
        show-icon
      >
      </el-alert>
      <el-alert class="mb-5" title="info alert" type="info" center show-icon>
      </el-alert>
      <el-alert
        class="mb-5"
        title="warning alert"
        type="warning"
        center
        show-icon
      >
      </el-alert>
      <el-alert title="error alert" type="error" center show-icon> </el-alert>

      <CodeHighlighter lang="html">{{ code5 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code5 } from "./data";

export default defineComponent({
  name: "centered-text",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code5,
    };
  },
});
</script>
