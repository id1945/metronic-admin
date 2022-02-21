<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#basic"></a>
      Basic
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Basic text link</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div>
        <el-link href="https://element.eleme.io" target="_blank"
          >default</el-link
        >
        <el-link type="primary">primary</el-link>
        <el-link type="success">success</el-link>
        <el-link type="warning">warning</el-link>
        <el-link type="danger">danger</el-link>
        <el-link type="info">info</el-link>
      </div>

      <CodeHighlighter lang="html">{{ code1 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code1 } from "@/views/documentation/element-ui/basic/link/code";

export default defineComponent({
  name: "basic",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code1,
    };
  },
});
</script>
