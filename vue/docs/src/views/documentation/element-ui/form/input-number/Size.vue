<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#size"></a>
      Size
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use attribute <code>size</code> to set additional sizes with
      <code>medium</code>, <code>small</code> or <code>mini</code>.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-input-number
        style="margin-right: 5px"
        v-model="num1"
      ></el-input-number>
      <el-input-number
        style="margin-right: 5px"
        size="medium"
        v-model="num2"
      ></el-input-number>
      <el-input-number
        style="margin-right: 5px"
        size="small"
        v-model="num3"
      ></el-input-number>
      <el-input-number size="mini" v-model="num4"></el-input-number>

      <CodeHighlighter lang="html">{{ code6 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code6 } from "./data";

export default defineComponent({
  name: "size",
  data() {
    return {
      num1: 1,
      num2: 1,
      num3: 1,
      num4: 1,
    };
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
