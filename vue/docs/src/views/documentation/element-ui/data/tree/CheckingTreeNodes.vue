<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#checking-tree-nodes"></a>
      Checking tree nodes
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-tree
        :data="data"
        show-checkbox
        default-expand-all
        node-key="id"
        ref="tree"
        highlight-current
        :props="defaultProps"
      >
      </el-tree>

      <div class="buttons">
        <el-button @click="getCheckedNodes">get by node</el-button>
        <el-button @click="getCheckedKeys">get by key</el-button>
        <el-button @click="setCheckedNodes">set by node</el-button>
        <el-button @click="setCheckedKeys">set by key</el-button>
        <el-button @click="resetChecked">reset</el-button>
      </div>

      <CodeHighlighter :field-height="400" lang="html">{{
        code6
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code6 } from "./data.ts";

export default defineComponent({
  name: "checking-tree-nodes",
  methods: {
    getCheckedNodes() {
      console.log(this.$refs.tree.getCheckedNodes());
    },
    getCheckedKeys() {
      console.log(this.$refs.tree.getCheckedKeys());
    },
    setCheckedNodes() {
      this.$refs.tree.setCheckedNodes([
        {
          id: 5,
          label: "Level two 2-1",
        },
        {
          id: 9,
          label: "Level three 1-1-1",
        },
      ]);
    },
    setCheckedKeys() {
      this.$refs.tree.setCheckedKeys([3]);
    },
    resetChecked() {
      this.$refs.tree.setCheckedKeys([]);
    },
  },

  data() {
    return {
      data: [
        {
          id: 1,
          label: "Level one 1",
          children: [
            {
              id: 4,
              label: "Level two 1-1",
              children: [
                {
                  id: 9,
                  label: "Level three 1-1-1",
                },
                {
                  id: 10,
                  label: "Level three 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "Level one 2",
          children: [
            {
              id: 5,
              label: "Level two 2-1",
            },
            {
              id: 6,
              label: "Level two 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "Level one 3",
          children: [
            {
              id: 7,
              label: "Level two 3-1",
            },
            {
              id: 8,
              label: "Level two 3-2",
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
