<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <Overview></Overview>

      <ThemeColor></ThemeColor>

      <Spacing></Spacing>

      <FontSize></FontSize>

      <LineHeight></LineHeight>

      <Opacity></Opacity>

      <WidthAndHeight></WidthAndHeight>

      <ZIndex></ZIndex>
    </div>
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Overview from "@/views/documentation/base/utilities/Overview.vue";
import ThemeColor from "@/views/documentation/base/utilities/ThemeColor.vue";
import Spacing from "@/views/documentation/base/utilities/Spacing.vue";
import FontSize from "@/views/documentation/base/utilities/FontSize.vue";
import LineHeight from "@/views/documentation/base/utilities/LineHeight.vue";
import Opacity from "@/views/documentation/base/utilities/Opacity.vue";
import WidthAndHeight from "@/views/documentation/base/utilities/WidthAndHeight.vue";
import ZIndex from "@/views/documentation/base/utilities/ZIndex.vue";

export default defineComponent({
  name: "utilities",
  components: {
    Overview,
    ThemeColor,
    Spacing,
    FontSize,
    LineHeight,
    Opacity,
    WidthAndHeight,
    ZIndex,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Utilities", ["Base"]);
    });
  },
});
</script>
