<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#custom-image"></a>
      Custom image
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Use <code>image</code> prop to set image URL.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-empty
        image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      ></el-empty>

      <CodeHighlighter lang="html">{{ code2 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code2 } from "./data";

export default defineComponent({
  name: "custom-image",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code2,
    };
  },
});
</script>
