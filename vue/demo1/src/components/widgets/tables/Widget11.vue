<template>
  <!--begin::Tables Widget 11-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">New Arrivals</span>

        <span class="text-muted mt-1 fw-bold fs-7">Over 500 new products</span>
      </h3>
      <div class="card-toolbar">
        <a href="#" class="btn btn-sm btn-light-primary">
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
          </span>
          New Member
        </a>
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table class="table align-middle gs-0 gy-4">
          <!--begin::Table head-->
          <thead>
            <tr class="fw-bolder text-muted bg-light">
              <th class="ps-4 min-w-325px rounded-start">Product</th>
              <th class="min-w-125px">Price</th>
              <th class="min-w-125px">Deposit</th>
              <th class="min-w-200px">Agent</th>
              <th class="min-w-150px">Status</th>
              <th class="min-w-200px text-end rounded-end"></th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(item, index) in list" :key="index">
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="symbol symbol-50px me-5">
                      <img :src="item.product.image" class="" alt="" />
                    </div>

                    <div class="d-flex justify-content-start flex-column">
                      <a
                        href="#"
                        class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                        >{{ item.product.name }}</a
                      >
                      <span
                        class="text-muted fw-bold text-muted d-block fs-7"
                        >{{ item.product.specs }}</span
                      >
                    </div>
                  </div>
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
                    >{{ item.price }}</a
                  >
                  <span class="text-muted fw-bold text-muted d-block fs-7"
                    >Paid</span
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
                    >{{ item.deposit }}</a
                  >
                  <span class="text-muted fw-bold text-muted d-block fs-7"
                    >Rejected</span
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
                    >{{ item.agent.name }}</a
                  >
                  <span class="text-muted fw-bold text-muted d-block fs-7">{{
                    item.agent.position
                  }}</span>
                </td>

                <td>
                  <span
                    :class="`
                      badge badge-light-${item.status.color}
                      fs-7
                      fw-bold
                    `"
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
  <!--end::Tables Widget 11-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-widget-11",
  components: {},
  props: {
    widgetClasses: String,
  },
  setup() {
    const list = [
      {
        product: {
          image: "media/stock/600x400/img-26.jpg",
          name: "Sant Extreanet Solution",
          specs: "HTML, JS, ReactJS",
        },
        price: "$2,790",
        deposit: "$520",
        agent: {
          name: "Bradly Beal",
          position: "Insurance",
        },
        status: {
          label: "Approved",
          color: "primary",
        },
      },
      {
        product: {
          image: "media/stock/600x400/img-3.jpg",
          name: "Telegram Development",
          specs: "C#, ASP.NET, MS SQL",
        },
        price: "$4,790",
        deposit: "$240",
        agent: {
          name: "Chris Thompson",
          position: "NBA Player",
        },
        status: {
          label: "In Progress",
          color: "danger",
        },
      },
      {
        product: {
          image: "media/stock/600x400/img-9.jpg",
          name: "Payroll Application",
          specs: "PHP, Laravel, VueJS",
        },
        price: "$4,390",
        deposit: "$593",
        agent: {
          name: "Zoey McGee",
          position: "Ruby Developer",
        },
        status: {
          label: "Success",
          color: "success",
        },
      },
      {
        product: {
          image: "media/stock/600x400/img-18.jpg",
          name: "HR Management System",
          specs: "Python, PostgreSQL, ReactJS",
        },
        price: "$7,990",
        deposit: "$980",
        agent: {
          name: "Brandon Ingram",
          position: "Insurance",
        },
        status: {
          label: "Rejected",
          color: "info",
        },
      },
      {
        product: {
          image: "media/stock/600x400/img-8.jpg",
          name: "Telegram Mobile",
          specs: "HTML, JS, ReactJS",
        },
        price: "$5,790",
        deposit: "$750",
        agent: {
          name: "Natali Trump",
          position: "Insurance",
        },
        status: {
          label: "Approved",
          color: "warning",
        },
      },
    ];

    return {
      list,
    };
  },
});
</script>
