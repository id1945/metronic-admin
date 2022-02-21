<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#removeable-tag"></a>
      Removable Tag
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
        {{ tag.name }}
      </el-tag>

      <CodeHighlighter :field-height="400" lang="html">{{
        code2
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code2 } from "./data";

export default defineComponent({
  name: "removeable-tag",
  data() {
    return {
      tags: [
        { name: "Tag 1", type: "" },
        { name: "Tag 2", type: "success" },
        { name: "Tag 3", type: "info" },
        { name: "Tag 4", type: "warning" },
        { name: "Tag 5", type: "danger" },
      ],
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
