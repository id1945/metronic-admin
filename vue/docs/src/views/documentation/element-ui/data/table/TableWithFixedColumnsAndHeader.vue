<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#table-with-fixed-columns-and-header"></a>
      Table with fixed columns and header
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      When you have huge chunks of data to put in a table, you can fix the
      header and columns at the same time.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-table :data="tableData" style="width: 100%" height="250">
        <el-table-column fixed prop="date" label="Date" width="150">
        </el-table-column>
        <el-table-column prop="name" label="Name" width="120">
        </el-table-column>
        <el-table-column prop="state" label="State" width="120">
        </el-table-column>
        <el-table-column prop="city" label="City" width="320">
        </el-table-column>
        <el-table-column prop="address" label="Address" width="600">
        </el-table-column>
        <el-table-column prop="zip" label="Zip" width="120"> </el-table-column>
      </el-table>

      <CodeHighlighter :field-height="400" lang="html">{{
        code7
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code7 } from "./data";

export default defineComponent({
  name: "table-with-fixed-columns-and-header",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-08",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-06",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-07",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
      ],
    };
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code7,
    };
  },
});
</script>
