<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#input-number"></a>
      InputNumber
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Input numerical values with a customizable range.</div>
    <!--end::Block-->
  </div>
  <EUIBasicUsage></EUIBasicUsage>
  <EUIDisabled></EUIDisabled>
  <EUISteps></EUISteps>
  <EUIStepStrictly></EUIStepStrictly>
  <EUIPrecision></EUIPrecision>
  <EUISize></EUISize>
  <EUIControlsPosition></EUIControlsPosition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import EUIBasicUsage from "@/views/documentation/element-ui/form/input-number/BasicUsage.vue";
import EUIDisabled from "@/views/documentation/element-ui/form/input-number/Disabled.vue";
import EUISteps from "@/views/documentation/element-ui/form/input-number/Steps.vue";
import EUIStepStrictly from "@/views/documentation/element-ui/form/input-number/StepStrictly.vue";
import EUIPrecision from "@/views/documentation/element-ui/form/input-number/Precision.vue";
import EUISize from "@/views/documentation/element-ui/form/input-number/Size.vue";
import EUIControlsPosition from "@/views/documentation/element-ui/form/input-number/ControlsPosition.vue";

export default defineComponent({
  name: "input-number",
  components: {
    EUIBasicUsage,
    EUIDisabled,
    EUISteps,
    EUIStepStrictly,
    EUIPrecision,
    EUISize,
    EUIControlsPosition,
  },
  setup() {
    setCurrentPageBreadcrumbs("Input Number", ["Element UI", "Form"]);
  },
});
</script>
