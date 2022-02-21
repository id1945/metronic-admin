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
      Get vector icons and social logos on your website with
      <a href="https://fontawesome.com/" class="fw-bold" target="_blank"
        >Font Awesome</a
      >, the web's most popular icon set and toolkit. Font Awesome Free package
      included in <b>{{ themeName }}</b> and can be used right away by browsing
      the
      <a
        href="https://fontawesome.com/icons?d=gallery&m=free"
        class="fw-bold"
        target="_blank"
        >Free Font Awesome Icons</a
      >.
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
