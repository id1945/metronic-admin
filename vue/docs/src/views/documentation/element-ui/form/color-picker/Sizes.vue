<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#sizes"></a>
      Sizes
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-color-picker
        v-model="color"
        style="margin-right: 5px"
      ></el-color-picker>
      <el-color-picker
        v-model="color"
        size="medium"
        style="margin-right: 5px"
      ></el-color-picker>
      <el-color-picker
        v-model="color"
        size="small"
        style="margin-right: 5px"
      ></el-color-picker>
      <el-color-picker
        v-model="color"
        size="mini"
        style="margin-right: 5px"
      ></el-color-picker>

      <CodeHighlighter lang="html">{{ code4 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code4 } from "./data";

export default defineComponent({
  name: "sizes",
  data() {
    return {
      color: "#409EFF",
    };
  },
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
