<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#checkbox-group"></a>
      Checkbox group
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      It is used for multiple checkboxes which are bound in one group, and
      indicates whether one option is selected by checking if it is checked.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="Option A"></el-checkbox>
        <el-checkbox label="Option B"></el-checkbox>
        <el-checkbox label="Option C"></el-checkbox>
        <el-checkbox label="disabled" disabled></el-checkbox>
        <el-checkbox label="selected and disabled" disabled></el-checkbox>
      </el-checkbox-group>

      <CodeHighlighter lang="html">{{ code2 }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code2 } from "./data";

export default defineComponent({
  name: "checkbox-group",
  data() {
    return {
      checkList: ["selected and disabled", "Option A"],
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
