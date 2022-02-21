<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#text-description"></a>
      Text description
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-switch
        style="margin-bottom: 5px"
        v-model="value1"
        active-text="Pay by month"
        inactive-text="Pay by year"
      >
      </el-switch>
      <el-switch
        style="display: block"
        v-model="value2"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="Pay by month"
        inactive-text="Pay by year"
      >
      </el-switch>

      <CodeHighlighter lang="html">{{ code2 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code2 } from "./data";

export default defineComponent({
  name: "text-description",
  data() {
    return {
      value1: true,
      value2: true,
    };
  },
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
