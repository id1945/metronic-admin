<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#time-picker"></a>
      TimePicker
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Use Time Picker for time input.</div>
    <!--end::Block-->
  </div>
  <EUIArbitraryTimePicker></EUIArbitraryTimePicker>
  <EUIArbitraryTimeRange></EUIArbitraryTimeRange>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import EUIArbitraryTimePicker from "@/views/documentation/element-ui/form/time-picker/ArbitraryTimePicker.vue";
import EUIArbitraryTimeRange from "@/views/documentation/element-ui/form/time-picker/ArbitraryTimeRange.vue";

export default defineComponent({
  name: "time-picker",
  components: {
    EUIArbitraryTimePicker,
    EUIArbitraryTimeRange,
  },
  setup() {
    setCurrentPageBreadcrumbs("TimePicker", ["Element UI", "Form"]);
  },
});
</script>
