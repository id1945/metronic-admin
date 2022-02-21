<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#custom-tab"></a>
      Custom Tab
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      You can use named slot to customize the tab label content.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-tabs type="border-card">
        <el-tab-pane>
          <template #label>
            <span><i class="el-icon-date"></i> Route</span>
          </template>
          Route
        </el-tab-pane>
        <el-tab-pane label="Config">Config</el-tab-pane>
        <el-tab-pane label="Role">Role</el-tab-pane>
        <el-tab-pane label="Task">Task</el-tab-pane>
      </el-tabs>

      <CodeHighlighter lang="html">{{ code5 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code5 } from "./data";

export default defineComponent({
  name: "custom-tab",
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
