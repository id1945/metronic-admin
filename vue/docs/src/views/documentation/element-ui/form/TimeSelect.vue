<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#time-select"></a>
      TimeSelect
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Use Time Select for time input.</div>
    <!--end::Block-->
  </div>
  <EUIFixedTimePicker></EUIFixedTimePicker>
  <EUIFixedTimeRange></EUIFixedTimeRange>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import EUIFixedTimePicker from "@/views/documentation/element-ui/form/time-select/FixedTimePicker.vue";
import EUIFixedTimeRange from "@/views/documentation/element-ui/form/time-select/FixedTimeRange.vue";

export default defineComponent({
  name: "time-select",
  components: {
    EUIFixedTimePicker,
    EUIFixedTimeRange,
  },
  setup() {
    setCurrentPageBreadcrumbs("TimeSelect", ["Element UI", "Form"]);
  },
});
</script>
