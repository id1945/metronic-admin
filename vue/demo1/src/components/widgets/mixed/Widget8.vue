<template>
  <!--begin::Mixed Widget 8-->
  <div :class="widgetClasses" class="card">
    <!--begin::Body-->
    <div class="card-body">
      <!--begin::Heading-->
      <div class="d-flex flex-stack">
        <!--begin:Info-->
        <div class="d-flex align-items-center">
          <!--begin:Image-->
          <div class="symbol symbol-60px me-5">
            <span :class="`bg-${color}-light`" class="symbol-label">
              <img :src="image" class="h-50 align-self-center" alt="" />
            </span>
          </div>
          <!--end:Image-->

          <!--begin:Title-->
          <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
            <a href="#" class="text-dark fw-bolder text-hover-primary fs-5">
              {{ title }}
            </a>

            <span class="text-muted fw-bold">
              {{ date }}
            </span>
          </div>
          <!--end:Title-->
        </div>
        <!--begin:Info-->

        <!--begin:Menu-->
        <div class="ms-1">
          <button
            type="button"
            class="
              btn btn-sm btn-icon btn-color-primary btn-active-light-primary
            "
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/general/gen024.svg" />
            </span>
          </button>
          <Dropdown2></Dropdown2>
        </div>
        <!--end::Menu-->
      </div>
      <!--end::Heading-->

      <!--begin:Stats-->
      <div class="d-flex flex-column w-100 mt-12">
        <span class="text-dark me-2 fw-bolder pb-3"> Progress </span>

        <div class="progress h-5px w-100">
          <div
            :class="`bg-${color}`"
            class="progress-bar"
            role="progressbar"
            :style="`width: ${progress}%`"
            :aria-valuenow="progress"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <!--end:Stats-->

      <!--begin:Team-->
      <div class="d-flex flex-column mt-10">
        <div class="text-dark me-2 fw-bolder pb-4">Team</div>

        <div class="d-flex">
          <a
            href="#"
            class="symbol symbol-35px me-2"
            data-bs-toggle="tooltip"
            title="Ana Stone"
          >
            <img src="media/avatars/150-1.jpg" alt="" />
          </a>

          <a
            href="#"
            class="symbol symbol-35px me-2"
            data-bs-toggle="tooltip"
            title="Mark Larson"
          >
            <img src="media/avatars/150-4.jpg" alt="" />
          </a>

          <a
            href="#"
            class="symbol symbol-35px me-2"
            data-bs-toggle="tooltip"
            title="Sam Harris"
          >
            <img src="media/avatars/150-8.jpg" alt="" />
          </a>

          <a
            href="#"
            class="symbol symbol-35px"
            data-bs-toggle="tooltip"
            title="Alice Micto"
          >
            <img src="media/avatars/150-9.jpg" alt="" />
          </a>
        </div>
      </div>
      <!--end:Team-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Mixed Widget 8-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";

export default defineComponent({
  name: "widget-1",
  components: {
    Dropdown2,
  },
  props: {
    widgetClasses: String,
    color: String,
    image: String,
    title: String,
    date: String,
    progress: String,
  },
});
</script>
