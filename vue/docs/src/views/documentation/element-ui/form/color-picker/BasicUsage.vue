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
        <span class="demonstration" style="margin-right: 5px"
          >With default value</span
        >
        <el-color-picker v-model="color1"></el-color-picker>
      </div>
      <div class="block">
        <span class="demonstration" style="margin-right: 5px"
          >With no default value</span
        >
        <el-color-picker v-model="color2"></el-color-picker>
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
  data() {
    return {
      color1: "#409EFF",
      color2: null,
    };
  },
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
