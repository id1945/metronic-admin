<template>
  <EUICustomizable></EUICustomizable>
  <EUIPropAliases></EUIPropAliases>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import EUICustomizable from "@/views/documentation/element-ui/form/transfer/Customizable.vue";
import EUIPropAliases from "@/views/documentation/element-ui/form/transfer/PropAliases.vue";

export default defineComponent({
  name: "transfer",
  components: {
    EUICustomizable,
    EUIPropAliases,
  },
  setup() {
    setCurrentPageBreadcrumbs("Transfer", ["Element UI", "Form"]);
  },
});
</script>
