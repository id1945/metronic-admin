<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <Overview></Overview>
      <ImageUsage></ImageUsage>
      <InlineUsage></InlineUsage>
      <IconColors></IconColors>
      <IconSizes></IconSizes>
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Overview from "@/views/documentation/general/duotune/Overview.vue";
import ImageUsage from "@/views/documentation/general/duotune/ImageUsage.vue";
import InlineUsage from "@/views/documentation/general/duotune/InlineUsage.vue";
import IconColors from "@/views/documentation/general/duotune/IconColors.vue";
import IconSizes from "@/views/documentation/general/bootstrap-icons/IconSizes.vue";

export default defineComponent({
  name: "duotune",
  components: {
    Overview,
    ImageUsage,
    InlineUsage,
    IconColors,
    IconSizes,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Duotune", ["General", "Icons"]);
    });
  },
});
</script>
