<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#customizations"></a>
      Customizations
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Displays text content other than numbers.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-badge value="new" class="item">
        <el-button size="small">comments</el-button>
      </el-badge>
      <el-badge value="hot" class="item">
        <el-button size="small">replies</el-button>
      </el-badge>

      <CodeHighlighter lang="html">{{ code3 }}</CodeHighlighter>
    </div>
  </div>
</template>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "./data";

export default defineComponent({
  name: "customizations",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code3,
    };
  },
});
</script>
