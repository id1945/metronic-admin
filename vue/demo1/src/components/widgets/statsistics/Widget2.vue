<template>
  <!--begin::Statistics Widget 2-->
  <div :class="widgetClasses" class="card">
    <!--begin::Body-->
    <div class="card-body d-flex align-items-center pt-3 pb-0">
      <div class="d-flex flex-column flex-grow-1 py-2 py-lg-13 me-2">
        <a href="#" class="fw-bolder text-dark fs-4 mb-2 text-hover-primary">{{
          title
        }}</a>

        <span class="fw-bold text-muted fs-5">{{ description }}</span>
      </div>

      <img :src="avatar" alt="" class="align-self-end h-100px" />
    </div>
    <!--end::Body-->
  </div>
  <!--end::Statistics Widget 2-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-widget-2",
  props: {
    widgetClasses: String,
    title: String,
    description: String,
    avatar: String,
  },
  components: {},
});
</script>
