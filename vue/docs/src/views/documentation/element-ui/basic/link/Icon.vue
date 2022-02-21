<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#icon"></a>
      Icon
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Link with icon</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div>
        <el-link icon="el-icon-edit">Edit</el-link>
        <el-link>Check<i class="el-icon-view el-icon--right"></i> </el-link>
      </div>

      <CodeHighlighter lang="html">{{ code4 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code4 } from "@/views/documentation/element-ui/basic/link/code";

export default defineComponent({
  name: "icon",
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
