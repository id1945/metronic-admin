<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#eui-icon"></a>
      Icon
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Element Plus provides a set of common icons.</div>
    <!--end::Block-->
  </div>

  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#basic-usage"></a>
      Basic usage
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Just assign the class name to <code>el-icon-iconName</code>.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <i class="el-icon-edit demo-icon"></i>
      <i class="el-icon-share demo-icon"></i>
      <i class="el-icon-delete demo-icon"></i>
      <el-button type="primary" icon="el-icon-search">Search</el-button>

      <CodeHighlighter lang="html">{{ code }}</CodeHighlighter>
    </div>
  </div>
</template>

<style lang="scss">
.demo-icon {
  color: #606266;
  margin: 0 20px;
  font-size: 1.5em;
  vertical-align: middle;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";

export default defineComponent({
  name: "layout",
  components: {
    CodeHighlighter,
  },
  setup() {
    setCurrentPageBreadcrumbs("Icon", ["Element UI", "Basic"]);

    const code = `<i class="el-icon-edit"></i>
<i class="el-icon-share"></i>
<i class="el-icon-delete"></i>
<el-button type="primary" icon="el-icon-search">Search</el-button>`;

    return {
      code,
    };
  },
});
</script>
