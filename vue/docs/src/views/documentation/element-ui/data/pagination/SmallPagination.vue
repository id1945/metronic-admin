<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#small-pagination"></a>
      Small Pagination
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Use small pagination in the case of limited space.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-pagination small layout="prev, pager, next" :total="50">
      </el-pagination>

      <CodeHighlighter lang="html">{{ code4 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code4 } from "./data";

export default defineComponent({
  name: "small-pagination",
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
