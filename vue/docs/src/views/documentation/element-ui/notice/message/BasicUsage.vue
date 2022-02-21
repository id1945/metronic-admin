<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#basic-usage"></a>
      Basic usage
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Displays at the top, and disappears after 3 seconds.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-button :plain="true" @click="open">Show message</el-button>
      <el-button :plain="true" @click="openVn">VNode</el-button>

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
    open() {
      this.$message("This is a message.");
    },

    openVn() {
      this.$message({
        message: h("p", null, [
          h("span", null, "Message can be "),
          h("i", { style: "color: teal" }, "VNode"),
        ]),
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
̰
