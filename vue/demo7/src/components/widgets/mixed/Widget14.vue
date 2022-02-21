<template>
  <!--begin::Mixed Widget 14-->
  <div
    :class="widgetClasses"
    class="card"
    :style="`background-color: ${widgetColor}`"
  >
    <!--begin::Body-->
    <div class="card-body d-flex flex-column">
      <!--begin::Wrapper-->
      <div class="d-flex flex-column mb-7">
        <!--begin::Title-->
        <a href="#" class="text-dark text-hover-primary fw-bolder fs-3"
          >Summary</a
        >
        <!--end::Title-->
      </div>
      <!--end::Wrapper-->

      <!--begin::Row-->
      <div class="row g-0">
        <!--begin::Col-->
        <div class="col-6">
          <div class="d-flex align-items-center mb-9 me-2">
            <!--begin::Symbol-->
            <div class="symbol symbol-40px me-3">
              <div class="symbol-label bg-white bg-opacity-50">
                <span class="svg-icon svg-icon-1 svg-icon-dark">
                  <inline-svg src="media/icons/duotune/abstract/abs043.svg" />
                </span>
              </div>
            </div>
            <!--end::Symbol-->

            <!--begin::Title-->
            <div>
              <div class="fs-5 text-dark fw-bolder lh-1">$50K</div>
              <div class="fs-7 text-gray-600 fw-bold">Sales</div>
            </div>
            <!--end::Title-->
          </div>
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-6">
          <div class="d-flex align-items-center mb-9 ms-2">
            <!--begin::Symbol-->
            <div class="symbol symbol-40px me-3">
              <div class="symbol-label bg-white bg-opacity-50">
                <span class="svg-icon svg-icon-1 svg-icon-dark">
                  <inline-svg src="media/icons/duotune/abstract/abs046.svg" />
                </span>
              </div>
            </div>
            <!--end::Symbol-->

            <!--begin::Title-->
            <div>
              <div class="fs-5 text-dark fw-bolder lh-1">$4,5K</div>
              <div class="fs-7 text-gray-600 fw-bold">Revenue</div>
            </div>
            <!--end::Title-->
          </div>
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-6">
          <div class="d-flex align-items-center me-2">
            <!--begin::Symbol-->
            <div class="symbol symbol-40px me-3">
              <div class="symbol-label bg-white bg-opacity-50">
                <span class="svg-icon svg-icon-1 svg-icon-dark">
                  <inline-svg src="media/icons/duotune/abstract/abs022.svg" />
                </span>
              </div>
            </div>
            <!--end::Symbol-->

            <!--begin::Title-->
            <div>
              <div class="fs-5 text-dark fw-bolder lh-1">40</div>
              <div class="fs-7 text-gray-600 fw-bold">Tasks</div>
            </div>
            <!--end::Title-->
          </div>
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-6">
          <div class="d-flex align-items-center ms-2">
            <!--begin::Symbol-->
            <div class="symbol symbol-40px me-3">
              <div class="symbol-label bg-white bg-opacity-50">
                <span class="svg-icon svg-icon-1 svg-icon-dark">
                  <inline-svg src="media/icons/duotune/abstract/abs045.svg" />
                </span>
              </div>
            </div>
            <!--end::Symbol-->

            <!--begin::Title-->
            <div>
              <div class="fs-5 text-dark fw-bolder lh-1">$5.8M</div>
              <div class="fs-7 text-gray-600 fw-bold">Sales</div>
            </div>
            <!--end::Title-->
          </div>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Row-->
    </div>
  </div>
  <!--end::Mixed Widget 14-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "widget-14",
  props: {
    widgetClasses: String,
    widgetColor: String,
  },
});
</script>
