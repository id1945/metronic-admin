<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#theme"></a>
      Theme
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Alert provide two different themes, <code>light</code> and
      <code>dark</code>.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-alert class="mb-5" title="success alert" type="success" effect="dark">
      </el-alert>
      <el-alert class="mb-5" title="info alert" type="info" effect="dark">
      </el-alert>
      <el-alert class="mb-5" title="warning alert" type="warning" effect="dark">
      </el-alert>
      <el-alert title="error alert" type="error" effect="dark"> </el-alert>

      <CodeHighlighter lang="html">{{ code2 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code2 } from "./data";

export default defineComponent({
  name: "theme",
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
