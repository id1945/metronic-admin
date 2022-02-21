<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#basic-usage"></a>
      Basic usage
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Hover on the dropdown menu to unfold it for more actions.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-dropdown>
        <span class="el-dropdown-link">
          Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <CodeHighlighter :field-height="400" lang="html">{{
        code1
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

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code1 } from "./data";

export default defineComponent({
  name: "basic-usage",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code1,
    };
  },
});
</script>
