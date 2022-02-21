<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#loading"></a>
      Loading
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-switch style="margin-right: 5px" v-model="value1" loading>
      </el-switch>
      <el-switch v-model="value2" loading> </el-switch>

      <CodeHighlighter lang="html">{{ code5 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code5 } from "./data";

export default defineComponent({
  name: "loading",
  data() {
    return {
      value1: true,
      value2: false,
    };
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code5,
    };
  },
});
</script>
