<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#basic-usage"></a>
      Basic usage
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-button plain @click="open1"> Closes automatically </el-button>
      <el-button plain @click="open2"> Won't close automatically </el-button>

      <CodeHighlighter :field-height="400" lang="html">{{
        code1
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent, h } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code1 } from "./data";

export default defineComponent({
  name: "basic-usage",
  components: {
    CodeHighlighter,
  },
  methods: {
    open1() {
      this.$notify({
        title: "Title",
        message: h("i", { style: "color: teal" }, "This is a reminder"),
      });
    },

    open2() {
      this.$notify({
        title: "Prompt",
        message: "This is a message that does not automatically close",
        duration: 0,
      });
    },
  },
  setup() {
    return {
      code1,
    };
  },
});
</script>
