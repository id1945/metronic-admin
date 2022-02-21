<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#date-and-time"></a>
      Date and time
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <div class="block mb-5">
        <span class="demonstration" style="margin-right: 5px">Default</span>
        <el-date-picker
          v-model="value1"
          type="datetime"
          placeholder="Select date and time"
        >
        </el-date-picker>
      </div>
      <div class="block mb-5">
        <span class="demonstration" style="margin-right: 5px"
          >With shortcuts</span
        >
        <el-date-picker
          v-model="value2"
          type="datetime"
          placeholder="Select date and time"
          :shortcuts="shortcuts"
        >
        </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration" style="margin-right: 5px"
          >With default time</span
        >
        <el-date-picker
          v-model="value3"
          type="datetime"
          placeholder="Select date and time"
          :default-time="defaultTime"
        >
        </el-date-picker>
      </div>

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
  name: "date-and-time",
  data() {
    return {
      shortcuts: [
        {
          text: "Today",
          value: new Date(),
        },
        {
          text: "Yesterday",
          value: (() => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            return date;
          })(),
        },
        {
          text: "A week ago",
          value: (() => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            return date;
          })(),
        },
      ],
      value1: "",
      value2: "",
      value3: "",
      defaultTime: new Date(2000, 1, 1, 12, 0, 0), // '12:00:00'
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
