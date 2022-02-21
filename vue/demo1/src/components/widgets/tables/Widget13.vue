<template>
  <!--begin::Tables Widget 13-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">Recent Orders</span>

        <span class="text-muted mt-1 fw-bold fs-7">Over 500 orders</span>
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
        <Dropdown2></Dropdown2>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="
            table table-row-bordered table-row-gray-100
            align-middle
            gs-0
            gy-3
          "
        >
          <!--begin::Table head-->
          <thead>
            <tr class="fw-bolder text-muted">
              <th class="w-25px">
                <div
                  class="
                    form-check form-check-sm form-check-custom form-check-solid
                  "
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="1"
                    data-kt-check="true"
                    data-kt-check-target=".widget-13-check"
                  />
                </div>
              </th>
              <th class="min-w-150px">Order Id</th>
              <th class="min-w-140px">Country</th>
              <th class="min-w-120px">Date</th>
              <th class="min-w-120px">Company</th>
              <th class="min-w-120px">Total</th>
              <th class="min-w-120px">Status</th>
              <th class="min-w-100px text-end">Actions</th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(item, index) in list" :key="index">
              <tr>
                <td>
                  <div
                    class="
                      form-check
                      form-check-sm
                      form-check-custom
                      form-check-solid
                    "
                  >
                    <input
                      class="form-check-input widget-13-check"
                      type="checkbox"
                      value="1"
                    />
                  </div>
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary fs-6"
                    >{{ item.orderid }}</a
                  >
                </td>

                <td>
                  <a
                    href="#"
                    class="
                      text-dark
                      fw-bolder
                      text-hover-primary
                      d-block
                      mb-1
                      fs-6
                    "
                    >{{ item.company.name }}</a
                  >
                  <span class="text-muted fw-bold text-muted d-block fs-7"
                    >Code: {{ item.country.code }}</span
                  >
                </td>

                <td>
                  <a
                    href="#"
                    class="
                      text-dark
                      fw-bolder
                      text-hover-primary
                      d-block
                      mb-1
                      fs-6
                    "
                    >{{ item.date.value }}</a
                  >
                  <span class="text-muted fw-bold text-muted d-block fs-7"
                    >Code: {{ item.date.remarks }}</span
                  >
                </td>

                <td>
                  <a
                    href="#"
                    class="
                      text-dark
                      fw-bolder
                      text-hover-primary
                      d-block
                      mb-1
                      fs-6
                    "
                    >{{ item.company.name }}</a
                  >
                  <span class="text-muted fw-bold text-muted d-block fs-7">{{
                    item.company.fields
                  }}</span>
                </td>

                <td class="text-dark fw-bolder text-hover-primary fs-6">
                  {{ item.total }}
                </td>

                <td>
                  <span
                    :class="`badge-light-${item.status.color}`"
                    class="badge"
                    >{{ item.status.label }}</span
                  >
                </td>

                <td class="text-end">
                  <a
                    href="#"
                    class="
                      btn btn-icon btn-bg-light btn-active-color-primary btn-sm
                      me-1
                    "
                  >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg
                        src="media/icons/duotune/general/gen019.svg"
                      />
                    </span>
                  </a>

                  <a
                    href="#"
                    class="
                      btn btn-icon btn-bg-light btn-active-color-primary btn-sm
                      me-1
                    "
                  >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg src="media/icons/duotune/art/art005.svg" />
                    </span>
                  </a>

                  <a
                    href="#"
                    class="
                      btn btn-icon btn-bg-light btn-active-color-primary btn-sm
                    "
                  >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg
                        src="media/icons/duotune/general/gen027.svg"
                      />
                    </span>
                  </a>
                </td>
              </tr>
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
    <!--begin::Body-->
  </div>
  <!--end::Tables Widget 13-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";

export default defineComponent({
  name: "kt-widget-12",
  components: {
    Dropdown2,
  },
  props: {
    widgetClasses: String,
  },
  setup() {
    const list = [
      {
        orderid: "56037-XDER",
        country: {
          name: "Brasil",
          code: "PH",
        },
        date: {
          value: "05/28/2020",
          remarks: "Paid",
        },
        progress: {
          value: "50",
          color: "primary",
        },
        company: {
          name: "Intertico",
          fields: "Web, UI/UX Design",
        },
        status: {
          label: "Approved",
          color: "success",
        },
        total: "$3560",
      },
      {
        orderid: "05822-FXSP",
        country: {
          name: "Belarus",
          code: "BY",
        },
        date: {
          value: "04/18/2021",
          remarks: "Paid",
        },
        progress: {
          value: "50",
          color: "primary",
        },
        company: {
          name: "Agoda",
          fields: "Houses & Hotels",
        },
        status: {
          label: "In Progress",
          color: "warning",
        },
        total: "$4850",
      },
      {
        orderid: "4472-QREX",
        country: {
          name: "Phillipines",
          code: "BH",
        },
        date: {
          value: "07/23/2019",
          remarks: "Paid",
        },
        progress: {
          value: "50",
          color: "primary",
        },
        company: {
          name: "RoadGee",
          fields: "Transportation",
        },
        status: {
          label: "Success",
          color: "danger",
        },
        total: "$8376",
      },
      {
        orderid: "00347-BCLQ",
        country: {
          name: "Argentina",
          code: "BR",
        },
        date: {
          value: "12/21/2021",
          remarks: "Paid",
        },
        progress: {
          value: "50",
          color: "primary",
        },
        company: {
          name: "The Hill",
          fields: "Insurance",
        },
        status: {
          label: "Rejected",
          color: "info",
        },
        total: "$9486",
      },
      {
        orderid: "59486-XDER",
        country: {
          name: "Agoda",
          code: "BT",
        },
        date: {
          value: "05/28/2020",
          remarks: "Paid",
        },
        progress: {
          value: "50",
          color: "primary",
        },
        company: {
          name: "Phillipines",
          fields: "Transportation",
        },
        status: {
          label: "Approved",
          color: "primary",
        },
        total: "$8476",
      },
    ];

    return {
      list,
    };
  },
});
</script>
