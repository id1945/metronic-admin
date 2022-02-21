<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#striped-table"></a>
      Striped Table
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Striped table makes it easier to distinguish different rows.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="Date" width="180">
        </el-table-column>
        <el-table-column prop="name" label="Name" width="180">
        </el-table-column>
        <el-table-column prop="address" label="Address"> </el-table-column>
      </el-table>

      <CodeHighlighter :field-height="400" lang="html">{{
        code2
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code2 } from "./data";

export default defineComponent({
  name: "stripped-table",
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
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code2,
    };
  },
});
</script>
