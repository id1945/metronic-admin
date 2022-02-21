<template>
  <!--begin::Section-->
  <div class="pb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="overview">
      <a href="#overview"></a>
      Overview
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use over 1000 high quality vector duotune SVG icons as image or inline SVG
      element in combination with any <b>{{ themeName }}</b> elements.
    </div>
    <!--end::Block-->
  </div>
  <!--end::Section-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { themeName } from "@/core/helpers/documentation";

export default defineComponent({
  name: "overview",
  components: {},
  setup() {
    return {
      themeName,
    };
  },
});
</script>
