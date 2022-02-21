<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#basic"></a>
      Basic
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-page-header @back="goBack" content="detail"> </el-page-header>

      <CodeHighlighter lang="html">{{ code1 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code1 } from "./data";

export default defineComponent({
  name: "basic",
  components: {
    CodeHighlighter,
  },
  methods: {
    goBack() {
      console.log("go back");
    },
  },
  setup() {
    return {
      code1,
    };
  },
});
</script>
