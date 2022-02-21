<template>
  <div className="mb-10">
    <!--begin::Heading-->
    <h2 className="anchor fw-bolder mb-5">
      <a href="#disabled-state"></a>
      Disabled State
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div className="py-5">Disabled state for checkbox.</div>
    <!--end::Block-->

    <div className="rounded border p-10">
      <el-checkbox v-model="checked1" disabled>Option</el-checkbox>
      <el-checkbox v-model="checked2" disabled>Option</el-checkbox>

      <CodeHighlighter lang="html">{{ code2 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code2 } from "./data";

export default defineComponent({
  name: "disabeld-state",
  data() {
    return {
      checked1: false,
      checked2: true,
    };
  },
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
