<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#with-icon"></a>
      With icon
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Displaying an icon improves readability.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-alert class="mb-5" title="success alert" type="success" show-icon>
      </el-alert>
      <el-alert class="mb-5" title="info alert" type="info" show-icon>
      </el-alert>
      <el-alert class="mb-5" title="warning alert" type="warning" show-icon>
      </el-alert>
      <el-alert title="error alert" type="error" show-icon> </el-alert>

      <CodeHighlighter lang="html">{{ code4 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code4 } from "./data";

export default defineComponent({
  name: "with-icon",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code4,
    };
  },
});
</script>
