<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#max-value"></a>
      Max value
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">You can customize the max value.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-badge :value="200" :max="99" class="item">
        <el-button size="small">comments</el-button>
      </el-badge>
      <el-badge :value="100" :max="10" class="item">
        <el-button size="small">replies</el-button>
      </el-badge>

      <CodeHighlighter lang="html">{{ code2 }}</CodeHighlighter>
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
import { code2 } from "./data";

export default defineComponent({
  name: "max-value",
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
