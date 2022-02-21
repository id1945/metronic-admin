<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#vertical-mode"></a>
      Vertical mode
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <div class="block">
        <el-slider v-model="value" vertical height="200px"> </el-slider>
      </div>

      <CodeHighlighter lang="html">{{ code4 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code4 } from "./data";

export default defineComponent({
  name: "vertical-mode",
  data() {
    return {
      value: 0,
    };
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code4,
    };
  },
});
</script>
