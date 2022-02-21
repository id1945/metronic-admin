<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#textarea"></a>
      Textarea
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Resizable for entering multiple lines of text information. Add attribute
      <code>type="textarea"</code> to change <code>input</code> into native
      <code>textarea</code>.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-input
        type="textarea"
        :rows="2"
        placeholder="Please input"
        v-model="textarea"
      >
      </el-input>

      <CodeHighlighter :field-height="400" lang="html">{{
        code6
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code6 } from "./data";

export default defineComponent({
  name: "textarea",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      textarea: ref(""),
      code6,
    };
  },
});
</script>
