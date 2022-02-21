<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#arbitrary-time-picker"></a>
      Arbitrary time picker
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Can pick an arbitrary time.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-time-picker
        style="margin-right: 5px"
        v-model="value1"
        :disabled-hours="disabledHours"
        :disabled-minutes="disabledMinutes"
        :disabled-seconds="disabledSeconds"
        placeholder="Arbitrary time"
      >
      </el-time-picker>
      <el-time-picker
        arrow-control
        v-model="value2"
        :disabled-hours="disabledHours"
        :disabled-minutes="disabledMinutes"
        :disabled-seconds="disabledSeconds"
        placeholder="Arbitrary time"
      >
      </el-time-picker>

      <CodeHighlighter :field-height="400" lang="html">{{
        code1
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code1 } from "./data.ts";

const makeRange = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

export default defineComponent({
  name: "arbitrary-time-picker",
  data() {
    return {
      value1: new Date(2016, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40),
    };
  },
  components: {
    CodeHighlighter,
  },
  methods: {
    // e.g. allow 17:30:00 - 18:30:00
    disabledHours() {
      return makeRange(0, 16).concat(makeRange(19, 23));
    },
    disabledMinutes(hour) {
      if (hour === 17) {
        return makeRange(0, 29);
      }
      if (hour === 18) {
        return makeRange(31, 59);
      }
    },
    disabledSeconds(hour, minute) {
      if (hour === 18 && minute === 30) {
        return makeRange(1, 59);
      }
    },
  },
  setup() {
    return {
      code1,
    };
  },
});
</script>
