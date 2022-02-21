<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#internal-percentage"></a>
      Internal percentage
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      In this case the percentage takes no additional space.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-progress
        :text-inside="true"
        :stroke-width="26"
        :percentage="70"
        class="mb-5"
      ></el-progress>
      <el-progress
        :text-inside="true"
        :stroke-width="24"
        :percentage="100"
        status="success"
        class="mb-5"
      ></el-progress>
      <el-progress
        :text-inside="true"
        :stroke-width="22"
        :percentage="80"
        status="warning"
        class="mb-5"
      ></el-progress>
      <el-progress
        :text-inside="true"
        :stroke-width="20"
        :percentage="50"
        status="exception"
        class="mb-5"
      ></el-progress>

      <CodeHighlighter lang="html">{{ code2 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code2 } from "./data";

export default defineComponent({
  name: "internal-percentage",
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
