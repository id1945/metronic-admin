<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#single-select"></a>
      Single select
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Basic table is just for data display.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%"
      >
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column property="date" label="Date" width="120">
        </el-table-column>
        <el-table-column property="name" label="Name" width="120">
        </el-table-column>
        <el-table-column property="address" label="Address"> </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="setCurrent(tableData[1])"
          >Select second row</el-button
        >
        <el-button @click="setCurrent()">Clear selection</el-button>
      </div>

      <CodeHighlighter :field-height="400" lang="html">{{
        code10
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code10 } from "./data.ts";

export default defineComponent({
  name: "single-select",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
      currentRow: null,
    };
  },
  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
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
