<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#dropdown"></a>
      Dropdown
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Toggleable menu for displaying lists of links and actions.
    </div>
    <!--end::Block-->
  </div>
  <EUIBasicUsage></EUIBasicUsage>
  <EUITriggeringElement></EUITriggeringElement>
  <EUIHowToTrigger></EUIHowToTrigger>
  <EUIMenuHidingBehavior></EUIMenuHidingBehavior>
  <EUICommandEvent></EUICommandEvent>
  <EUISizes></EUISizes>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import EUIBasicUsage from "@/views/documentation/element-ui/navigation/dropdown/BasicUsage.vue";
import EUITriggeringElement from "@/views/documentation/element-ui/navigation/dropdown/TriggeringElement.vue";
import EUIHowToTrigger from "@/views/documentation/element-ui/navigation/dropdown/HowToTrigger.vue";
import EUIMenuHidingBehavior from "@/views/documentation/element-ui/navigation/dropdown/MenuHidingBehavior.vue";
import EUICommandEvent from "@/views/documentation/element-ui/navigation/dropdown/CommandEvent.vue";
import EUISizes from "@/views/documentation/element-ui/navigation/dropdown/Sizes.vue";

export default defineComponent({
  name: "dropdown",
  components: {
    EUIBasicUsage,
    EUITriggeringElement,
    EUIHowToTrigger,
    EUIMenuHidingBehavior,
    EUICommandEvent,
    EUISizes,
  },
  setup() {
    setCurrentPageBreadcrumbs("Dropdown", ["Element UI", "Navigation"]);
  },
});
</script>
