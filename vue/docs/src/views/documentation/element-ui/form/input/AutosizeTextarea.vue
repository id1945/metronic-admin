<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#autosize-textarea"></a>
      Autosize Textarea
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Setting the <code>autosize</code> prop for a textarea type of Input makes
      the height to automatically adjust based on the content. An options object
      can be provided to <code>autosize</code> to specify the minimum and
      maximum number of lines the textarea can automatically adjust.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-input
        type="textarea"
        autosize
        placeholder="Please input"
        v-model="textarea1"
      >
      </el-input>
      <div style="margin: 20px 0"></div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        placeholder="Please input"
        v-model="textarea2"
      >
      </el-input>

      <CodeHighlighter :field-height="400" lang="html">{{
        code7
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code7 } from "./data";

export default defineComponent({
  name: "autosize-textarea",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      textarea1: ref(""),
      textarea2: ref(""),
      code7,
    };
  },
});
</script>
