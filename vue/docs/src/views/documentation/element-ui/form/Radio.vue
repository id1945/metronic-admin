<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#radio"></a>
      Radio
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Single selection among multiple options.</div>
    <!--end::Block-->
  </div>
  <EUIBasicUsage></EUIBasicUsage>
  <EUIDisabled></EUIDisabled>
  <EUIRadioButtonGroup></EUIRadioButtonGroup>
  <EUIButtonStyle></EUIButtonStyle>
  <EUIWithBorders></EUIWithBorders>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import EUIBasicUsage from "@/views/documentation/element-ui/form/radio/BasicUsage.vue";
import EUIDisabled from "@/views/documentation/element-ui/form/radio/Disabled.vue";
import EUIRadioButtonGroup from "@/views/documentation/element-ui/form/radio/RadioButtonGroup.vue";
import EUIButtonStyle from "@/views/documentation/element-ui/form/radio/ButtonStyle.vue";
import EUIWithBorders from "@/views/documentation/element-ui/form/radio/WithBorders.vue";

export default defineComponent({
  name: "radio",
  components: {
    EUIBasicUsage,
    EUIDisabled,
    EUIRadioButtonGroup,
    EUIButtonStyle,
    EUIWithBorders,
  },
  setup() {
    setCurrentPageBreadcrumbs("Radio", ["Element UI", "Form"]);
  },
});
</script>
