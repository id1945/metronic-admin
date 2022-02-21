<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#layout"></a>
      Layout
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Quickly and easily create layouts with the basic 24-column.
    </div>
    <!--end::Block-->
  </div>
  <EUILayoutBasic></EUILayoutBasic>
  <EUIColumnSpacing></EUIColumnSpacing>
  <EUIHybridLayout></EUIHybridLayout>
  <EUIColumnOffset></EUIColumnOffset>
  <EUIAlignment></EUIAlignment>
  <EUIResponsiveLayout></EUIResponsiveLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import EUILayoutBasic from "@/views/documentation/element-ui/basic/layout/BasicLayout.vue";
import EUIColumnSpacing from "@/views/documentation/element-ui/basic/layout/ColumnSpacing.vue";
import EUIHybridLayout from "@/views/documentation/element-ui/basic/layout/HybridLayout.vue";
import EUIColumnOffset from "@/views/documentation/element-ui/basic/layout/ColumnOffset.vue";
import EUIAlignment from "@/views/documentation/element-ui/basic/layout/Alignment.vue";
import EUIResponsiveLayout from "@/views/documentation/element-ui/basic/layout/ResponsiveLayout.vue";

export default defineComponent({
  name: "layout",
  components: {
    EUILayoutBasic,
    EUIColumnSpacing,
    EUIHybridLayout,
    EUIColumnOffset,
    EUIAlignment,
    EUIResponsiveLayout,
  },
  setup() {
    setCurrentPageBreadcrumbs("Layout", ["Element UI", "Basic"]);
  },
});
</script>
