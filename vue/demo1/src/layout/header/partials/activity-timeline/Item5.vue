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
        <div class="fs-5 fw-bold mb-2">
          3 new application design concepts added:
        </div>
        <!--end::Title-->

        <!--begin::Description-->
        <div class="d-flex align-items-center mt-1 fs-6">
          <!--begin::Info-->
          <div class="text-muted me-2 fs-7">Created at 4:23 PM by</div>
          <!--end::Info-->

          <!--begin::User-->
          <div
            class="symbol symbol-circle symbol-25px"
            data-bs-toggle="tooltip"
            data-bs-boundary="window"
            data-bs-placement="top"
            title="Marcus Dotson"
          >
            <img src="media/avatars/150-3.jpg" alt="img" />
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
            d-flex
            align-items-center
            border border-dashed border-gray-300
            rounded
            min-w-700px
            p-7
          "
        >
          <!--begin::Item-->
          <div class="overlay me-10">
            <!--begin::Image-->
            <div class="overlay-wrapper">
              <img
                alt="img"
                class="rounded w-200px"
                src="media/demos/demo1.png"
              />
            </div>
            <!--end::Image-->

            <!--begin::Link-->
            <div class="overlay-layer bg-dark bg-opacity-10 rounded">
              <a href="#" class="btn btn-sm btn-primary btn-shadow">Explore</a>
            </div>
            <!--end::Link-->
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="overlay me-10">
            <!--begin::Image-->
            <div class="overlay-wrapper">
              <img
                alt="img"
                class="rounded w-200px"
                src="media/demos/demo2.png"
              />
            </div>
            <!--end::Image-->

            <!--begin::Link-->
            <div class="overlay-layer bg-dark bg-opacity-10 rounded">
              <a href="#" class="btn btn-sm btn-primary btn-shadow">Explore</a>
            </div>
            <!--end::Link-->
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="overlay">
            <!--begin::Image-->
            <div class="overlay-wrapper">
              <img
                alt="img"
                class="rounded w-200px"
                src="media/demos/demo3.png"
              />
            </div>
            <!--end::Image-->

            <!--begin::Link-->
            <div class="overlay-layer bg-dark bg-opacity-10 rounded">
              <a href="#" class="btn btn-sm btn-primary btn-shadow">Explore</a>
            </div>
            <!--end::Link-->
          </div>
          <!--end::Item-->
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
