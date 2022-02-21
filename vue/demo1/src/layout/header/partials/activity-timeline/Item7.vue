<template>
  <!--begin::Timeline item-->
  <div class="timeline-item">
    <!--begin::Timeline line-->
    <div class="timeline-line w-40px"></div>
    <!--end::Timeline line-->

    <!--begin::Timeline icon-->
    <div class="timeline-icon symbol symbol-circle symbol-40px">
      <div class="symbol-label bg-light">
        <span class="svg-icon svg-icon-2 svg-icon-gray-500">
          <inline-svg src="media/icons/duotune/art/art005.svg" />
        </span>
      </div>
    </div>
    <!--end::Timeline icon-->

    <!--begin::Timeline content-->
    <div class="timeline-content mb-10 mt-n1">
      <!--begin::Timeline heading-->
      <div class="pe-3 mb-5">
        <!--begin::Title-->
        <div class="fs-5 fw-bold mb-2">You have received a new order:</div>
        <!--end::Title-->

        <!--begin::Description-->
        <div class="d-flex align-items-center mt-1 fs-6">
          <!--begin::Info-->
          <div class="text-muted me-2 fs-7">Placed at 5:05 AM by</div>
          <!--end::Info-->

          <!--begin::User-->
          <div
            class="symbol symbol-circle symbol-25px"
            data-bs-toggle="tooltip"
            data-bs-boundary="window"
            data-bs-placement="top"
            title="Robert Rich"
          >
            <img src="media/avatars/150-14.jpg" alt="img" />
          </div>
          <!--end::User-->
        </div>
        <!--end::Description-->
      </div>
      <!--end::Timeline heading-->

      <!--begin::Timeline details-->
      <div class="overflow-auto pb-5">
        <div
          class="
            notice
            d-flex
            bg-light-primary
            rounded
            border-primary border border-dashed
            min-w-lg-600px
            flex-shrink-0
            p-6
          "
        >
          <!--begin::Icon-->
          <span class="svg-icon svg-icon-2tx svg-icon-primary me-4">
            <inline-svg src="media/icons/duotune/coding/cod004.svg" />
          </span>
          <!--end::Icon-->

          <!--begin::Wrapper-->
          <div class="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
            <!--begin::Content-->
            <div class="mb-3 mb-md-0 fw-bold">
              <h4 class="text-gray-800 fw-bolder">
                Database Backup Process Completed!
              </h4>

              <div class="fs-6 text-gray-600 pe-7">
                Login into Metronic Admin Dashboard to make sure the data
                integrity is OK
              </div>
            </div>
            <!--end::Content-->

            <!--begin::Action-->
            <a
              href="#"
              class="btn btn-primary px-6 align-self-center text-nowrap"
            >
              Proceed
            </a>
            <!--end::Action-->
          </div>
          <!--end::Wrapper-->
        </div>
      </div>
      <!--end::Timeline details-->
    </div>
    <!--end::Timeline content-->
  </div>
  <!--end::Timeline item-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "",
  components: {},
});
</script>
