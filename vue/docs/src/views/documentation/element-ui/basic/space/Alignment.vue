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
      Setting this attribute can adjust the alignment of child nodes, the
      desirable value can be found at align-items.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div
        style="
          width: 256px;
          margin-bottom: 20px;
          padding: 8px;
          border: 1px solid #ccc;
        "
      >
        <el-space>
          string
          <el-button> button </el-button>
          <el-card>
            <template #header> header </template>
            body
          </el-card>
        </el-space>
      </div>
      <div
        style="
          width: 256px;
          margin-bottom: 20px;
          padding: 8px;
          border: 1px solid #ccc;
        "
      >
        <el-space alignment="flex-start">
          string
          <el-button> button </el-button>
          <el-card>
            <template #header> header </template>
            body
          </el-card>
        </el-space>
      </div>
      <div
        style="
          width: 256px;
          margin-bottom: 20px;
          padding: 8px;
          border: 1px solid #ccc;
        "
      >
        <el-space alignment="flex-end">
          string
          <el-button> button </el-button>
          <el-card>
            <template #header> header </template>
            body
          </el-card>
        </el-space>
      </div>

      <CodeHighlighter :field-height="400" lang="html">{{
        code7
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code7 } from "@/views/documentation/element-ui/basic/space/code";

export default defineComponent({
  name: "alignment",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code7,
    };
  },
});
</script>
