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
import Overview from "@/views/documentation/general/bootstrap-icons/Overview.vue";
import Usage from "@/views/documentation/general/bootstrap-icons/Usage.vue";
import IconColors from "@/views/documentation/general/bootstrap-icons/IconColors.vue";
import IconSizes from "@/views/documentation/general/bootstrap-icons/IconSizes.vue";

export default defineComponent({
  name: "bootstrap-icons",
  components: {
    Overview,
    Usage,
    IconColors,
    IconSizes,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Bootstrap Icons", ["General", "Icons"]);
    });
  },
});
</script>
