<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#filter"></a>
      Filter
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Filter the table to find desired data.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-button @click="resetDateFilter">reset date filter</el-button>
      <el-button @click="clearFilter">reset all filters</el-button>
      <el-table
        row-key="date"
        ref="filterTable"
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          prop="date"
          label="Date"
          sortable
          width="180"
          column-key="date"
          :filters="[
            { text: '2016-05-01', value: '2016-05-01' },
            { text: '2016-05-02', value: '2016-05-02' },
            { text: '2016-05-03', value: '2016-05-03' },
            { text: '2016-05-04', value: '2016-05-04' },
          ]"
          :filter-method="filterHandler"
        >
        </el-table-column>
        <el-table-column prop="name" label="Name" width="180">
        </el-table-column>
        <el-table-column prop="address" label="Address" :formatter="formatter">
        </el-table-column>
        <el-table-column
          prop="tag"
          label="Tag"
          width="100"
          :filters="[
            { text: 'Home', value: 'Home' },
            { text: 'Office', value: 'Office' },
          ]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
          <template #default="scope">
            <el-tag
              :type="scope.row.tag === 'Home' ? 'primary' : 'success'"
              disable-transitions
              >{{ scope.row.tag }}</el-tag
            >
          </template>
        </el-table-column>
      </el-table>

      <CodeHighlighter :field-height="400" lang="html">{{
        code13
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code13 } from "./data";

export default defineComponent({
  name: "filter",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          tag: "Home",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          tag: "Office",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          tag: "Home",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          tag: "Office",
        },
      ],
    };
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code13,
    };
  },
});
</script>
