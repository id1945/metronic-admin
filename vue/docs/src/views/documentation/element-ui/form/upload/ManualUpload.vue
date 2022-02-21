<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#manual-upload"></a>
      Manual upload
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-upload
        class="upload-demo"
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :auto-upload="false"
      >
        <template #trigger>
          <el-button size="small" type="primary">select file</el-button>
        </template>
        <el-button
          style="margin-left: 10px"
          size="small"
          type="success"
          @click="submitUpload"
          >upload to server</el-button
        >
        <template #tip>
          <div class="el-upload__tip">
            jpg/png files with a size less than 500kb
          </div>
        </template>
      </el-upload>

      <CodeHighlighter :field-height="400" lang="html">{{
        code7
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code7 } from "./data.ts";

export default defineComponent({
  name: "manual-upload",
  components: {
    CodeHighlighter,
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
  },
  setup() {
    return {
      code7,
    };
  },
});
</script>
