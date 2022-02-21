<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#fluid-height-table-with-fixed-header-and-columns"></a>
      Fluid-height Table with fixed header (and columns)
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      When the the data is dynamically changed, you might want the table to have
      a maximum height rather than a fixed height and to show the scroll bar if
      needed.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-table :data="tableData" style="width: 100%" max-height="250">
        <el-table-column fixed prop="date" label="Date" width="150">
        </el-table-column>
        <el-table-column prop="name" label="Name" width="120">
        </el-table-column>
        <el-table-column prop="state" label="State" width="120">
        </el-table-column>
        <el-table-column prop="city" label="City" width="120">
        </el-table-column>
        <el-table-column prop="address" label="Address" width="600">
        </el-table-column>
        <el-table-column prop="zip" label="Zip" width="120"> </el-table-column>
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default="scope">
            <el-button
              @click.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >
              Remove
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <CodeHighlighter :field-height="400" lang="html">{{
        code8
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code8 } from "./data";

export default defineComponent({
  name: "basic-table",
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  },
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
      code8,
    };
  },
});
</script>
