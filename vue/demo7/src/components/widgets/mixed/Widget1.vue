<template>
  <!--begin::List Widget 1-->
  <div :class="widgetClasses" class="card">
    <!--begin::Body-->
    <div class="card-body p-0">
      <!--begin::Header-->
      <div
        :class="`bg-${widgetColor}`"
        class="px-9 pt-7 card-rounded h-275px w-100"
      >
        <!--begin::Heading-->
        <div class="d-flex flex-stack">
          <h3 class="m-0 text-white fw-bolder fs-3">Sales Summary</h3>

          <div class="ms-1">
            <!--begin::Menu-->
            <button
              type="button"
              :class="`btn-active-color-${widgetColor}`"
              class="
                btn btn-sm btn-icon btn-color-white btn-active-white
                border-0
                me-n3
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
            <!--end::Menu-->
          </div>
        </div>
        <!--end::Heading-->

        <!--begin::Balance-->
        <div class="d-flex text-center flex-column text-white pt-8">
          <span class="fw-bold fs-7">You Balance</span>
          <span class="fw-bolder fs-2x pt-1">$37,562.00</span>
        </div>
        <!--end::Balance-->
      </div>
      <!--end::Header-->

      <!--begin::Items-->
      <div
        class="
          shadow-xs
          card-rounded
          mx-9
          mb-9
          px-6
          py-9
          position-relative
          z-index-1
          bg-white
        "
        style="margin-top: -100px"
      >
        <template v-for="(item, index) in items" :key="index">
          <!--begin::Item-->
          <div
            :class="[index !== items.length && 'mb-7']"
            class="d-flex align-items-center"
          >
            <!--begin::Symbol-->
            <div class="symbol symbol-45px w-40px me-5">
              <span class="symbol-label bg-lighten">
                <span class="svg-icon svg-icon-1">
                  <inline-svg :src="item.icon" />
                </span>
              </span>
            </div>
            <!--end::Symbol-->

            <!--begin::Description-->
            <div class="d-flex align-items-center flex-wrap w-100">
              <!--begin::Title-->
              <div class="mb-1 pe-3 flex-grow-1">
                <a
                  href="#"
                  class="fs-5 text-gray-800 text-hover-primary fw-bolder"
                  >{{ item.title }}</a
                >
                <div class="text-gray-400 fw-bold fs-7">
                  {{ item.description }}
                </div>
              </div>
              <!--end::Title-->

              <!--begin::Label-->
              <div class="d-flex align-items-center">
                <div class="fw-bolder fs-5 text-gray-800 pe-1">
                  {{ item.stats }}
                </div>

                <span
                  v-if="item.arrow === 'up'"
                  class="svg-icon svg-icon-5 svg-icon-success ms-1"
                >
                  <inline-svg src="media/icons/duotune/arrows/arr066.svg" />
                </span>
                <span
                  v-else-if="item.arrow === 'down'"
                  class="svg-icon svg-icon-5 svg-icon-danger ms-1"
                >
                  <inline-svg src="media/icons/duotune/arrows/arr065.svg" />
                </span>
              </div>
              <!--end::Label-->
            </div>
            <!--end::Description-->
          </div>
          <!--end::Item-->
        </template>
      </div>
      <!--end::Items-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::List Widget 1-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "widget-1",
  components: {
    Dropdown3,
  },
  props: {
    widgetClasses: String,
    widgetColor: String,
    chartHeight: Number,
  },
  setup() {
    const items = [
      {
        icon: "media/icons/duotune/maps/map004.svg",
        title: "Sales",
        description: "100 Regions",
        stats: "$2,5b",
        arrow: "up",
      },
      {
        icon: "media/icons/duotune/general/gen024.svg",
        title: "Revenue",
        description: "Quarter 2/3",
        stats: "$1,7b",
        arrow: "down",
      },
      {
        icon: "media/icons/duotune/electronics/elc005.svg",
        title: "Growth",
        description: "80% Rate",
        stats: "$8,8m",
        arrow: "up",
      },
      {
        icon: "media/icons/duotune/general/gen005.svg",
        title: "Dispute",
        description: "3090 Refunds",
        stats: "$270m",
        arrow: "down",
      },
    ];

    return {
      items,
    };
  },
});
</script>
