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
      Tag provide three different themes: <code>dark</code>、<code>light</code>
      and <code>plain</code>
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div class="tag-group mb-5">
        <span class="tag-group__title" style="margin-right: 5px">Dark</span>
        <el-tag
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          effect="dark"
        >
          {{ item.label }}
        </el-tag>
      </div>
      <div class="tag-group">
        <span class="tag-group__title" style="margin-right: 5px">Plain</span>
        <el-tag
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          effect="plain"
        >
          {{ item.label }}
        </el-tag>
      </div>

      <CodeHighlighter :field-height="400" lang="html">{{
        code5
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code5 } from "./data";

export default defineComponent({
  name: "theme",
  data() {
    return {
      items: [
        { type: "", label: "Tag 1" },
        { type: "success", label: "Tag 2" },
        { type: "info", label: "Tag 3" },
        { type: "danger", label: "Tag 4" },
        { type: "warning", label: "Tag 5" },
      ],
    };
  },
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
