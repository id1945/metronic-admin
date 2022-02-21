<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#icon-button"></a>
      Icon Button
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use icons to add more meaning to Button. You can use icon alone to save
      some space, or use it with text.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
      <el-button type="primary" icon="el-icon-search">Search</el-button>
      <el-button type="primary"
        >Upload<i class="el-icon-upload el-icon-right"></i
      ></el-button>

      <CodeHighlighter lang="html">{{ code4 }}</CodeHighlighter>
    </div>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code4 } from "@/views/documentation/element-ui/basic/button/code";

export default defineComponent({
  name: "icon-button",
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
