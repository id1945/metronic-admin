<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#customized-content"></a>
      Customized content
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-progress :percentage="50" class="mb-5">
        <el-button type="text">Content</el-button>
      </el-progress>
      <el-progress
        :text-inside="true"
        :stroke-width="20"
        :percentage="50"
        status="exception"
        class="mb-5"
      >
        <span>Content</span>
      </el-progress>
      <el-progress
        type="circle"
        :percentage="100"
        status="success"
        class="mb-5"
      >
        <el-button type="success" icon="el-icon-check" circle></el-button>
      </el-progress>
      <el-progress type="dashboard" :percentage="80" class="mb-5">
        <template #default="{ percentage }">
          <span class="percentage-value">{{ percentage }}%</span>
          <span class="percentage-label">Progressing</span>
        </template>
      </el-progress>

      <CodeHighlighter lang="html">{{ code6 }}</CodeHighlighter>
    </div>
  </div>
</template>

<style>
.percentage-value {
  margin-top: 10px;
  font-size: 28px;
}

.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code6 } from "./data";

export default defineComponent({
  name: "customized-content",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code6,
    };
  },
});
</script>
