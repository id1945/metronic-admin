<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#with-offset"></a>
      With offset
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Customize Notification's offset from the edge of the screen.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-button plain @click="open"> Notification with offset </el-button>

      <CodeHighlighter lang="html">{{ code4 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code4 } from "./data.ts";

export default defineComponent({
  name: "with-offset",
  components: {
    CodeHighlighter,
  },
  methods: {
    open() {
      this.$notify.success({
        title: "Success",
        message: "This is a success message",
        offset: 100,
      });
    },
  },
  setup() {
    return {
      code4,
    };
  },
});
</script>
