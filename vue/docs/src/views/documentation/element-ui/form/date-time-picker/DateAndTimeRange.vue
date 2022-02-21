<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#date-and-time-range"></a>
      Date and time range
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <div class="block mb-5">
        <span class="demonstration" style="margin-right: 5px">Default</span>
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
        >
        </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration" style="margin-right: 5px"
          >With shortcuts</span
        >
        <el-date-picker
          v-model="value2"
          type="datetimerange"
          :shortcuts="shortcuts"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          align="right"
        >
        </el-date-picker>
      </div>

      <CodeHighlighter :field-height="400" lang="html">{{
        code2
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code2 } from "./data";

export default defineComponent({
  name: "date-and-time-range",
  data() {
    return {
      shortcuts: [
        {
          text: "Last week",
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end];
          })(),
        },
        {
          text: "Last month",
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end];
          })(),
        },
        {
          text: "Last 3 months",
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end];
          })(),
        },
      ],
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "",
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
