<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <Overview></Overview>
      <Usage></Usage>
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
import Overview from "@/views/documentation/general/line-awesome/Overview.vue";
import Usage from "@/views/documentation/general/line-awesome/Usage.vue";
import IconColors from "@/views/documentation/general/line-awesome/IconColors.vue";
import IconSizes from "@/views/documentation/general/line-awesome/IconSizes.vue";

export default defineComponent({
  name: "line-awesome",
  components: {
    Overview,
    Usage,
    IconColors,
    IconSizes,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Line Awesome", ["General", "Icons"]);
    });
  },
});
</script>
