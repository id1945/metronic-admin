<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#option-filter"></a>
      Option filtering
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">You can filter options for your desired ones.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-select v-model="value" filterable placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <CodeHighlighter :field-height="400" lang="html">{{
        code8
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code8 } from "./data";

export default defineComponent({
  name: "option-filter",
  data() {
    return {
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
      value: "",
    };
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code8,
    };
  },
});
</script>
