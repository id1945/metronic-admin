<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#table"></a>
      Table
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Display multiple data with similar format. You can sort, filter, compare
      your data in a table.
    </div>
    <!--end::Block-->
  </div>
  <EUIBasicTable></EUIBasicTable>
  <EUIStripedTable></EUIStripedTable>
  <EUITableWithBorder></EUITableWithBorder>
  <EUITableWithStatus></EUITableWithStatus>
  <EUITableWithFixedHeader></EUITableWithFixedHeader>
  <EUITableWithFixedColumn></EUITableWithFixedColumn>
  <EUITableWithFixedColumnsAndHeader></EUITableWithFixedColumnsAndHeader>
  <EUIFluidHeightTableWithFixedHeaderAndColumns></EUIFluidHeightTableWithFixedHeaderAndColumns>
  <EUIGroupingTableHead></EUIGroupingTableHead>
  <EUISingleSelect></EUISingleSelect>
  <EUIMultipleSelect></EUIMultipleSelect>
  <EUISorting></EUISorting>
  <EUIFilter></EUIFilter>
  <EUICustomColumnTemplate></EUICustomColumnTemplate>
  <EUITableWithCustomHeader></EUITableWithCustomHeader>
  <EUIExpandableRow></EUIExpandableRow>
  <EUITreeDataAndLazyMode></EUITreeDataAndLazyMode>
  <EUISummaryRow></EUISummaryRow>
  <EUIRowspanAndColspan></EUIRowspanAndColspan>
  <EUICustomIndex></EUICustomIndex>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import EUIBasicTable from "@/views/documentation/element-ui/data/table/BasicTable.vue";
import EUIStripedTable from "@/views/documentation/element-ui/data/table/StripedTable.vue";
import EUITableWithBorder from "@/views/documentation/element-ui/data/table/TableWithBorder.vue";
import EUITableWithStatus from "@/views/documentation/element-ui/data/table/TableWithStatus.vue";
import EUITableWithFixedHeader from "@/views/documentation/element-ui/data/table/TableWithFixedHeader.vue";
import EUITableWithFixedColumn from "@/views/documentation/element-ui/data/table/TableWithFixedColumn.vue";
import EUITableWithFixedColumnsAndHeader from "@/views/documentation/element-ui/data/table/TableWithFixedColumnsAndHeader.vue";
import EUIFluidHeightTableWithFixedHeaderAndColumns from "@/views/documentation/element-ui/data/table/FluidHeightTableWithFixedHeaderAndColumns.vue";
import EUIGroupingTableHead from "@/views/documentation/element-ui/data/table/GroupingTableHead.vue";
import EUISingleSelect from "@/views/documentation/element-ui/data/table/SingleSelect.vue";
import EUIMultipleSelect from "@/views/documentation/element-ui/data/table/MultipleSelect.vue";
import EUISorting from "@/views/documentation/element-ui/data/table/Sorting.vue";
import EUIFilter from "@/views/documentation/element-ui/data/table/Filter.vue";
import EUICustomColumnTemplate from "@/views/documentation/element-ui/data/table/CustomColumnTemplate.vue";
import EUITableWithCustomHeader from "@/views/documentation/element-ui/data/table/TableWithCustomHeader.vue";
import EUIExpandableRow from "@/views/documentation/element-ui/data/table/ExpandableRow.vue";
import EUITreeDataAndLazyMode from "@/views/documentation/element-ui/data/table/TreeDataAndLazyMode.vue";
import EUISummaryRow from "@/views/documentation/element-ui/data/table/SummaryRow.vue";
import EUIRowspanAndColspan from "@/views/documentation/element-ui/data/table/RowspanAndColspan.vue";
import EUICustomIndex from "@/views/documentation/element-ui/data/table/CustomIndex.vue";

export default defineComponent({
  name: "table",
  components: {
    EUIBasicTable,
    EUIStripedTable,
    EUITableWithBorder,
    EUITableWithStatus,
    EUITableWithFixedHeader,
    EUITableWithFixedColumn,
    EUITableWithFixedColumnsAndHeader,
    EUIFluidHeightTableWithFixedHeaderAndColumns,
    EUIGroupingTableHead,
    EUISingleSelect,
    EUIMultipleSelect,
    EUISorting,
    EUIFilter,
    EUICustomColumnTemplate,
    EUITableWithCustomHeader,
    EUIExpandableRow,
    EUITreeDataAndLazyMode,
    EUISummaryRow,
    EUIRowspanAndColspan,
    EUICustomIndex,
  },
  setup() {
    setCurrentPageBreadcrumbs("Table", ["Element UI", "Data"]);
  },
});
</script>
