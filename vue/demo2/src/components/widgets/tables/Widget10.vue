<template>
  <!--begin::Tables Widget 10-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">New Products</span>

        <span class="text-muted mt-1 fw-bold fs-7">Over 500 new products</span>
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
    <div class="card-body pt-3">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="
            table table-row-dashed table-row-gray-300
            align-middle
            gs-0
            gy-4
          "
        >
          <!--begin::Table head-->
          <thead>
            <tr class="border-0">
              <th class="p-0"></th>
              <th class="p-0 min-w-150px"></th>
              <th class="p-0 min-w-200px"></th>
              <th class="p-0 min-w-150px"></th>
              <th class="p-0 min-w-100px text-end"></th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(item, index) in list" :key="index">
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <!--begin::Avatar-->
                    <div class="symbol symbol-45px me-5">
                      <img
                        v-if="item.user.avatar"
                        alt="Pic"
                        :src="item.user.avatar"
                      />
                      <span
                        v-else-if="item.user.state"
                        :class="`bg-light-${item.user.state} text-${item.user.state}`"
                        class="symbol-label fw-bolder"
                      >
                        {{ item.user.name.charAt(0) }}
                      </span>
                    </div>
                    <!--end::Avatar-->

                    <!--begin::Name-->
                    <div class="d-flex justify-content-start flex-column">
                      <a
                        href="#"
                        class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                        >{{ item.user.name }}</a
                      >

                      <a
                        href="#"
                        class="
                          text-muted text-hover-primary
                          fw-bold
                          text-muted
                          d-block
                          fs-7
                        "
                      >
                        <span class="text-dark">Email</span>:
                        {{ item.user.email }}
                      </a>
                    </div>
                    <!--end::Name-->
                  </div>
                </td>

                <td class="text-end">
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

                <td class="text-muted fw-bold text-end">
                  {{ item.technologies }}
                </td>

                <td class="text-end">
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
  <!--end::Tables Widget 10-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";

export default defineComponent({
  name: "kt-widget-10",
  components: {
    Dropdown2,
  },
  props: {
    widgetClasses: String,
  },
  setup() {
    const list = [
      {
        user: {
          avatar: "media/avatars/150-1.jpg",
          name: "Emma Smith",
          email: "e.smith@kpmg.com.au",
        },
        price: "$560,000",
        technologies: "Laravel, Metronic",
        status: {
          label: "Approved",
          color: "success",
        },
      },
      {
        user: {
          state: "danger",
          name: "Melody Macy",
          email: "melody@altbox.com",
        },
        price: "$2,000,000",
        technologies: "ReactJs, HTML",
        status: {
          label: "In Progress",
          color: "warning",
        },
      },
      {
        user: {
          avatar: "media/avatars/150-2.jpg",
          name: "Max Smith",
          email: "max@kt.com",
        },
        price: "$760,000",
        technologies: "Python, MySQL",
        status: {
          label: "Success",
          color: "danger",
        },
      },
      {
        user: {
          avatar: "media/avatars/150-4.jpg",
          name: "Sean Bean",
          email: "sean@dellito.com",
        },
        price: "$257,000",
        technologies: "ReactJS, Ruby",
        status: {
          label: "Rejected",
          color: "info",
        },
      },
      {
        user: {
          avatar: "media/avatars/150-15.jpg",
          name: "Brian Cox",
          email: "brian@exchange.com",
        },
        price: "$560,000",
        technologies: "AngularJS, C#",
        status: {
          label: "In Progress",
          color: "primary",
        },
      },
    ];

    return {
      list,
    };
  },
});
</script>
