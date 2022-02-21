<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#summary-row"></a>
      Summary row
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      For table of numbers, you can add an extra row at the table footer
      displaying each column's sum.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-table :data="tableData" border show-summary style="width: 100%">
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
        border
        height="200"
        :summary-method="getSummaries"
        show-summary
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column prop="id" label="ID" width="180"> </el-table-column>
        <el-table-column prop="name" label="Name"> </el-table-column>
        <el-table-column prop="amount1" label="Cost 1 ($)"> </el-table-column>
        <el-table-column prop="amount2" label="Cost 2 ($)"> </el-table-column>
        <el-table-column prop="amount3" label="Cost 3 ($)"> </el-table-column>
      </el-table>

      <CodeHighlighter :field-height="400" lang="html">{{
        code18
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code18 } from "./data.ts";

export default defineComponent({
  name: "summary-row",
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
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "Total Cost";
          return;
        }
        const values = data.map((item) => Number(item[column.property]));
        if (!values.every((value) => isNaN(value))) {
          sums[index] =
            "$ " +
            values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
        } else {
          sums[index] = "N/A";
        }
      });

      return sums;
    },
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code18,
    };
  },
});
</script>
