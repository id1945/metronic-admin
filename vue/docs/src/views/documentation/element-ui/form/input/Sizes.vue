<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#sizes"></a>
      Sizes
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <div class="demo-input-size">
        <el-input placeholder="Please Input" v-model="input1"> </el-input>
        <el-input
          style="margin-top: 15px"
          size="medium"
          placeholder="Please Input"
          v-model="input2"
        >
        </el-input>
        <el-input
          style="margin-top: 15px"
          size="small"
          placeholder="Please Input"
          v-model="input3"
        >
        </el-input>
        <el-input
          style="margin-top: 15px"
          size="mini"
          placeholder="Please Input"
          v-model="input4"
        >
        </el-input>
      </div>

      <CodeHighlighter :field-height="400" lang="html">{{
        code9
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code9 } from "./data";

export default defineComponent({
  name: "sizes",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      input1: ref(""),
      input2: ref(""),
      input3: ref(""),
      input4: ref(""),
      code9,
    };
  },
});
</script>
