<template>
  <!--begin::List Widget 7-->
  <div class="card" :class="widgetClasses">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-4">
      <h3 class="card-title align-items-start flex-column">
        <span class="fw-bolder text-dark">Latest Media</span>

        <span class="text-muted mt-1 fw-bold fs-7"
          >Articles and publications</span
        >
      </h3>

      <div class="card-toolbar">
        <!--begin::Menu-->
        <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="top-end"
        >
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/general/gen024.svg" />
          </span>
        </button>
        <Dropdown1></Dropdown1>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-3">
      <template v-for="(item, index) in list" :key="index">
        <!--begin::Item-->
        <div
          :class="{ 'mb-7': list.length - 1 !== index }"
          class="d-flex align-items-sm-center"
        >
          <!--begin::Symbol-->
          <div class="symbol symbol-60px symbol-2by3 me-4">
            <div
              class="symbol-label"
              :style="`background-image: url('${item.image}')`"
            ></div>
          </div>
          <!--end::Symbol-->

          <!--begin::Title-->
          <div class="d-flex flex-row-fluid flex-wrap align-items-center">
            <div class="flex-grow-1 me-2">
              <a
                href="#"
                class="text-gray-800 fw-bolder text-hover-primary fs-6"
                >{{ item.title }}</a
              >

              <span class="text-muted fw-bold d-block pt-1"
                >Size: {{ item.size }}</span
              >
            </div>

            <span
              :class="`badge-light-${item.color}`"
              class="badge fs-8 fw-bolder my-2"
              >{{ item.status }}</span
            >
          </div>
          <!--end::Title-->
        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
  <!--end::List Widget 7-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";

export default defineComponent({
  name: "kt-widget-6",
  components: {
    Dropdown1,
  },
  props: {
    widgetClasses: String,
  },
  setup() {
    const list = ref([
      {
        image: "media/stock/600x400/img-20.jpg",
        title: "Cup & Green",
        size: "87KB",
        color: "success",
        status: "Approved",
      },
      {
        image: "media/stock/600x400/img-19.jpg",
        title: "Yellow Background",
        size: "1.2MB",
        color: "warning",
        status: "In Progress",
      },
      {
        image: "media/stock/600x400/img-25.jpg",
        title: "Nike & Blue",
        size: "87KB",
        color: "success",
        status: "Success",
      },
      {
        image: "media/stock/600x400/img-24.jpg",
        title: "Red Boots",
        size: "345KB",
        color: "danger",
        status: "Rejected",
      },
    ]);

    return {
      list,
    };
  },
});
</script>
