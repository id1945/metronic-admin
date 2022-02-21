<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#disabled-checkbox"></a>
      Disabled Checkbox
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">The checkbox of a node can be set as disabled.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-tree :data="data" :props="defaultProps" show-checkbox> </el-tree>

      <CodeHighlighter :field-height="400" lang="html">{{
        code4
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code4 } from "./data";

export default defineComponent({
  name: "disabled-checkbox",
  data() {
    return {
      data: [
        {
          id: 1,
          label: "Level one 1",
          children: [
            {
              id: 3,
              label: "Level two 2-1",
              children: [
                {
                  id: 4,
                  label: "Level three 3-1-1",
                },
                {
                  id: 5,
                  label: "Level three 3-1-2",
                  disabled: true,
                },
              ],
            },
            {
              id: 2,
              label: "Level two 2-2",
              disabled: true,
              children: [
                {
                  id: 6,
                  label: "Level three 3-2-1",
                },
                {
                  id: 7,
                  label: "Level three 3-2-2",
                  disabled: true,
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
        disabled: "disabled",
      },
    };
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code4,
    };
  },
});
</script>
