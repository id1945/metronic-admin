<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#fixed-time-picker"></a>
      Fixed time picker
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Provide a list of fixed time for users to choose.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-time-select
        v-model="value"
        start="08:30"
        step="00:15"
        end="18:30"
        placeholder="Select time"
      >
      </el-time-select>

      <CodeHighlighter :field-height="400" lang="html">{{
        code1
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code1 } from "./data";

export default defineComponent({
  name: "fixed-time-picker",
  data() {
    return {
      value: "",
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
