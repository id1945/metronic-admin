<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#responsive-layout"></a>
      Responsive Layout
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Taking example by Bootstrap's responsive design, five breakpoints are
      preset: xs, sm, md, lg and xl.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
          ><div class="grid-content bg-purple"></div
        ></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
          ><div class="grid-content bg-purple"></div
        ></el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
      </el-row>

      <CodeHighlighter :field-height="400" lang="html">{{
        code6
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
</style>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code6 } from "@/views/documentation/element-ui/basic/layout/code";

export default defineComponent({
  name: "responsive-layout",
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
