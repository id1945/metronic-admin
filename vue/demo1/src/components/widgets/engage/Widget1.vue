<template>
  <!--begin::Engage Widget 1-->
  <div class="card" :class="widgetClasses">
    <!--begin::Body-->
    <div class="card-body pb-0">
      <!--begin::Wrapper-->
      <div class="d-flex flex-column justify-content-between h-100">
        <!--begin::Section-->
        <div class="pt-15 mb-10">
          <!--begin::Title-->
          <h3 class="text-dark text-center fs-1 fw-bolder lh-lg">
            Upgrade to Pro<br />
            For Limitless Features
          </h3>
          <!--end::Title-->

          <!--begin::Text-->
          <div class="text-center text-gray-600 fs-6 fw-bold pt-4 pb-1">
            They stoping you from amazing poorly about drive.<br />
            Outlines keep you honest.
          </div>
          <!--end::Text-->

          <!--begin::Action-->
          <div class="text-center py-7">
            <a
              href="#"
              class="btn btn-primary fs-6 px-6"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_create_app"
              >Get Started</a
            >
          </div>
          <!--end::Action-->
        </div>
        <!--end::Section-->

        <!--begin::Image-->
        <div
          class="
            flex-grow-1
            bgi-no-repeat
            bgi-size-contain
            bgi-position-x-center
            bgi-position-y-bottom
            card-rounded-bottom
            h-200px
          "
          style="background-image: url('media/illustrations/sketchy-1/8.png')"
        ></div>
        <!--end::Image-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Engage Widget 1-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "widget-1",
  props: {
    widgetClasses: String,
  },
});
</script>
