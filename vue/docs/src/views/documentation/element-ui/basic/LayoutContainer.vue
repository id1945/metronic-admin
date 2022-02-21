<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#container"></a>
      Container
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Container components for scaffolding basic structure of the page:<br /><br />
      <code>&lt;el-container&gt;</code>: wrapper container. When nested with a
      <code>&lt;el-header&gt;</code> or <code>&lt;el-footer&gt;</code>, all its
      child elements will be vertically arranged. Otherwise horizontally.<br /><br />

      <code>&lt;el-header&gt;</code>: container for headers.<br /><br />

      <code>&lt;el-aside&gt;</code>: container for side sections (usually a side
      nav).<br /><br />

      <code>&lt;el-main&gt;</code>: container for main sections.<br /><br />

      <code>&lt;el-footer&gt;</code>: container for footers.
    </div>
    <!--end::Block-->

    <div class="py-5">
      <!--begin::Information-->
      <div class="d-flex align-items-center rounded py-5 px-5 bg-light-info">
        <!--begin::Icon-->
        <!--begin::Svg Icon | path: '.svg/icons/Code/Info-circle.svg.'-->
        <span class="svg-icon svg-icon-3x svg-icon-info me-5">
          <inline-svg src="media/icons/duotune/general/gen044.svg" />
        </span>
        <!--end::Svg Icon-->
        <!--end::Icon-->
        <!--begin::Description-->
        <div class="text-gray-600 fw-bold fs-5">
          These components use flex for layout, so please make sure your browser
          supports it. Besides, <code>&lt;el-container&gt;</code>'s direct child
          elements have to be one or more of the latter four components. And
          father element of the latter four components must be a
          <code>&lt;el-container&gt;</code>.
        </div>
        <!--end::Description-->
      </div>
      <!--end::Information-->
    </div>
  </div>
  <EIUCommonLayouts></EIUCommonLayouts>
  <EIUExample></EIUExample>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import EIUCommonLayouts from "@/views/documentation/element-ui/basic/layout-container/CommonLayouts.vue";
import EIUExample from "@/views/documentation/element-ui/basic/layout-container/Example.vue";

export default defineComponent({
  name: "layout",
  components: {
    EIUCommonLayouts,
    EIUExample,
  },
  setup() {
    setCurrentPageBreadcrumbs("Layout Container", ["Element UI", "Basic"]);
  },
});
</script>
