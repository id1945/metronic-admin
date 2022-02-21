<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#hide-close-button"></a>
      It is possible to hide the close button
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">It is possible to hide the close button</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-button plain @click="open"> Hide close button </el-button>

      <CodeHighlighter lang="html">{{ code6 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code6 } from "./data";

export default defineComponent({
  name: "hide-close-button",
  components: {
    CodeHighlighter,
  },
  methods: {
    open() {
      this.$notify.success({
        title: "Info",
        message: "This is a message without close button",
        showClose: false,
      });
    },
  },
  setup() {
    return {
      code6,
    };
  },
});
</script>
