<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#localization"></a>
      Localization
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      The default locale of is English, if you need to use other languages,
      please check Internationalization Note, date time locale (month name,
      first day of the week ...) are also configed in localization.
    </div>
    <!--end::Block-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "localization",
  components: {},
});
</script>
