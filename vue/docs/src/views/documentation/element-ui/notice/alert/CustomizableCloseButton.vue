<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#customizable-close-button"></a>
      Customizable close button
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Customize the close button as texts or other symbols.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-alert
        class="mb-5"
        title="unclosable alert"
        type="success"
        :closable="false"
      >
      </el-alert>
      <el-alert
        class="mb-5"
        title="customized close-text"
        type="info"
        close-text="Gotcha"
      >
      </el-alert>
      <el-alert title="alert with callback" type="warning" @close="hello">
      </el-alert>

      <CodeHighlighter lang="html">{{ code3 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "./data";

export default defineComponent({
  name: "customizable-close-button",
  components: {
    CodeHighlighter,
  },
  setup() {
    const hello = () => {
      alert("Hello World!");
    };
    return {
      hello,
      code3,
    };
  },
});
</script>
