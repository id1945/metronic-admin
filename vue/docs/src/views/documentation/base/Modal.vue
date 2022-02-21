<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <Overview></Overview>

      <BasicExample></BasicExample>

      <FullScreen></FullScreen>
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Overview from "@/views/documentation/base/modal/Overview.vue";
import BasicExample from "@/views/documentation/base/modal/BasicExample.vue";
import FullScreen from "@/views/documentation/base/modal/FullScreen.vue";

export default defineComponent({
  name: "modal",
  components: {
    Overview,
    BasicExample,
    FullScreen,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Modal", ["Base"]);
    });
  },
});
</script>
