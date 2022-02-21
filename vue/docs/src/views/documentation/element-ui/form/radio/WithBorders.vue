<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#with-borders"></a>
      With borders
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <div>
        <el-radio v-model="radio1" label="1" border>Option A</el-radio>
        <el-radio v-model="radio1" label="2" border>Option B</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio v-model="radio2" label="1" border size="medium"
          >Option A</el-radio
        >
        <el-radio v-model="radio2" label="2" border size="medium"
          >Option B</el-radio
        >
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio3" size="small">
          <el-radio label="1" border>Option A</el-radio>
          <el-radio label="2" border disabled>Option B</el-radio>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio4" size="mini" disabled>
          <el-radio label="1" border>Option A</el-radio>
          <el-radio label="2" border>Option B</el-radio>
        </el-radio-group>
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
  name: "with-borders",
  data() {
    return {
      radio1: "1",
      radio2: "1",
      radio3: "1",
      radio4: "1",
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
