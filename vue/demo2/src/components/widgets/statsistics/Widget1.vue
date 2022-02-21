<template>
  <!--begin::Statistics Widget 1-->
  <div
    :class="widgetClasses"
    :style="`background-image: url('media/svg/shapes/${background}')`"
    class="card bgi-no-repeat"
    style="background-position: right top; background-size: 30% auto"
  >
    <!--begin::Body-->
    <div class="card-body">
      <a
        href="#"
        class="card-title fw-bolder text-muted text-hover-primary fs-4"
        >{{ title }}</a
      >

      <div class="fw-bolder text-primary my-6">{{ time }}</div>

      <p class="text-dark-75 fw-bold fs-5 m-0">
        <span v-html="description"></span>
      </p>
    </div>
    <!--end::Body-->
  </div>
  <!--end::Statistics Widget 1-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-widget-1",
  props: {
    widgetClasses: String,
    background: String,
    title: String,
    time: String,
    description: String,
  },
  components: {},
});
</script>
