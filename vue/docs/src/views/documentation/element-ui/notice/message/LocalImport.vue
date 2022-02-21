<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#local-import"></a>
      Local import
    </h2>
    <!--end::Heading-->

    <CodeHighlighter lang="html">{{
      `import { ElMessage } from 'element-plus';`
    }}</CodeHighlighter>

    <!--begin::Block-->
    <div class="py-5">
      In this case you should call <code>ElMessage(options)</code>. We have also
      registered methods for different types, e.g.
      <code>ElMessage.success(options)</code>. You can call
      <code>ElMessage.closeAll()</code> to manually close all the instances.
    </div>
    <!--end::Block-->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";

export default defineComponent({
  name: "local-import",
  components: {
    CodeHighlighter,
  },
});
</script>
