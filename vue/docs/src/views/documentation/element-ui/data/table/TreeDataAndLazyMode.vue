<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#tree-data-and-lazy-mode"></a>
      Tree data and lazy mode
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <div>
        <el-table
          :data="tableData"
          style="width: 100%; margin-bottom: 20px"
          row-key="id"
          border
          default-expand-all
        >
          <el-table-column prop="date" label="date" sortable width="180">
          </el-table-column>
          <el-table-column prop="name" label="Name" sortable width="180">
          </el-table-column>
        </el-table>

        <el-table
          :data="tableData1"
          style="width: 100%"
          row-key="id"
          border
          lazy
          :load="load"
          :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        >
          <el-table-column prop="date" label="Date" width="180">
          </el-table-column>
          <el-table-column prop="name" label="Name" width="180">
          </el-table-column>
        </el-table>
      </div>

      <CodeHighlighter :field-height="400" lang="html">{{
        code17
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code17 } from "./data";

export default defineComponent({
  name: "tree-data-and-lazy-mode",
  data() {
    return {
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "wangxiaohu",
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "wangxiaohu",
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "wangxiaohu",
          children: [
            {
              id: 31,
              date: "2016-05-01",
              name: "wangxiaohu",
            },
            {
              id: 32,
              date: "2016-05-01",
              name: "wangxiaohu",
            },
          ],
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "wangxiaohu",
        },
      ],
      tableData1: [
        {
          id: 1,
          date: "2016-05-02",
          name: "wangxiaohu",
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "wangxiaohu",
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "wangxiaohu",
          hasChildren: true,
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "wangxiaohu",
        },
      ],
    };
  },
  methods: {
    load(tree, treeNode, resolve) {
      setTimeout(() => {
        resolve([
          {
            id: 31,
            date: "2016-05-01",
            name: "wangxiaohu",
          },
          {
            id: 32,
            date: "2016-05-01",
            name: "wangxiaohu",
          },
        ]);
      }, 1000);
    },
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code17,
    };
  },
});
</script>
