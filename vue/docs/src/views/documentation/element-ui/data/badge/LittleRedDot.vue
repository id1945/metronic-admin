<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#little-red-dot"></a>
      Little red dot
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use a red dot to mark content that needs to be noticed.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-badge is-dot class="item">query</el-badge>
      <el-badge is-dot class="item">
        <el-button
          class="share-button"
          icon="el-icon-share"
          type="primary"
        ></el-button>
      </el-badge>

      <CodeHighlighter lang="html">{{ code4 }}</CodeHighlighter>
    </div>
  </div>
</template>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.el-badge__content.is-fixed.is-dot {
  background-color: red;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code4 } from "./data";

export default defineComponent({
  name: "little-red-dot",
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
