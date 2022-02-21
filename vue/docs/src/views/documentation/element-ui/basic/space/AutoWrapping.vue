<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#auto-wrapping"></a>
      Auto wrapping
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      When in horizontal mode, using <code>wrap</code> (bool type) to control
      auto wrapping behavior.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-space wrap>
        <div v-for="i in 20" :key="i">
          <el-button type="text"> Text button </el-button>
        </div>
      </el-space>

      <CodeHighlighter lang="html">{{ code5 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code5 } from "@/views/documentation/element-ui/basic/space/code";

export default defineComponent({
  name: "auto-wrapping",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code5,
    };
  },
});
</script>
