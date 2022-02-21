<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#show-marks"></a>
      Show marks
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <div class="block">
        <el-slider v-model="value" range :marks="marks"> </el-slider>
      </div>

      <CodeHighlighter lang="html">{{ code5 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code5 } from "./data";

export default defineComponent({
  name: "show-marks",
  data() {
    return {
      value: [30, 60],
      marks: {
        0: "0°C",
        8: "8°C",
        37: "37°C",
        50: {
          style: {
            color: "#1989FA",
          },
          label: "50%",
        },
      },
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
