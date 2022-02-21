<template>
  <!--begin::Col-->
  <div class="col-md-6 col-xxl-4">
    <!--begin::Card-->
    <div class="card" :class="cardClasses">
      <!--begin::Card body-->
      <div class="card-body d-flex flex-center flex-column p-9">
        <!--begin::Avatar-->
        <div v-if="avatar" class="symbol symbol-65px symbol-circle mb-5">
          <img :src="avatar" alt="image" />
          <div
            v-if="online"
            class="
              bg-success
              position-absolute
              rounded-circle
              translate-middle
              start-100
              top-100
              border border-4 border-white
              h-15px
              w-15px
              ms-n3
              mt-n3
            "
          ></div>
        </div>
        <div v-else class="symbol symbol-65px symbol-circle mb-5">
          <span
            :class="`text-${color} bg-light-${color}`"
            class="symbol-label fs-2x fw-bold"
            >{{ initials }}</span
          >
          <div
            v-if="online"
            class="
              bg-success
              position-absolute
              rounded-circle
              translate-middle
              start-100
              top-100
              border border-4 border-white
              h-15px
              w-15px
              ms-n3
              mt-n3
            "
          ></div>
        </div>
        <!--end::Avatar-->

        <!--begin::Name-->
        <a
          href="#"
          class="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
          >{{ name }}</a
        >
        <!--end::Name-->

        <!--begin::Position-->
        <div class="fw-bold text-gray-400 mb-6">{{ position }}</div>
        <!--end::Position-->

        <!--begin::Info-->
        <div class="d-flex flex-center flex-wrap mb-5">
          <!--begin::Stats-->
          <div
            class="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3"
          >
            <div class="fs-6 fw-bolder text-gray-700">{{ avgEarnings }}</div>
            <div class="fw-bold text-gray-400">Avg. Earnings</div>
          </div>
          <!--end::Stats-->

          <!--begin::Stats-->
          <div
            class="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3"
          >
            <div class="fs-6 fw-bolder text-gray-700">{{ totalSales }}</div>
            <div class="fw-bold text-gray-400">Total Sales</div>
          </div>
          <!--end::Stats-->
        </div>
        <!--end::Info-->

        <!--begin::Follow-->
        <a v-if="connected" href="#" class="btn btn-sm btn-light-primary">
          <span class="svg-icon svg-icon-3">
            <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
          </span>
          Connected
        </a>
        <a v-else href="#" class="btn btn-sm btn-light">
          <span class="svg-icon svg-icon-3">
            <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
          </span>
          Connect
        </a>
        <!--end::Follow-->
      </div>
      <!--begin::Card body-->
    </div>
    <!--begin::Card-->
  </div>
  <!--end::Col-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "card-3",
  components: {},
  props: {
    cardClasses: String,

    avatar: String,

    online: Boolean,

    initials: String,

    color: String,

    name: String,

    position: String,

    avgEarnings: String,

    totalSales: String,

    connected: Boolean,
  },
});
</script>
