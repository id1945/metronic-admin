<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#alignment"></a>
      Alignment
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Depending on your design, there are several different ways to align your
      label element.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-radio-group v-model="labelPosition" size="small">
        <el-radio-button label="left">Left</el-radio-button>
        <el-radio-button label="right">Right</el-radio-button>
        <el-radio-button label="top">Top</el-radio-button>
      </el-radio-group>
      <div style="margin: 20px"></div>
      <el-form
        :label-position="labelPosition"
        label-width="100px"
        :model="formLabelAlign"
      >
        <el-form-item label="Name">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="Activity form">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
      </el-form>

      <CodeHighlighter :field-height="400" lang="html">{{
        code3
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code3 } from "./data";

export default defineComponent({
  name: "alignment",
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
    };
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code3,
    };
  },
});
</script>
