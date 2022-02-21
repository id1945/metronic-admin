<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <Overview></Overview>

      <Basic></Basic>

      <Colors></Colors>

      <BorderWidth></BorderWidth>
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Overview from "@/views/documentation/base/pulse/Overview.vue";
import Basic from "@/views/documentation/base/pulse/Basic.vue";
import Colors from "@/views/documentation/base/pulse/Colors.vue";
import BorderWidth from "@/views/documentation/base/pulse/BorderWidth.vue";

export default defineComponent({
  name: "pulse",
  components: {
    Overview,
    Basic,
    Colors,
    BorderWidth,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Pulse", ["Base"]);
    });
  },
});
</script>
