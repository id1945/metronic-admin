<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#other-measurements"></a>
      Other measurements
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      You can choose week, month, year or multiple dates by extending the
      standard date picker component.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div class="container">
        <div class="block mb-5">
          <span class="demonstration" style="margin-right: 5px">Week</span>
          <el-date-picker
            v-model="value1"
            type="week"
            format="[Week] ww"
            placeholder="Pick a week"
          >
          </el-date-picker>
        </div>
        <div class="block mb-5">
          <span class="demonstration" style="margin-right: 5px">Month</span>
          <el-date-picker
            v-model="value2"
            type="month"
            placeholder="Pick a month"
          >
          </el-date-picker>
        </div>
      </div>
      <div class="container">
        <div class="block mb-5">
          <span class="demonstration" style="margin-right: 5px">Year</span>
          <el-date-picker
            v-model="value3"
            type="year"
            placeholder="Pick a year"
          >
          </el-date-picker>
        </div>
        <div class="block mb-5">
          <span class="demonstration" style="margin-right: 5px">Dates</span>
          <el-date-picker
            type="dates"
            v-model="value4"
            placeholder="Pick one or more dates"
          >
          </el-date-picker>
        </div>
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
  name: "other-measurements",
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
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
