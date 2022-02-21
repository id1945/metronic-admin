<template>
  <div
    id="kt_aside"
    class="aside aside-extended bg-white"
    data-kt-drawer="true"
    data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="auto"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_aside_toggle"
  >
    <KTAsidePrimary></KTAsidePrimary>
    <KTAsideSecondary></KTAsideSecondary>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated } from "vue";
import { DrawerComponent } from "@/assets/ts/components/_DrawerComponent";
import { ToggleComponent } from "@/assets/ts/components/_ToggleComponent";
import KTAsidePrimary from "@/layout/aside/AsidePrimary.vue";
import KTAsideSecondary from "@/layout/aside/AsideSecondary.vue";

export default defineComponent({
  name: "KTAside",
  components: {
    KTAsidePrimary,
    KTAsideSecondary,
  },
  props: {
    lightLogo: String,
    darkLogo: String,
  },
  setup() {
    onMounted(() => {
      DrawerComponent.reinitialization();
      ToggleComponent.reinitialization();
    });

    onUpdated(() => {
      ToggleComponent.bootstrap();
    });
  },
});
</script>
