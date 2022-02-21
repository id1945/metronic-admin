<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#extended-value-types"></a>
      Extended value types
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-tooltip :content="'Switch value: ' + value" placement="top">
        <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-value="100"
          inactive-value="0"
        >
        </el-switch>
      </el-tooltip>

      <CodeHighlighter lang="html">{{ code3 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "./data";

export default defineComponent({
  name: "extended-value-types",
  data() {
    return {
      value: "100",
    };
  },
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
