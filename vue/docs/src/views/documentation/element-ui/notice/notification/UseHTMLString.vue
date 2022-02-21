<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#use-html-string"></a>
      Use HTML string
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5"><code>message</code> supports HTML string.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-button plain @click="open"> Use HTML String </el-button>

      <CodeHighlighter lang="html">{{ code5 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code5 } from "./data";

export default defineComponent({
  name: "use-html-string",
  components: {
    CodeHighlighter,
  },
  methods: {
    open() {
      this.$notify({
        title: "HTML String",
        dangerouslyUseHTMLString: true,
        message: "<strong>This is <i>HTML</i> string</strong>",
      });
    },
  },
  setup() {
    return {
      code5,
    };
  },
});
</script>
