<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#disabled"></a>
      Disabled
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Disabled state of link</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div>
        <el-link disabled>default</el-link>
        <el-link type="primary" disabled>primary</el-link>
        <el-link type="success" disabled>success</el-link>
        <el-link type="warning" disabled>warning</el-link>
        <el-link type="danger" disabled>danger</el-link>
        <el-link type="info" disabled>info</el-link>
      </div>

      <CodeHighlighter lang="html">{{ code2 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code2 } from "@/views/documentation/element-ui/basic/link/code";

export default defineComponent({
  name: "disabled",
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
