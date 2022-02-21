<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#page-header"></a>
      PageHeader
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      If path of the page is simple, it is recommended to use PageHeader instead
      of the Breadcrumb.
    </div>
    <!--end::Block-->
  </div>
  <EUIBasic></EUIBasic>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import EUIBasic from "@/views/documentation/element-ui/navigation/page-header/Basic.vue";

export default defineComponent({
  name: "page-header",
  components: {
    EUIBasic,
  },
  setup() {
    setCurrentPageBreadcrumbs("PageHeader", ["Element UI", "Navigation"]);
  },
});
</script>
