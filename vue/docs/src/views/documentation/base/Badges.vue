<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <Overview></Overview>

      <Basic></Basic>

      <LightStyle></LightStyle>

      <SquareBadge></SquareBadge>

      <CircleBadge></CircleBadge>
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Overview from "@/views/documentation/base/badges/Overview.vue";
import Basic from "@/views/documentation/base/badges/Basic.vue";
import LightStyle from "@/views/documentation/base/badges/LightStyle.vue";
import SquareBadge from "@/views/documentation/base/badges/SquareBadge.vue";
import CircleBadge from "@/views/documentation/base/badges/CircleBadge.vue";

export default defineComponent({
  name: "badges",
  components: {
    Overview,
    Basic,
    LightStyle,
    SquareBadge,
    CircleBadge,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Badges", ["Base"]);
    });
  },
});
</script>
