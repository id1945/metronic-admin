<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#sorting"></a>
      Sorting
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Sort the data to find or compare data quickly.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-table
        :data="tableData"
        :default-sort="{ prop: 'date', order: 'descending' }"
        style="width: 100%"
      >
        <el-table-column prop="date" label="Date" sortable width="180">
        </el-table-column>
        <el-table-column prop="name" label="Name" width="180">
        </el-table-column>
        <el-table-column prop="address" label="Address" :formatter="formatter">
        </el-table-column>
      </el-table>

      <CodeHighlighter :field-height="400" lang="html">{{
        code12
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code12 } from "./data";

export default defineComponent({
  name: "sorting",
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
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formatter(row, column) {
      return row.address;
    },
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code12,
    };
  },
});
</script>
