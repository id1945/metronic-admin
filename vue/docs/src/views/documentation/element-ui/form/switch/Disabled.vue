<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#disabled"></a>
      Disabled
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-switch style="margin-right: 5px" v-model="value1" disabled>
      </el-switch>
      <el-switch v-model="value2" disabled> </el-switch>

      <CodeHighlighter lang="html">{{ code4 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code4 } from "./data";

export default defineComponent({
  name: "disabled",
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
      code4,
    };
  },
});
</script>
