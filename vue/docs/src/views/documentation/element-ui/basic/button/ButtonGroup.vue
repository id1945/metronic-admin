<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#button-group"></a>
      Button Group
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Displayed as a button group, can be used to group a series of similar
      operations.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left"
          >Previous Page</el-button
        >
        <el-button type="primary"
          >Next Page<i class="el-icon-arrow-right el-icon-right"></i
        ></el-button>
      </el-button-group>
      <el-button-group class="group2">
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
      </el-button-group>

      <CodeHighlighter lang="html">{{ code5 }}</CodeHighlighter>
    </div>
  </div>
</template>

<style>
.group2 {
  margin-left: 10px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code5 } from "@/views/documentation/element-ui/basic/button/code";

export default defineComponent({
  name: "button-group",
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
