<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#create-new-items"></a>
      Create new items
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Create and select new items that are not included in select options
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-select
        v-model="value"
        multiple
        filterable
        allow-create
        default-first-option
        placeholder="Choose tags for your article"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <CodeHighlighter :field-height="400" lang="html">{{
        code10
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code10 } from "./data";

export default defineComponent({
  name: "create-new-items",
  data() {
    return {
      options: [
        {
          value: "HTML",
          label: "HTML",
        },
        {
          value: "CSS",
          label: "CSS",
        },
        {
          value: "JavaScript",
          label: "JavaScript",
        },
      ],
      value: [],
    };
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code10,
    };
  },
});
</script>
