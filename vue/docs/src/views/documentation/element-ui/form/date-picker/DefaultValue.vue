<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#default-value"></a>
      Default Value
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      If user hasn't picked a date, shows today's calendar by default. You can
      use <code>default-value</code> to set another date. Its value should be
      parsable by <code>new Date()</code>.<br />

      If type is <code>daterange</code>, <code>default-value</code> sets the
      left side calendar.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div class="block mb-5">
        <span class="demonstration" style="margin-right: 5px">date</span>
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="Pick a date"
          :default-value="new Date(2010, 9, 1)"
        >
        </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration" style="margin-right: 5px">daterange</span>
        <el-date-picker
          v-model="value2"
          type="daterange"
          align="right"
          start-placeholder="Start Date"
          end-placeholder="End Date"
          :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
        >
        </el-date-picker>
      </div>

      <CodeHighlighter field-height="400" lang="html">{{
        code5
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code5 } from "./data";

export default defineComponent({
  name: "default-value",
  data() {
    return {
      value1: "",
      value2: "",
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
