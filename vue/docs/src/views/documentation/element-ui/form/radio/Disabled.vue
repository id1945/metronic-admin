<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#disabled"></a>
      Disabled
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      <code>disabled</code> attribute is used to disable the radio.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-radio disabled v-model="radio" label="disabled">Option A</el-radio>
      <el-radio disabled v-model="radio" label="selected and disabled"
        >Option B</el-radio
      >

      <CodeHighlighter lang="html">{{ code2 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code2 } from "./data";

export default defineComponent({
  name: "disabled",
  data() {
    return {
      radio: "selected and disabled",
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
