<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#mixed-input"></a>
      Mixed input
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Prepend or append an element, generally a label or a button.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div>
        <el-input placeholder="Please input" v-model="input1">
          <template #prepend>Http://</template>
        </el-input>
      </div>
      <div style="margin-top: 15px">
        <el-input placeholder="Please input" v-model="input2">
          <template #append>.com</template>
        </el-input>
      </div>
      <div style="margin-top: 15px">
        <el-input
          placeholder="Please input"
          v-model="input3"
          class="input-with-select"
        >
          <template #prepend>
            <el-select v-model="select" placeholder="Select">
              <el-option label="Restaurant" value="1"></el-option>
              <el-option label="Order No." value="2"></el-option>
              <el-option label="Tel" value="3"></el-option>
            </el-select>
          </template>
          <template #append>
            <el-button icon="el-icon-search"></el-button>
          </template>
        </el-input>
      </div>

      <CodeHighlighter :field-height="400" lang="html">{{
        code8
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<style>
.el-select .el-input {
  width: 110px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code8 } from "./data";

export default defineComponent({
  name: "mixed-input",
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      input1: ref(""),
      input2: ref(""),
      input3: ref(""),
      select: ref(""),
      code8,
    };
  },
});
</script>
