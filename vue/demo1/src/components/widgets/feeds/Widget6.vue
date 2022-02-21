<template>
  <!--begin::Forms Widget 6-->
  <div class="card" :class="widgetClasses">
    <!--begin::Body-->
    <div class="card-body pb-0">
      <!--begin::Header-->
      <div class="d-flex align-items-center mb-5">
        <!--begin::User-->
        <div class="d-flex align-items-center flex-grow-1">
          <!--begin::Avatar-->
          <div class="symbol symbol-45px me-5">
            <img src="media/avatars/150-17.jpg" alt="" />
          </div>
          <!--end::Avatar-->

          <!--begin::Info-->
          <div class="d-flex flex-column">
            <a href="#" class="text-gray-800 text-hover-primary fs-6 fw-bolder"
              >Mat Dillon</a
            >
            <span class="text-gray-400 fw-bold">Last month</span>
          </div>
          <!--end::Info-->
        </div>
        <!--end::User-->

        <!--begin::Menu-->
        <div class="my-0">
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
          <Dropdown3></Dropdown3>
        </div>
        <!--end::Menu-->
      </div>
      <!--end::Header-->

      <!--begin::Post-->
      <div class="mb-6">
        <!--begin::Text-->
        <div class="text-gray-800 fs-6 fw-normal mb-5">
          Outlines keep you honest. They stop you from indulging in poorly
          thought-out metaphors
        </div>
        <!--end::Text-->

        <!--begin::Video-->
        <div class="mb-5">
          <iframe
            class="embed-responsive-item rounded h-300px w-100"
            src="https://www.youtube.com/embed/qIHXpnASPAA"
            allowfullscreen=""
          ></iframe>
        </div>
        <!--end::Video-->

        <!--begin::Toolbar-->
        <div class="d-flex align-items-center mb-5">
          <a
            href="#"
            class="
              btn btn-sm btn-light btn-color-muted btn-active-light-success
              px-4
              py-2
              me-4
            "
          >
            <span class="svg-icon svg-icon-3">
              <inline-svg src="media/icons/duotune/communication/com012.svg" />
            </span>
            189
          </a>

          <a
            href="#"
            class="
              btn btn-sm btn-light btn-color-muted btn-active-light-danger
              px-4
              py-2
            "
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/general/gen030.svg" />
            </span>
            229
          </a>
        </div>
        <!--end::Toolbar-->
      </div>
      <!--end::Bottom-->

      <!--begin::Separator-->
      <div class="separator mb-4"></div>
      <!--end::Separator-->

      <!--begin::Reply input-->
      <form class="position-relative mb-6">
        <textarea
          class="form-control border-0 p-0 pe-10 resize-none min-h-25px"
          data-kt-autosize="true"
          rows="1"
          placeholder="Reply.."
        ></textarea>

        <div class="position-absolute top-0 end-0 me-n5">
          <span class="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
            <span class="svg-icon svg-icon-3 mb-3">
              <inline-svg src="media/icons/duotune/communication/com008.svg" />
            </span>
          </span>

          <span class="btn btn-icon btn-sm btn-active-color-primary ps-0">
            <span class="svg-icon svg-icon-2 mb-3">
              <inline-svg src="media/icons/duotune/general/gen018.svg" />
            </span>
          </span>
        </div>
      </form>
      <!--edit::Reply input-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Forms Widget 6-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "widget-6",
  props: {
    widgetClasses: String,
  },
  components: {
    Dropdown3,
  },
});
</script>
