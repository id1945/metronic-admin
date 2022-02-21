<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#tree"></a>
      Tree
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Display a set of data with hierarchies.</div>
    <!--end::Block-->
  </div>
  <EUIBasicUsage></EUIBasicUsage>
  <EUISelectable></EUISelectable>
  <EUICustomLeafNodeInLazyMode></EUICustomLeafNodeInLazyMode>
  <EUIDisabledCheckbox></EUIDisabledCheckbox>
  <EUIDefaultExpandedAndDefaultChecked></EUIDefaultExpandedAndDefaultChecked>
  <EUICheckingTreeNodes></EUICheckingTreeNodes>
  <EUICustomNodeContent></EUICustomNodeContent>
  <EUITreeNodeFiltering></EUITreeNodeFiltering>
  <EUIAccordion></EUIAccordion>
  <EUIDraggable></EUIDraggable>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import EUIBasicUsage from "@/views/documentation/element-ui/data/tree/BasicUsage.vue";
import EUISelectable from "@/views/documentation/element-ui/data/tree/Selectable.vue";
import EUICustomLeafNodeInLazyMode from "@/views/documentation/element-ui/data/tree/CustomLeafNodeInLazyMode.vue";
import EUIDisabledCheckbox from "@/views/documentation/element-ui/data/tree/DisabledCheckbox.vue";
import EUIDefaultExpandedAndDefaultChecked from "@/views/documentation/element-ui/data/tree/DefaultExpandedAndDefaultChecked.vue";
import EUICheckingTreeNodes from "@/views/documentation/element-ui/data/tree/CheckingTreeNodes.vue";
import EUICustomNodeContent from "@/views/documentation/element-ui/data/tree/CustomNodeContent.vue";
import EUITreeNodeFiltering from "@/views/documentation/element-ui/data/tree/TreeNodeFiltering.vue";
import EUIAccordion from "@/views/documentation/element-ui/data/tree/Accordion.vue";
import EUIDraggable from "@/views/documentation/element-ui/data/tree/Draggable.vue";

export default defineComponent({
  name: "tree",
  components: {
    EUIBasicUsage,
    EUISelectable,
    EUICustomLeafNodeInLazyMode,
    EUIDisabledCheckbox,
    EUIDefaultExpandedAndDefaultChecked,
    EUICheckingTreeNodes,
    EUICustomNodeContent,
    EUITreeNodeFiltering,
    EUIAccordion,
    EUIDraggable,
  },
  setup() {
    setCurrentPageBreadcrumbs("Tree", ["Element UI", "Data"]);
  },
});
</script>
