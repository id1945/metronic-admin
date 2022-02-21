<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <Overview></Overview>

      <LineSeparator></LineSeparator>

      <DotSeparator></DotSeparator>
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Overview from "@/views/documentation/base/breadcrumb/Overview.vue";
import LineSeparator from "@/views/documentation/base/breadcrumb/LineSeparator.vue";
import DotSeparator from "@/views/documentation/base/breadcrumb/DotSeparator.vue";

export default defineComponent({
  name: "breadcrumb",
  components: {
    Overview,
    LineSeparator,
    DotSeparator,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Breadcrumb", ["Base"]);
    });
  },
});
</script>
