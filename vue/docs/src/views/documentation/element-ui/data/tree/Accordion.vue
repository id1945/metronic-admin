<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#accordion"></a>
      Accordion
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Only one node among the same level can be expanded at one time.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-tree
        :data="data"
        :props="defaultProps"
        accordion
        @node-click="handleNodeClick"
      >
      </el-tree>

      <CodeHighlighter :field-height="400" lang="html">{{
        code9
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code9 } from "./data";

export default defineComponent({
  name: "accordion",
  data() {
    return {
      data: [
        {
          label: "Level one 1",
          children: [
            {
              label: "Level two 1-1",
              children: [
                {
                  label: "Level three 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "Level one 2",
          children: [
            {
              label: "Level two 2-1",
              children: [
                {
                  label: "Level three 2-1-1",
                },
              ],
            },
            {
              label: "Level two 2-2",
              children: [
                {
                  label: "Level three 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "Level one 3",
          children: [
            {
              label: "Level two 3-1",
              children: [
                {
                  label: "Level three 3-1-1",
                },
              ],
            },
            {
              label: "Level two 3-2",
              children: [
                {
                  label: "Level three 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code9,
    };
  },
});
</script>
