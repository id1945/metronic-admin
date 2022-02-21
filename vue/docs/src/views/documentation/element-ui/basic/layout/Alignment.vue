<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#alignment"></a>
      Alignment
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use the flex layout to make flexible alignment of columns.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-row type="flex" class="row-bg">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="end">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>

      <CodeHighlighter :field-height="400" lang="html">{{
        code5
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code5 } from "@/views/documentation/element-ui/basic/layout/code";

export default defineComponent({
  name: "alignment",
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
