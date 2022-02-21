<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#input-with-icon"></a>
      Input with icon
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Add an icon to indicate input type.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div class="demo-input-suffix mb-5">
        <span class="demo-input-label">Using attributes</span>
        <el-input
          placeholder="Pick a date"
          suffix-icon="el-icon-date"
          v-model="input1"
        >
        </el-input>
        <el-input
          placeholder="Type something"
          prefix-icon="el-icon-search"
          v-model="input2"
        >
        </el-input>
      </div>
      <div class="demo-input-suffix">
        <span class="demo-input-label">Using slots</span>
        <el-input placeholder="Pick a date" v-model="input3">
          <template #suffix>
            <i class="el-input__icon el-icon-date"></i>
          </template>
        </el-input>
        <el-input placeholder="Type something" v-model="input4">
          <template #prefix>
            <i class="el-input__icon el-icon-search"></i>
          </template>
        </el-input>
      </div>

      <CodeHighlighter :field-height="400" lang="html">{{
        code5
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<style scoped>
.demo-input-label {
  display: inline-block;
  width: 130px;
}

.el-input {
  width: auto;
  margin-right: 5px;
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code5 } from "./data";

export default defineComponent({
  name: "input-with-icon",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      input1: ref(""),
      input2: ref(""),
      input3: ref(""),
      input4: ref(""),
      code5,
    };
  },
});
</script>
