<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#rowspan-and-colspan"></a>
      Rowspan and colspan
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Configuring rowspan and colspan allows you to merge cells
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div>
        <el-table
          :data="tableData"
          :span-method="arraySpanMethod"
          border
          style="width: 100%"
        >
          <el-table-column prop="id" label="ID" width="180"> </el-table-column>
          <el-table-column prop="name" label="Name"> </el-table-column>
          <el-table-column prop="amount1" sortable label="Amount 1">
          </el-table-column>
          <el-table-column prop="amount2" sortable label="Amount 2">
          </el-table-column>
          <el-table-column prop="amount3" sortable label="Amount 3">
          </el-table-column>
        </el-table>

        <el-table
          :data="tableData"
          :span-method="objectSpanMethod"
          border
          style="width: 100%; margin-top: 20px"
        >
          <el-table-column prop="id" label="ID" width="180"> </el-table-column>
          <el-table-column prop="name" label="Name"> </el-table-column>
          <el-table-column prop="amount1" label="Amount 1"> </el-table-column>
          <el-table-column prop="amount2" label="Amount 2"> </el-table-column>
          <el-table-column prop="amount3" label="Amount 3"> </el-table-column>
        </el-table>
      </div>

      <CodeHighlighter :field-height="400" lang="html">{{
        code19
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code19 } from "./data";

export default defineComponent({
  name: "rowspan-and-colspan",
  data() {
    return {
      tableData: [
        {
          id: "12987122",
          name: "Tom",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
        },
        {
          id: "12987123",
          name: "Tom",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
        },
        {
          id: "12987124",
          name: "Tom",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
        },
        {
          id: "12987125",
          name: "Tom",
          amount1: "621",
          amount2: "2.2",
          amount3: 17,
        },
        {
          id: "12987126",
          name: "Tom",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
      ],
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    },
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code19,
    };
  },
});
</script>
