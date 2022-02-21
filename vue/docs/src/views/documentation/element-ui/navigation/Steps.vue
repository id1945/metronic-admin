<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#steps"></a>
      Steps
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Guide the user to complete tasks in accordance with the process. Its steps
      can be set according to the actual application scenario and the number of
      the steps can't be less than 2.
    </div>
    <!--end::Block-->
  </div>
  <EUIBasicUsage></EUIBasicUsage>
  <EUIStepBarThatContainsStatus></EUIStepBarThatContainsStatus>
  <EUICenter></EUICenter>
  <EUIStepBarWithDescription></EUIStepBarWithDescription>
  <EUIStepBarWithIcon></EUIStepBarWithIcon>
  <EUIVerticalStepBar></EUIVerticalStepBar>
  <EUISimpleStepBar></EUISimpleStepBar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import EUIBasicUsage from "@/views/documentation/element-ui/navigation/steps/BasicUsage.vue";
import EUIStepBarThatContainsStatus from "@/views/documentation/element-ui/navigation/steps/StepBarThatContainsStatus.vue";
import EUICenter from "@/views/documentation/element-ui/navigation/steps/Center.vue";
import EUIStepBarWithDescription from "@/views/documentation/element-ui/navigation/steps/StepBarWithDescription.vue";
import EUIStepBarWithIcon from "@/views/documentation/element-ui/navigation/steps/StepBarWithIcon.vue";
import EUIVerticalStepBar from "@/views/documentation/element-ui/navigation/steps/VerticalStepBar.vue";
import EUISimpleStepBar from "@/views/documentation/element-ui/navigation/steps/SimpleStepBar.vue";

export default defineComponent({
  name: "steps",
  components: {
    EUIBasicUsage,
    EUIStepBarThatContainsStatus,
    EUICenter,
    EUIStepBarWithDescription,
    EUIStepBarWithIcon,
    EUIVerticalStepBar,
    EUISimpleStepBar,
  },
  setup() {
    setCurrentPageBreadcrumbs("Steps", ["Element UI", "Navigation"]);
  },
});
</script>
