<template>
  <!--begin::Table Widget 8-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">Latest Products</span>
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
              href="#kt_table_widget_8_tab_1"
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
              href="#kt_table_widget_8_tab_2"
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
              href="#kt_table_widget_8_tab_3"
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
            :id="`kt_table_widget_8_tab_${index + 1}`"
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
                          >{{ item1.info.event }}</a
                        >
                        <span class="text-muted fw-bold d-block fs-7">{{
                          item1.info.user
                        }}</span>
                      </td>
                      <td class="text-end">
                        <span class="text-dark fw-bolder d-block fs-7">{{
                          item1.info.date
                        }}</span>

                        <span class="text-muted fw-bold d-block fs-8"
                          >Date</span
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
  <!--end::Tables Widget 8-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-widget-8",
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
            color: "danger",
          },
          info: {
            event: "School Music Festival",
            user: "by Rose Liam",
          },
          date: "4:20PM, 03 Sep",
        },
        {
          icon: {
            file: "media/icons/duotune/general/gen024.svg",
            color: "warning",
          },
          info: {
            event: "Maths Championship",
            user: "By Tom Gere",
          },
          date: "10:05PM, 25 Oct",
        },
        {
          icon: {
            file: "media/icons/duotune/maps/map004.svg",
            color: "info",
          },
          info: {
            event: "Who Knows Geography",
            user: "By Zoey Dylan",
          },
          date: "3:22PM, 07 Sep",
        },
        {
          icon: {
            file: "media/icons/duotune/abstract/abs027.svg",
            color: "primary",
          },
          info: {
            event: "Napoleon Days",
            user: "By Luke Owen",
          },
          date: "1:20PM, 02 Dec",
        },
        {
          icon: {
            file: "media/icons/duotune/art/art007.svg",
            color: "success",
          },
          info: {
            event: "The School Art Leads",
            user: "By Ellie Cole",
          },
          date: "6:20PM, 07 Sep",
        },
      ],

      [
        {
          icon: {
            file: "media/icons/duotune/maps/map004.svg",
            color: "info",
          },
          info: {
            event: "Who Knows Geography",
            user: "By Zoey Dylan",
          },
          date: "3:22PM, 07 Sep",
        },
        {
          icon: {
            file: "media/icons/duotune/general/gen024.svg",
            color: "warning",
          },
          info: {
            event: "Maths Championship",
            user: "By Tom Gere",
          },
          date: "10:05PM, 25 Oct",
        },
        {
          icon: {
            file: "media/icons/duotune/coding/cod002.svg",
            color: "danger",
          },
          info: {
            event: "School Music Festival",
            user: "by Rose Liam",
          },
          date: "4:20PM, 03 Sep",
        },
      ],

      [
        {
          icon: {
            file: "media/icons/duotune/general/gen024.svg",
            color: "warning",
          },
          info: {
            event: "Maths Championship",
            user: "By Tom Gere",
          },
          date: "10:05PM, 25 Oct",
        },
        {
          icon: {
            file: "media/icons/duotune/maps/map004.svg",
            color: "info",
          },
          info: {
            event: "Who Knows Geography",
            user: "By Zoey Dylan",
          },
          date: "3:22PM, 07 Sep",
        },
        {
          icon: {
            file: "media/icons/duotune/abstract/abs027.svg",
            color: "primary",
          },
          info: {
            event: "Napoleon Days",
            user: "By Luke Owen",
          },
          date: "1:20PM, 02 Dec",
        },
        {
          icon: {
            file: "media/icons/duotune/coding/cod002.svg",
            color: "danger",
          },
          info: {
            event: "School Music Festival",
            user: "by Rose Liam",
          },
          date: "4:20PM, 03 Sep",
        },
      ],
    ];

    return {
      items,
    };
  },
});
</script>
