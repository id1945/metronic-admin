<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#custom-node-content"></a>
      Custom node content
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      The content of tree nodes can be customized, so you can add icons or
      buttons as you will
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div class="custom-tree-container">
        <div class="block">
          <p>Using render-content</p>
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            default-expand-all
            :expand-on-click-node="false"
            :render-content="renderContent"
          >
          </el-tree>
        </div>
        <div class="block">
          <p>Using scoped slot</p>
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            default-expand-all
            :expand-on-click-node="false"
          >
            <template #default="{ node, data }">
              <span class="custom-tree-node">
                <span>{{ node.label }}</span>
                <span>
                  <a @click="append(data)"> Append </a>
                  <a @click="remove(node, data)"> Delete </a>
                </span>
              </span>
            </template>
          </el-tree>
        </div>
      </div>

      <CodeHighlighter :field-height="400" lang="html">{{
        code7
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code7 } from "./data";

let id = 1000;

export default defineComponent({
  name: "custom-node-content",
  components: {
    CodeHighlighter,
  },
  data() {
    const data = [
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
    ];
    return {
      data: JSON.parse(JSON.stringify(data)),
    };
  },

  methods: {
    append(data) {
      const newChild = { id: id++, label: "testtest", children: [] };
      if (!data.children) {
        data.children = [];
      }
      data.children.push(newChild);
      this.data = [...this.data];
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
      this.data = [...this.data];
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    renderContent(h, { node, data, store }) {
      return h(
        "span",
        {
          class: "custom-tree-node",
        },
        h("span", null, node.label),
        h(
          "span",
          null,
          h(
            "a",
            {
              onClick: () => this.append(data),
            },
            "Append "
          ),
          h(
            "a",
            {
              onClick: () => this.remove(node, data),
            },
            "Delete"
          )
        )
      );
    },
  },
  setup() {
    return {
      code7,
    };
  },
});
</script>
