<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#tab-position"></a>
      Tab position
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      You can use <code>tab-position</code> attribute to set the tab's position.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
        <el-radio-button label="top">top</el-radio-button>
        <el-radio-button label="right">right</el-radio-button>
        <el-radio-button label="bottom">bottom</el-radio-button>
        <el-radio-button label="left">left</el-radio-button>
      </el-radio-group>

      <el-tabs :tab-position="tabPosition" style="height: 200px">
        <el-tab-pane label="User">User</el-tab-pane>
        <el-tab-pane label="Config">Config</el-tab-pane>
        <el-tab-pane label="Role">Role</el-tab-pane>
        <el-tab-pane label="Task">Task</el-tab-pane>
      </el-tabs>

      <CodeHighlighter lang="html">{{ code4 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code4 } from "./data";

export default defineComponent({
  name: "tab-position",
  data() {
    return {
      tabPosition: "left",
    };
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code4,
    };
  },
});
</script>
