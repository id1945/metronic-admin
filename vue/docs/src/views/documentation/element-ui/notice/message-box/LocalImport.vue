<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#local-import"></a>
      Local import
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      If you prefer importing <code>MessageBox</code> on demand:
    </div>
    <!--end::Block-->

    <CodeHighlighter lang="html">{{
      `import { ElMessageBox } from 'element-plus';`
    }}</CodeHighlighter>

    <!--begin::Block-->
    <div class="py-5">
      The corresponding methods are: <code>ElMessageBox</code>,
      <code>ElMessageBox.alert</code>, <code>ElMessageBox.confirm</code> and
      <code>ElMessageBox.prompt</code>. The parameters are the same as above.
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
  setup() {
    return {};
  },
});
</script>
