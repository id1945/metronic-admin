<template>
  <!--begin::Table Widget 7-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">Latest Orders</span>

        <span class="text-muted mt-1 fw-bold fs-7"
          >More than 100 new orders</span
        >
      </h3>
      <div class="card-toolbar">
        <ul class="nav">
          <li class="nav-item">
            <a
              class="
                nav-link
                btn btn-sm btn-color-muted btn-active btn-active-light-primary
                active
                fw-bolder
                px-4
                me-1
              "
              data-bs-toggle="tab"
              href="#kt_table_widget_7_tab_1"
              >Month</a
            >
          </li>

          <li class="nav-item">
            <a
              class="
                nav-link
                btn btn-sm btn-color-muted btn-active btn-active-light-primary
                fw-bolder
                px-4
                me-1
              "
              data-bs-toggle="tab"
              href="#kt_table_widget_7_tab_2"
              >Week</a
            >
          </li>

          <li class="nav-item">
            <a
              class="
                nav-link
                btn btn-sm btn-color-muted btn-active btn-active-light-primary
                fw-bolder
                px-4
              "
              data-bs-toggle="tab"
              href="#kt_table_widget_7_tab_3"
              >Day</a
            >
          </li>
        </ul>
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
      <div class="tab-content">
        <template v-for="(item, index) in items" :key="index">
          <!--begin::Tap pane-->
          <div
            :class="[index === 0 && 'active show']"
            class="tab-pane fade"
            :id="`kt_table_widget_7_tab_${index + 1}`"
          >
            <!--begin::Table container-->
            <div class="table-responsive">
              <!--begin::Table-->
              <table class="table align-middle gs-0 gy-3">
                <!--begin::Table head-->
                <thead>
                  <tr>
                    <th class="p-0 w-50px"></th>
                    <th class="p-0 min-w-150px"></th>
                    <th class="p-0 min-w-140px"></th>
                    <th class="p-0 min-w-120px"></th>
                  </tr>
                </thead>
                <!--end::Table head-->

                <!--begin::Table body-->
                <tbody>
                  <template v-for="(item1, index1) in item" :key="index1">
                    <tr>
                      <td>
                        <div class="symbol symbol-50px me-2">
                          <span
                            :class="`bg-light-${item1.icon.color}`"
                            class="symbol-label"
                          >
                            <span
                              :class="`svg-icon-${item1.icon.color}`"
                              class="svg-icon svg-icon-2x"
                            >
                              <inline-svg :src="item1.icon.file" />
                            </span>
                          </span>
                        </div>
                      </td>
                      <td>
                        <a
                          href="#"
                          class="
                            text-dark
                            fw-bolder
                            text-hover-primary
                            mb-1
                            fs-6
                          "
                          >{{ item1.info.title }}</a
                        >
                        <span class="text-muted fw-bold d-block fs-7">{{
                          item1.info.description
                        }}</span>
                      </td>
                      <td class="text-end">
                        <span class="text-muted fw-bold d-block fs-8"
                          >Ordered</span
                        >

                        <span class="text-dark fw-bolder d-block fs-7">{{
                          item1.date
                        }}</span>
                      </td>
                      <td class="text-end">
                        <span
                          :class="`badge-light-${item1.badge.color}`"
                          class="badge fs-7 fw-bolder"
                          >{{ item1.badge.label }}</span
                        >
                      </td>
                      <td class="text-end">
                        <a
                          href="#"
                          class="
                            btn
                            btn-sm
                            btn-icon
                            btn-bg-light
                            btn-active-color-primary
                          "
                        >
                          <i class="bi bi-three-dots fs-5"></i>
                        </a>
                      </td>
                    </tr>
                  </template>
                </tbody>
                <!--end::Table body-->
              </table>
            </div>
            <!--end::Table-->
          </div>
          <!--end::Tap pane-->
        </template>
      </div>
    </div>
    <!--end::Body-->
  </div>
  <!--end::Tables Widget 7-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-widget-7",
  components: {},
  props: {
    widgetClasses: String,
  },
  setup() {
    const items = [
      [
        {
          icon: {
            file: "media/icons/duotune/coding/cod002.svg",
            color: "success",
          },
          info: {
            title: "Media Device",
            description: "Voice and video recorder",
          },
          date: "5 day ago",
          badge: {
            label: "Delivered",
            color: "success",
          },
        },
        {
          icon: {
            file: "media/icons/duotune/general/gen024.svg",
            color: "danger",
          },
          info: {
            title: "Special Meal",
            description: "Quona Rice",
          },
          date: "2 day ago",
          badge: {
            label: "Delivered",
            color: "danger",
          },
        },
        {
          icon: {
            file: "media/icons/duotune/maps/map004.svg",
            color: "primary",
          },
          info: {
            title: "New Users",
            description: "Awesome Users",
          },
          date: "4 day ago",
          badge: {
            label: "Delivered",
            color: "primary",
          },
        },
        {
          icon: {
            file: "media/icons/duotune/abstract/abs027.svg",
            color: "warning",
          },
          info: {
            title: "Active Customers",
            description: "Best Customers",
          },
          date: "1 day ago",
          badge: {
            label: "Delivered",
            color: "warning",
          },
        },
        {
          icon: {
            file: "media/icons/duotune/art/art007.svg",
            color: "info",
          },
          info: {
            title: "Strawberry Boxes",
            description: "From Spain",
          },
          date: "7 day ago",
          badge: {
            label: "Delivered",
            color: "info",
          },
        },
      ],

      [
        {
          icon: {
            file: "media/icons/duotune/abstract/abs042.svg",
            color: "info",
          },
          info: {
            title: "Strawberry Boxes",
            description: "From Spain",
          },
          date: "4 week ago",
          badge: {
            label: "Delivered",
            color: "info",
          },
        },
        {
          icon: {
            file: "media/icons/duotune/general/gen024.svg",
            color: "danger",
          },
          info: {
            title: "Special Meal",
            description: "Quona Rice",
          },
          date: "2 week ago",
          badge: {
            label: "Delivered",
            color: "danger",
          },
        },
        {
          icon: {
            file: "media/icons/duotune/abstract/abs027.svg",
            color: "warning",
          },
          info: {
            title: "Active Customers",
            description: "Best Customers",
          },
          date: "5 week ago",
          badge: {
            label: "Delivered",
            color: "warning",
          },
        },
      ],

      [
        {
          icon: {
            file: "media/icons/duotune/ecommerce/ecm002.svg",
            color: "success",
          },
          info: {
            title: "Media Device",
            description: "Voice and video recorder",
          },
          date: "3 month ago",
          badge: {
            label: "Delivered",
            color: "success",
          },
        },
        {
          icon: {
            file: "media/icons/duotune/general/gen024.svg",
            color: "danger",
          },
          info: {
            title: "Special Meal",
            description: "Quona Rice",
          },
          date: "5 month ago",
          badge: {
            label: "Delivered",
            color: "danger",
          },
        },
        {
          icon: {
            file: "media/icons/duotune/abstract/abs027.svg",
            color: "warning",
          },
          info: {
            title: "Active Customers",
            description: "Best Customers",
          },
          date: "6 month ago",
          badge: {
            label: "Delivered",
            color: "warning",
          },
        },
        {
          icon: {
            file: "media/icons/duotune/abstract/abs042.svg",
            color: "info",
          },
          info: {
            title: "Strawberry Boxes",
            description: "From Spain",
          },
          date: "4 month ago",
          badge: {
            label: "Delivered",
            color: "info",
          },
        },
      ],
    ];

    return {
      items,
    };
  },
});
</script>
