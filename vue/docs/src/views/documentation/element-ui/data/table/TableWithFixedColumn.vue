<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#table-with-fixed-column"></a>
      Table with fixed column
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      When there are too many columns, you can fix some of them.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-table :data="tableData" style="width: 100%">
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
          <template>
            <el-button @click="handleClick" type="text" size="small"
              >Detail</el-button
            >
            <el-button type="text" size="small">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>

      <CodeHighlighter :field-height="400" lang="html">{{
        code6
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code6 } from "./data";

export default defineComponent({
  name: "table-with-fixed-column",
  methods: {
    handleClick() {
      console.log("click");
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
          tag: "Home",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Office",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Home",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Office",
        },
      ],
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
