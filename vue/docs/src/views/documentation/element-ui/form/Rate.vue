<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#rate"></a>
      Rate
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Used for rating</div>
    <!--end::Block-->
  </div>
  <EUIBasicUsage></EUIBasicUsage>
  <EUIWithAllowHalf></EUIWithAllowHalf>
  <EUIWithText></EUIWithText>
  <EUIMoreIcons></EUIMoreIcons>
  <EUIReadOnly></EUIReadOnly>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import EUIBasicUsage from "@/views/documentation/element-ui/form/rate/BasicUsage.vue";
import EUIWithAllowHalf from "@/views/documentation/element-ui/form/rate/WithAllowHalf.vue";
import EUIWithText from "@/views/documentation/element-ui/form/rate/WithText.vue";
import EUIMoreIcons from "@/views/documentation/element-ui/form/rate/MoreIcons.vue";
import EUIReadOnly from "@/views/documentation/element-ui/form/rate/ReadOnly.vue";

export default defineComponent({
  name: "rate",
  components: {
    EUIBasicUsage,
    EUIWithAllowHalf,
    EUIWithText,
    EUIMoreIcons,
    EUIReadOnly,
  },
  setup() {
    setCurrentPageBreadcrumbs("Rate", ["Element UI", "Form"]);
  },
});
</script>
