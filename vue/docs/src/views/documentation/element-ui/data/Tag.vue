<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#tag"></a>
      Tag
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Used for marking and selection.</div>
    <!--end::Block-->
  </div>
  <EUIBasicUsage></EUIBasicUsage>
  <EUIRemovableTag></EUIRemovableTag>
  <EUIEditDynamically></EUIEditDynamically>
  <EUISizes></EUISizes>
  <EUITheme></EUITheme>
  <EUICheckableTag></EUICheckableTag>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import EUIBasicUsage from "@/views/documentation/element-ui/data/tag/BasicUsage.vue";
import EUIRemovableTag from "@/views/documentation/element-ui/data/tag/RemovableTag.vue";
import EUIEditDynamically from "@/views/documentation/element-ui/data/tag/EditDynamically.vue";
import EUISizes from "@/views/documentation/element-ui/data/tag/Sizes.vue";
import EUITheme from "@/views/documentation/element-ui/data/tag/Theme.vue";
import EUICheckableTag from "@/views/documentation/element-ui/data/tag/CheckableTag.vue";

export default defineComponent({
  name: "tag",
  components: {
    EUIBasicUsage,
    EUIRemovableTag,
    EUIEditDynamically,
    EUISizes,
    EUITheme,
    EUICheckableTag,
  },
  setup() {
    setCurrentPageBreadcrumbs("Tag", ["Element UI", "Data"]);
  },
});
</script>
