<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#date-formats"></a>
      Date Formats
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>format</code> to control displayed text's format in the input
      box.<br />

      By default, the component accepts and emits a
      <code>Date</code> object.<br />

      Check the list here of all available formats of Day.js.<br />
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div class="block">
        <span class="demonstration">Emits Date object</span>
        <div class="demonstration">Value: {{ value1 }}</div>
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="Pick a Date"
          format="YYYY/MM/DD"
        >
        </el-date-picker>
      </div>

      <CodeHighlighter :field-height="400" lang="html">{{
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
  name: "date-formats",
  data() {
    return {
      value1: "",
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
