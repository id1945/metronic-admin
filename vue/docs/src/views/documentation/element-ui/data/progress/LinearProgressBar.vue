<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#linear-progress-bar"></a>
      Linear progress bar
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-progress :percentage="50" class="mb-5"></el-progress>
      <el-progress
        :percentage="100"
        :format="format"
        class="mb-5"
      ></el-progress>
      <el-progress
        :percentage="100"
        status="success"
        class="mb-5"
      ></el-progress>
      <el-progress
        :percentage="100"
        status="warning"
        class="mb-5"
      ></el-progress>
      <el-progress :percentage="50" status="exception"></el-progress>

      <CodeHighlighter lang="html">{{ code1 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code1 } from "./data";

export default defineComponent({
  name: "linear-progress-bar",
  components: {
    CodeHighlighter,
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? "Full" : `${percentage}%`;
    },
  },
  setup() {
    return {
      code1,
    };
  },
});
</script>
