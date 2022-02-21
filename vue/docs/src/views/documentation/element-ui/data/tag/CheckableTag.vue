<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#checkable-tag"></a>
      Checkable tag
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Sometimes because of the business needs, we might need checkbox like tag,
      but <b>button like checkbox</b> cannot meet our needs, here comes
      <code>check-tag</code>
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div>
        <el-check-tag checked style="margin-right: 8px">Checked</el-check-tag>
        <el-check-tag @change="onChange" :checked="checked"
          >Toggle me</el-check-tag
        >
      </div>

      <CodeHighlighter :field-height="400" lang="html">{{
        code6
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code6 } from "./data";

export default defineComponent({
  name: "checkable-tag",
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    onChange(checked) {
      this.checked = checked;
    },
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code6,
    };
  },
});
</script>
