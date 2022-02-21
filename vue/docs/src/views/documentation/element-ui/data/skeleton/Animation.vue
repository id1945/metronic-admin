<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#animation"></a>
      Animation
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      We have provided a switch flag indicating whether showing the loading
      animation, called <code>animated</code> when this is true, all children of
      <code>l-skeleton</code> will show animation
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-skeleton :rows="5" animated />

      <CodeHighlighter lang="html">{{ code3 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "./data";

export default defineComponent({
  name: "accordion",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code3,
    };
  },
});
</script>
