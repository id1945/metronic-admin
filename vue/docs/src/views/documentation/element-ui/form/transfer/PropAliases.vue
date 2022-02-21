<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#prop-aliases"></a>
      Prop aliases
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      By default, Transfer looks for <code>key</code>, <code>label</code> and
      <code>disabled</code> in a data item. If your data items have different
      key names, you can use the <code>props</code> attribute to define aliases.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-transfer
        v-model="value"
        :props="{
          key: 'value',
          label: 'desc',
        }"
        :data="data"
      >
      </el-transfer>

      <CodeHighlighter :field-height="400" lang="html">{{
        code2
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code2 } from "./data.ts";

export default defineComponent({
  name: "prop-aliases",
  components: {
    CodeHighlighter,
  },
  data() {
    const generateData = () => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          value: i,
          desc: `Option ${i}`,
          disabled: i % 4 === 0,
        });
      }
      return data;
    };
    return {
      data: generateData(),
      value: [],
      code2,
    };
  },
});
</script>
