<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#month-range"></a>
      Month Range
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Picking a month range is supported.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div class="block mb-5">
        <span class="demonstration" style="margin-right: 5px">Default</span>
        <el-date-picker
          v-model="value1"
          type="monthrange"
          range-separator="To"
          start-placeholder="Start month"
          end-placeholder="End month"
        >
        </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration" style="margin-right: 5px"
          >With quick options</span
        >
        <el-date-picker
          v-model="value2"
          type="monthrange"
          align="right"
          unlink-panels
          range-separator="To"
          start-placeholder="Start month"
          end-placeholder="End month"
          :shortcuts="shortcuts"
        >
        </el-date-picker>
      </div>

      <CodeHighlighter :field-height="400" lang="html">{{
        code4
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
import { code4 } from "./data";

export default defineComponent({
  name: "month-range",
  data() {
    return {
      shortcuts: [
        {
          text: "This month",
          value: [new Date(), new Date()],
        },
        {
          text: "This year",
          value: (() => {
            const end = new Date();
            const start = new Date(new Date().getFullYear(), 0);
            return [start, end];
          })(),
        },
        {
          text: "Last 6 months",
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setMonth(start.getMonth() - 6);
            return [start, end];
          })(),
        },
      ],
      value1: "",
      value2: "",
    };
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return { code4 };
  },
});
</script>
