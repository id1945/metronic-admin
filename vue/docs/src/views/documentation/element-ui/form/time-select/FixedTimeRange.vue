<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#fixed-time-range"></a>
      Fixed time range
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      If start time is picked at first, then the end time will change
      accordingly.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-time-select
        style="margin-right: 5px"
        placeholder="Start time"
        v-model="startTime"
        start="08:30"
        step="00:15"
        end="18:30"
      >
      </el-time-select>
      <el-time-select
        placeholder="End time"
        v-model="endTime"
        start="08:30"
        step="00:15"
        end="18:30"
        :minTime="startTime"
      >
      </el-time-select>

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
  name: "ixed-time-range",
  data() {
    return {
      startTime: "",
      endTime: "",
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
