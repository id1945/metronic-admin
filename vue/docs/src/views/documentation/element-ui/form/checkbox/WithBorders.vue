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
        <el-checkbox v-model="checked1" label="Option1" border></el-checkbox>
        <el-checkbox v-model="checked2" label="Option2" border></el-checkbox>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox
          v-model="checked3"
          label="Option1"
          border
          size="medium"
        ></el-checkbox>
        <el-checkbox
          v-model="checked4"
          label="Option2"
          border
          size="medium"
        ></el-checkbox>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup1" size="small">
          <el-checkbox label="Option1" border></el-checkbox>
          <el-checkbox label="Option2" border disabled></el-checkbox>
        </el-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
          <el-checkbox label="Option1" border></el-checkbox>
          <el-checkbox label="Option2" border></el-checkbox>
        </el-checkbox-group>
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
  name: "with-borders",
  data() {
    return {
      checked1: true,
      checked2: false,
      checked3: false,
      checked4: true,
      checkboxGroup1: [],
      checkboxGroup2: [],
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
