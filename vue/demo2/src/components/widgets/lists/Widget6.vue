<template>
  <!--begin::List Widget 6-->
  <div class="card" :class="widgetClasses">
    <!--begin::Header-->
    <div class="card-header border-0">
      <h3 class="card-title fw-bolder text-dark">Notifications</h3>

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
        <Dropdown3></Dropdown3>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-0">
      <template v-for="(item, index) in list" :key="index">
        <!--begin::Item-->
        <div
          :class="[
            'mb-7' && list.length - 1 !== index,
            `bg-light-${item.color}`,
          ]"
          class="d-flex align-items-center rounded p-5 mb-7"
        >
          <!--begin::Icon-->
          <span :class="`svg-icon-${item.color}`" class="svg-icon me-5">
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/abstract/abs027.svg" />
            </span>
          </span>
          <!--end::Icon-->

          <!--begin::Title-->
          <div class="flex-grow-1 me-2">
            <a
              href="#"
              class="fw-bolder text-gray-800 text-hover-primary fs-6"
              >{{ item.title }}</a
            >

            <span class="text-muted fw-bold d-block">{{ item.text }}</span>
          </div>
          <!--end::Title-->

          <!--begin::Lable-->
          <span :class="`text-${item.color}`" class="fw-bolder py-1">{{
            item.number
          }}</span>
          <!--end::Lable-->
        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
  <!--end::List Widget 6-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "kt-widget-6",
  components: {
    Dropdown3,
  },
  props: {
    widgetClasses: String,
  },
  setup() {
    const list = ref([
      {
        color: "warning",
        icon: "icons/duotune/abstract/abs027.svg",
        title: "Group lunch celebration",
        text: "Due in 2 Days",
        number: "+28%",
      },
      {
        color: "success",
        icon: "icons/duotune/art/art005.svg",
        title: "Navigation optimization",
        text: "Due in 2 Days",
        number: "+50%",
      },
      {
        color: "danger",
        icon: "icons/duotune/communication/com012.svg",
        title: "Rebrand strategy planning",
        text: "Due in 5 Days",
        number: "-27%",
      },
      {
        color: "info",
        icon: "icons/duotune/communication/com012.svg",
        title: "Product goals strategy",
        text: "Due in 7 Days",
        number: "+8%",
      },
    ]);

    return {
      list,
    };
  },
});
</script>
