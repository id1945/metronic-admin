<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <Overview></Overview>

      <Basic></Basic>

      <Toggle></Toggle>
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Overview from "@/views/documentation/base/rotate/Overview.vue";
import Basic from "@/views/documentation/base/rotate/Basic.vue";
import Toggle from "@/views/documentation/base/rotate/Toggle.vue";

export default defineComponent({
  name: "indicator",
  components: {
    Overview,
    Basic,
    Toggle,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Rotate", ["Base"]);
    });
  },
});
</script>
