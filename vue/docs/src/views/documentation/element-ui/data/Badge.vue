<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#badge"></a>
      Badge
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">A number or status mark on buttons and icons.</div>
    <!--end::Block-->
  </div>
  <EUIBasicUsage></EUIBasicUsage>
  <EUIMaxValue></EUIMaxValue>
  <EUICustomizations></EUICustomizations>
  <EUILittleRedDot></EUILittleRedDot>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import EUIBasicUsage from "@/views/documentation/element-ui/data/badge/BasicUsage.vue";
import EUIMaxValue from "@/views/documentation/element-ui/data/badge/MaxValue.vue";
import EUICustomizations from "@/views/documentation/element-ui/data/badge/Customizations.vue";
import EUILittleRedDot from "@/views/documentation/element-ui/data/badge/LittleRedDot.vue";

export default defineComponent({
  name: "badge",
  components: {
    EUIBasicUsage,
    EUIMaxValue,
    EUICustomizations,
    EUILittleRedDot,
  },
  setup() {
    setCurrentPageBreadcrumbs("Badge", ["Element UI", "Data"]);
  },
});
</script>
