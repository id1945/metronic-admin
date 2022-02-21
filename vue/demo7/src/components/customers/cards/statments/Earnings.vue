<template>
  <!--begin::Earnings-->
  <div :class="`card ${cardClasses}`">
    <!--begin::Header-->
    <div class="card-header border-0">
      <div class="card-title">
        <h2>Earnings</h2>
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-0">
      <div class="fs-5 fw-bold text-gray-500 mb-4">
        Last 30 day earnings calculated. Apart from arranging the order of
        topics.
      </div>

      <!--begin::Left Section-->
      <div class="d-flex flex-wrap flex-stack mb-5">
        <!--begin::Row-->
        <div class="d-flex flex-wrap">
          <!--begin::Col-->
          <div
            class="
              border border-dashed border-gray-300
              w-150px
              rounded
              my-3
              p-4
              me-6
            "
          >
            <span class="fs-1 fw-bolder text-gray-800 lh-1">
              <span
                data-kt-countup="true"
                data-kt-countup-value="6,840"
                data-kt-countup-prefix="$"
                >6,840$</span
              >
              <span class="svg-icon svg-icon-1 svg-icon-success">
                <inline-svg src="media/icons/duotune/arrows/arr066.svg" />
              </span>
            </span>
            <span class="fs-6 fw-bold text-muted d-block lh-1 pt-2"
              >Net Earnings</span
            >
          </div>
          <!--end::Col-->

          <!--begin::Col-->
          <div
            class="
              border border-dashed border-gray-300
              w-125px
              rounded
              my-3
              p-4
              me-6
            "
          >
            <span class="fs-1 fw-bolder text-gray-800 lh-1">
              <span class="" data-kt-countup="true" data-kt-countup-value="16"
                >16</span
              >%
              <span class="svg-icon svg-icon-1 svg-icon-danger">
                <inline-svg src="icons/duotune/arrows/arr065.svg" />
              </span>
            </span>
            <span class="fs-6 fw-bold text-muted d-block lh-1 pt-2"
              >Change</span
            >
          </div>
          <!--end::Col-->

          <!--begin::Col-->
          <div
            class="
              border border-dashed border-gray-300
              w-150px
              rounded
              my-3
              p-4
              me-6
            "
          >
            <span class="fs-1 fw-bolder text-gray-800 lh-1">
              <span
                data-kt-countup="true"
                data-kt-countup-value="1,240"
                data-kt-countup-prefix="$"
                >1,240$</span
              >
              <span class="text-primary">--</span>
            </span>
            <span class="fs-6 fw-bold text-muted d-block lh-1 pt-2">Fees</span>
          </div>
          <!--end::Col-->
        </div>
        <!--end::Row-->

        <a href="#" class="btn btn-sm btn-light-primary flex-shrink-0"
          >Withdraw Earnings</a
        >
      </div>
      <!--end::Left Section-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Earnings-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "earnings",
  props: {
    cardClasses: String,
  },
  components: {},
});
</script>
