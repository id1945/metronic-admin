<template>
  <!--begin::Timeline item-->
  <div class="timeline-item">
    <!--begin::Timeline line-->
    <div class="timeline-line w-40px"></div>
    <!--end::Timeline line-->

    <!--begin::Timeline icon-->
    <div class="timeline-icon symbol symbol-circle symbol-40px me-4">
      <div class="symbol-label bg-light">
        <span class="svg-icon svg-icon-2 svg-icon-gray-500">
          <inline-svg src="media/icons/duotune/communication/com003.svg" />
        </span>
      </div>
    </div>
    <!--end::Timeline icon-->

    <!--begin::Timeline content-->
    <div class="timeline-content mb-10 mt-n1">
      <!--begin::Timeline heading-->
      <div class="pe-3 mb-5">
        <!--begin::Title-->
        <div class="fs-5 fw-bold mb-2">
          There are 2 new tasks for you in “AirPlus Mobile APp” project:
        </div>
        <!--end::Title-->

        <!--begin::Description-->
        <div class="d-flex align-items-center mt-1 fs-6">
          <!--begin::Info-->
          <div class="text-muted me-2 fs-7">Added at 4:23 PM by</div>
          <!--end::Info-->

          <!--begin::User-->
          <div
            class="symbol symbol-circle symbol-25px"
            data-bs-toggle="tooltip"
            data-bs-boundary="window"
            data-bs-placement="top"
            title="Nina Nilson"
          >
            <img src="media/avatars/150-11.jpg" alt="img" />
          </div>
          <!--end::User-->
        </div>
        <!--end::Description-->
      </div>
      <!--end::Timeline heading-->

      <!--begin::Timeline details-->
      <div class="overflow-auto pb-5">
        <!--begin::Record-->
        <div
          class="
            d-flex
            align-items-center
            border border-dashed border-gray-300
            rounded
            min-w-750px
            px-7
            py-3
            mb-5
          "
        >
          <!--begin::Title-->
          <a
            href="#"
            class="
              fs-5
              text-dark text-hover-primary
              fw-bold
              w-375px
              min-w-200px
            "
            >Meeting with customer</a
          >
          <!--end::Title-->

          <!--begin::Label-->
          <div class="min-w-175px pe-2">
            <span class="badge badge-light text-muted">Application Design</span>
          </div>
          <!--end::Label-->

          <!--begin::Users-->
          <div
            class="
              symbol-group symbol-hover
              flex-nowrap flex-grow-1
              min-w-100px
              pe-2
            "
          >
            <!--begin::User-->
            <div class="symbol symbol-circle symbol-25px">
              <img src="media/avatars/150-3.jpg" alt="img" />
            </div>
            <!--end::User-->

            <!--begin::User-->
            <div class="symbol symbol-circle symbol-25px">
              <img src="media/avatars/150-11.jpg" alt="img" />
            </div>
            <!--end::User-->

            <!--begin::User-->
            <div class="symbol symbol-circle symbol-25px">
              <div
                class="
                  symbol-label
                  fs-8
                  fw-bold
                  bg-primary
                  text-inverse-primary
                "
              >
                A
              </div>
            </div>
            <!--end::User-->
          </div>
          <!--end::Users-->

          <!--begin::Progress-->
          <div class="min-w-125px pe-2">
            <span class="badge badge-light-primary">In Progress</span>
          </div>
          <!--end::Progress-->

          <!--begin::Action-->
          <a href="#" class="btn btn-sm btn-light btn-active-light-primary"
            >View</a
          >
          <!--end::Action-->
        </div>
        <!--end::Record-->

        <!--begin::Record-->
        <div
          class="
            d-flex
            align-items-center
            border border-dashed border-gray-300
            rounded
            min-w-750px
            px-7
            py-3
            mb-0
          "
        >
          <!--begin::Title-->
          <a
            href="#"
            class="
              fs-5
              text-dark text-hover-primary
              fw-bold
              w-375px
              min-w-200px
            "
            >Project Delivery Preparation</a
          >
          <!--end::Title-->

          <!--begin::Label-->
          <div class="min-w-175px">
            <span class="badge badge-light text-muted"
              >CRM System Development</span
            >
          </div>
          <!--end::Label-->

          <!--begin::Users-->
          <div
            class="
              symbol-group symbol-hover
              flex-nowrap flex-grow-1
              min-w-100px
            "
          >
            <!--begin::User-->
            <div class="symbol symbol-circle symbol-25px">
              <img src="media/avatars/150-5.jpg" alt="img" />
            </div>
            <!--end::User-->

            <!--begin::User-->
            <div class="symbol symbol-circle symbol-25px">
              <div
                class="
                  symbol-label
                  fs-8
                  fw-bold
                  bg-success
                  text-inverse-primary
                "
              >
                B
              </div>
            </div>
            <!--end::User-->
          </div>
          <!--end::Users-->

          <!--begin::Progress-->
          <div class="min-w-125px">
            <span class="badge badge-light-success">Completed</span>
          </div>
          <!--end::Progress-->

          <!--begin::Action-->
          <a href="#" class="btn btn-sm btn-light btn-active-light-primary"
            >View</a
          >
          <!--end::Action-->
        </div>
        <!--end::Record-->
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
  name: "item-1",
  components: {},
});
</script>
