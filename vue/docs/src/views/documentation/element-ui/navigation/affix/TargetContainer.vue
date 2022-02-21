<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#target-container"></a>
      Target container
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      You can set <code>target</code> attribute to keep the affix in the
      container at all times. It will be hidden if out of range.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div class="affix-container">
        <el-affix target=".affix-container" :offset="80">
          <el-button type="primary">Target container</el-button>
        </el-affix>
      </div>

      <CodeHighlighter lang="html">{{ code2 }}</CodeHighlighter>
    </div>
  </div>
</template>

<style scoped>
.affix-container {
  text-align: center;
  height: 400px;
  border-radius: 4px;
  background: #ecf5ff;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code2 } from "./data";

export default defineComponent({
  name: "target-container",
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
