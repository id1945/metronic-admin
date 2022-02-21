<template>
  <div class="d-flex justify-content-start mb-10">
    <!--begin::Wrapper-->
    <div class="d-flex flex-column align-items-start">
      <!--begin::User-->
      <div class="d-flex align-items-center mb-2">
        <div class="symbol symbol-35px symbol-circle">
          <img alt="Pic" :src="image" />
        </div>

        <!--begin::Details-->
        <div class="ms-3">
          <a
            href="#"
            class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1"
            >{{ name }}</a
          >
          <span class="text-muted fs-7 mb-1">{{ time }}</span>
        </div>
        <!--end::Details-->
      </div>
      <!--end::User-->

      <!--begin::Text-->
      <div
        class="
          p-5
          rounded
          bg-light-info
          text-dark
          fw-bold
          mw-lg-400px
          text-start
        "
        data-kt-element="message-text"
      >
        {{ text }}
      </div>
      <!--end::Text-->
    </div>
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "message-out",
  props: {
    name: String,
    image: String,
    time: String,
    text: String,
  },
});
</script>
