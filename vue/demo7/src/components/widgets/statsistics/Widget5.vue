<template>
  <!--begin::Statistics Widget 5-->
  <a href="#" :class="[widgetClasses, `bg-${color}`]" class="card hoverable">
    <!--begin::Body-->
    <div class="card-body">
      <span :class="`svg-icon-${iconColor}`" class="svg-icon svg-icon-3x mx-n1">
        <inline-svg :src="svgIcon" />
      </span>

      <div :class="`text-inverse-${color}`" class="fw-bolder fs-2 mb-2 mt-5">
        {{ title }}
      </div>

      <div :class="`text-inverse-${color}`" class="fw-bold fs-7">
        {{ description }}
      </div>
    </div>
    <!--end::Body-->
  </a>
  <!--end::Statistics Widget 5-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-widget-5",
  props: {
    widgetClasses: String,
    color: String,
    iconColor: String,
    svgIcon: String,
    title: String,
    description: String,
  },
  components: {},
});
</script>
