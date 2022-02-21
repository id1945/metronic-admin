<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#with-icon-and-description"></a>
      With icon and description
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Alert components are non-overlay elements in the page that does not
      disappear automatically.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-alert
        class="mb-5"
        title="success alert"
        type="success"
        description="more text description"
        show-icon
      >
      </el-alert>
      <el-alert
        class="mb-5"
        title="info alert"
        type="info"
        description="more text description"
        show-icon
      >
      </el-alert>
      <el-alert
        class="mb-5"
        title="warning alert"
        type="warning"
        description="more text description"
        show-icon
      >
      </el-alert>
      <el-alert
        title="error alert"
        type="error"
        description="more text description"
        show-icon
      >
      </el-alert>

      <CodeHighlighter lang="html">{{ code7 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code7 } from "./data";

export default defineComponent({
  name: "with-icon-and-description",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code7,
    };
  },
});
</script>
