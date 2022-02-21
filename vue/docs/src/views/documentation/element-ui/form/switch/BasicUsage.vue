<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#basic-usage"></a>
      Basic usage
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-switch style="margin-right: 5px" v-model="value1"> </el-switch>
      <el-switch
        v-model="value2"
        active-color="#13ce66"
        inactive-color="#ff4949"
      >
      </el-switch>

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
      value1: true,
      value2: true,
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
