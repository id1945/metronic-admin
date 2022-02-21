<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#sizes"></a>
      Sizes
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Besides default size, Button component provides three additional sizes for
      you to choose among different scenarios.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-row>
        <el-button>Default</el-button>
        <el-button size="medium">Medium</el-button>
        <el-button size="small">Small</el-button>
        <el-button size="mini">Mini</el-button>
      </el-row>
      <el-row>
        <el-button round>Default</el-button>
        <el-button size="medium" round>Medium</el-button>
        <el-button size="small" round>Small</el-button>
        <el-button size="mini" round>Mini</el-button>
      </el-row>

      <CodeHighlighter lang="html">{{ code7 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code7 } from "@/views/documentation/element-ui/basic/button/code";

export default defineComponent({
  name: "sizes",
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
