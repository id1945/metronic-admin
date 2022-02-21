<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#with-types"></a>
      With types
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      We provide four types: success, warning, info and error.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-button plain @click="open1"> Success </el-button>
      <el-button plain @click="open2"> Warning </el-button>
      <el-button plain @click="open3"> Info </el-button>
      <el-button plain @click="open4"> Error </el-button>

      <CodeHighlighter :field-height="400" lang="html">{{
        code2
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code2 } from "./data";

export default defineComponent({
  name: "with-types",
  components: {
    CodeHighlighter,
  },
  methods: {
    open1() {
      this.$notify({
        title: "Success",
        message: "This is a success message",
        type: "success",
      });
    },

    open2() {
      this.$notify({
        title: "Warning",
        message: "This is a warning message",
        type: "warning",
      });
    },

    open3() {
      this.$notify.info({
        title: "Info",
        message: "This is an info message",
      });
    },

    open4() {
      this.$notify.error({
        title: "Error",
        message: "This is an error message",
      });
    },
  },
  setup() {
    return {
      code2,
    };
  },
});
</script>
