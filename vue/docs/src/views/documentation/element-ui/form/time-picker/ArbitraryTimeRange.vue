<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#arbitrary-time-range"></a>
      Arbitrary time range
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Can pick an arbitrary time range.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-time-picker
        style="margin-right: 5px"
        is-range
        v-model="value1"
        range-separator="To"
        start-placeholder="Start time"
        end-placeholder="End time"
      >
      </el-time-picker>
      <el-time-picker
        is-range
        arrow-control
        v-model="value2"
        range-separator="To"
        start-placeholder="Start time"
        end-placeholder="End time"
      >
      </el-time-picker>

      <CodeHighlighter :field-height="400" lang="html">{{
        code2
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<style>
.el-date-editor .el-range-separator {
  width: 10% !important;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code2 } from "./data";

export default defineComponent({
  name: "arbitrary-time-range",
  data() {
    return {
      value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
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
