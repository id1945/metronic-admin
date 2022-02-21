<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#predefined-colors"></a>
      Predefined colors
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-color-picker v-model="color" show-alpha :predefine="predefineColors">
      </el-color-picker>

      <CodeHighlighter :field-height="400" lang="html">{{
        code3
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "./data";

export default defineComponent({
  name: "predefined-colors",
  data() {
    return {
      color: "rgba(255, 69, 0, 0.68)",
      predefineColors: [
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585",
        "rgba(255, 69, 0, 0.68)",
        "rgb(255, 120, 0)",
        "hsv(51, 100, 98)",
        "hsva(120, 40, 94, 0.5)",
        "hsl(181, 100%, 37%)",
        "hsla(209, 100%, 56%, 0.73)",
        "#c7158577",
      ],
    };
  },
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
