<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#file-list-control"></a>
      File list control
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>on-change</code> hook function to control upload file list
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-change="handleChange"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">Click to upload</el-button>
        <template #tip>
          <div class="el-upload__tip">
            jpg/png files with a size less than 500kb
          </div>
        </template>
      </el-upload>

      <CodeHighlighter :field-height="400" lang="html">{{
        code6
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code6 } from "./data";

export default defineComponent({
  name: "file-list-control",
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
    };
  },
  components: {
    CodeHighlighter,
  },
  methods: {
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
    },
  },
  setup() {
    return {
      code6,
    };
  },
});
</script>
