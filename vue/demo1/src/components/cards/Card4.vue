<template>
  <!--begin::Col-->
  <div class="col-md-6 col-xxl-4">
    <!--begin::Card-->
    <div class="card">
      <!--begin::Card body-->
      <div class="card-body d-flex flex-center flex-column p-9">
        <!--begin::Wrapper-->
        <div class="mb-5">
          <div class="symbol symbol-75px symbol-circle">
            <img v-if="avatar" :src="avatar" alt="" />
            <span
              v-else
              :class="`bg-light-${color} text-${color}`"
              class="symbol-label fs-5 fw-bolder"
              >{{ initials }}</span
            >
            <div
              v-if="online"
              class="
                symbol-badge
                bg-success
                start-100
                top-100
                border-4
                h-15px
                w-15px
                ms-n3
                mt-n3
              "
            ></div>
          </div>
        </div>
        <!--end::Wrapper-->

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
            class="
              border border-gray-300 border-dashed
              rounded
              min-w-125px
              py-3
              px-4
              mx-3
              mb-3
            "
          >
            <div class="fs-6 fw-bolder text-gray-700">{{ avgEarnings }}</div>
            <div class="fw-bold text-gray-400">Avg. Earnings</div>
          </div>
          <!--end::Stats-->

          <!--begin::Stats-->
          <div
            class="
              border border-gray-300 border-dashed
              rounded
              min-w-125px
              py-3
              mx-3
              px-4
              mb-3
            "
          >
            <div class="fs-6 fw-bolder text-gray-700">{{ totalSales }}</div>
            <div class="fw-bold text-gray-400">Total Sales</div>
          </div>
          <!--end::Stats-->
        </div>
        <!--end::Info-->

        <!--begin::Link-->
        <button
          class="btn btn-sm btn-light-primary fw-bolder"
          data-kt-drawer-toggle="true"
          data-kt-drawer-target="#kt_drawer_chat"
          @click="openDrawer()"
        >
          Send Message
        </button>
        <!--end::Link-->
      </div>
      <!--begin::Card body-->
    </div>
    <!--begin::Card-->
  </div>
  <!--end::Col-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DrawerComponent } from "@/assets/ts/components/_DrawerComponent";

export default defineComponent({
  name: "card-4",
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
  },
  setup() {
    const openDrawer = () => {
      DrawerComponent?.getInstance("kt_drawer_chat")?.toggle();
    };

    return {
      openDrawer,
    };
  },
});
</script>
