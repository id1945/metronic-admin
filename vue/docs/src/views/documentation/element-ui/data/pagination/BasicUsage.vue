<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#basic-usage"></a>
      Basic usage
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <div class="block">
        <span class="demonstration">When you have few pages</span>
        <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
      </div>
      <div class="block">
        <span class="demonstration">When you have more than 7 pages</span>
        <el-pagination layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>

      <CodeHighlighter lang="html">{{ code1 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code1 } from "./data";

export default defineComponent({
  name: "basic-usage",
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
