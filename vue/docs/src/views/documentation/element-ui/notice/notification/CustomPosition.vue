<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#custom-position"></a>
      Custom position
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Notification can emerge from any corner you like.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-button plain @click="open1"> Top Right </el-button>
      <el-button plain @click="open2"> Bottom Right </el-button>
      <el-button plain @click="open3"> Bottom Left </el-button>
      <el-button plain @click="open4"> Top Left </el-button>

      <CodeHighlighter :field-height="400" lang="html">{{
        code3
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "./data";

export default defineComponent({
  name: "custom-position",
  components: {
    CodeHighlighter,
  },
  methods: {
    open1() {
      this.$notify({
        title: "Custom Position",
        message: "I'm at the top right corner",
      });
    },

    open2() {
      this.$notify({
        title: "Custom Position",
        message: "I'm at the bottom right corner",
        position: "bottom-right",
      });
    },

    open3() {
      this.$notify({
        title: "Custom Position",
        message: "I'm at the bottom left corner",
        position: "bottom-left",
      });
    },

    open4() {
      this.$notify({
        title: "Custom Position",
        message: "I'm at the top left corner",
        position: "top-left",
      });
    },
  },
  setup() {
    return {
      code3,
    };
  },
});
</script>
