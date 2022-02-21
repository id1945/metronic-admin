<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#command-event"></a>
      Command event
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Clicking each dropdown item fires an event whose parameter is assigned by
      each item.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">Action 1</el-dropdown-item>
            <el-dropdown-item command="b">Action 2</el-dropdown-item>
            <el-dropdown-item command="c">Action 3</el-dropdown-item>
            <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>
            <el-dropdown-item command="e" divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <CodeHighlighter :field-height="400" lang="html">{{
        code5
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code5 } from "./data.ts";

export default defineComponent({
  name: "command-event",
  components: {
    CodeHighlighter,
  },
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    },
  },
  setup() {
    return {
      code5,
    };
  },
});
</script>
