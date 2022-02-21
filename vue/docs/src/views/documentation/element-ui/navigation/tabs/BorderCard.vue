<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#border-card"></a>
      Border card
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Border card tabs.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-tabs type="border-card">
        <el-tab-pane label="User">User</el-tab-pane>
        <el-tab-pane label="Config">Config</el-tab-pane>
        <el-tab-pane label="Role">Role</el-tab-pane>
        <el-tab-pane label="Task">Task</el-tab-pane>
      </el-tabs>

      <CodeHighlighter lang="html">{{ code3 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "./data";

export default defineComponent({
  name: "border-card",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code3,
    };
  },
});
</script>
