<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#button"></a>
      Button
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Commonly used button.</div>
    <!--end::Block-->
  </div>
  <EUIBasicUsage></EUIBasicUsage>
  <EUIDisabledButton></EUIDisabledButton>
  <EUITextButton></EUITextButton>
  <EUIIconButton></EUIIconButton>
  <EUIButtonGroup></EUIButtonGroup>
  <EUILoadingButton></EUILoadingButton>
  <EUISizes></EUISizes>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import EUIBasicUsage from "@/views/documentation/element-ui/basic/button/BasicUsage.vue";
import EUIDisabledButton from "@/views/documentation/element-ui/basic/button/DisabledButton.vue";
import EUITextButton from "@/views/documentation/element-ui/basic/button/TextButton.vue";
import EUIIconButton from "@/views/documentation/element-ui/basic/button/IconButton.vue";
import EUIButtonGroup from "@/views/documentation/element-ui/basic/button/ButtonGroup.vue";
import EUILoadingButton from "@/views/documentation/element-ui/basic/button/LoadingButton.vue";
import EUISizes from "@/views/documentation/element-ui/basic/button/Sizes.vue";

export default defineComponent({
  name: "layout",
  components: {
    EUIBasicUsage,
    EUIDisabledButton,
    EUITextButton,
    EUIIconButton,
    EUIButtonGroup,
    EUILoadingButton,
    EUISizes,
  },
  setup() {
    setCurrentPageBreadcrumbs("Button", ["Element UI", "Basic"]);
  },
});
</script>
