<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#empty"></a>
      Empty
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Placeholder hints for empty states.</div>
    <!--end::Block-->
  </div>
  <EUIBasicUsage></EUIBasicUsage>
  <EUICustomImage></EUICustomImage>
  <EUIImageSize></EUIImageSize>
  <EUIBottomContent></EUIBottomContent>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import EUIBasicUsage from "@/views/documentation/element-ui/data/empty/BasicUsage.vue";
import EUICustomImage from "@/views/documentation/element-ui/data/empty/CustomImage.vue";
import EUIImageSize from "@/views/documentation/element-ui/data/empty/ImageSize.vue";
import EUIBottomContent from "@/views/documentation/element-ui/data/empty/BottomContent.vue";

export default defineComponent({
  name: "empty",
  components: {
    EUIBasicUsage,
    EUICustomImage,
    EUIImageSize,
    EUIBottomContent,
  },
  setup() {
    setCurrentPageBreadcrumbs("Empty", ["Element UI", "Data"]);
  },
});
</script>
