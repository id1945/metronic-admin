<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#default-time-value-for-start-date-and-end-date"></a>
      Default time value for start date and end date
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <div class="block mb-5">
        <span class="demonstration" style="margin-right: 5px"
          >Start date time 12:00:00</span
        >
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          start-placeholder="Start Date"
          end-placeholder="End Date"
          :default-time="defaultTime1"
        >
        </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration" style="margin-right: 5px"
          >Start date time 12:00:00, end date time 08:00:00</span
        >
        <el-date-picker
          v-model="value2"
          type="datetimerange"
          align="right"
          start-placeholder="Start Date"
          end-placeholder="End Date"
          :default-time="defaultTime2"
        >
        </el-date-picker>
      </div>

      <CodeHighlighter :field-height="400" lang="html">{{
        code3
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "./data";

export default defineComponent({
  name: "default-time-value-for-start-date-and-end-date",
  data() {
    return {
      value1: "",
      value2: "",
      defaultTime1: [new Date(2000, 1, 1, 12, 0, 0)], // '12:00:00'
      defaultTime2: [
        new Date(2000, 1, 1, 12, 0, 0),
        new Date(2000, 2, 1, 8, 0, 0),
      ], // '12:00:00', '08:00:00'
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
