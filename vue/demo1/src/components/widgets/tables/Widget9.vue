<template>
  <!--begin::Tables Widget 9-->
  <div class="card" :class="widgetClasses">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">Members Statistics</span>

        <span class="text-muted mt-1 fw-bold fs-7">Over 500 members</span>
      </h3>

      <div
        class="card-toolbar"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-trigger="hover"
        title="Click to add a user"
      >
        <a
          href="#"
          class="btn btn-sm btn-light-primary"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_invite_friends"
        >
          <span class="svg-icon svg-icon-3">
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
            <tr class="fw-bolder text-muted">
              <th class="w-25px">
                <div
                  class="
                    form-check form-check-sm form-check-custom form-check-solid
                  "
                >
                  <input class="form-check-input" type="checkbox" value="1" />
                </div>
              </th>
              <th class="min-w-150px">Authors</th>
              <th class="min-w-140px">Company</th>
              <th class="min-w-120px">Progress</th>
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
                      class="form-check-input widget-9-check"
                      type="checkbox"
                      :value="index"
                    />
                  </div>
                </td>

                <td>
                  <div class="d-flex align-items-center">
                    <div class="symbol symbol-45px me-5">
                      <img :src="item.image" alt="" />
                    </div>
                    <div class="d-flex justify-content-start flex-column">
                      <a
                        href="#"
                        class="text-dark fw-bolder text-hover-primary fs-6"
                        >{{ item.name }}</a
                      >

                      <span
                        class="text-muted fw-bold text-muted d-block fs-7"
                        >{{ item.skills }}</span
                      >
                    </div>
                  </div>
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.companyName }}</a
                  >
                  <span class="text-muted fw-bold text-muted d-block fs-7">{{
                    item.companySkills
                  }}</span>
                </td>

                <td class="text-end">
                  <div class="d-flex flex-column w-100 me-2">
                    <div class="d-flex flex-stack mb-2">
                      <span class="text-muted me-2 fs-7 fw-bold">
                        {{ item.value }}%
                      </span>
                    </div>

                    <div class="progress h-6px w-100">
                      <div
                        class="progress-bar"
                        :class="`bg-${item.color}`"
                        role="progressbar"
                        :style="{ width: item.value + '%' }"
                        :aria-valuenow="item.value"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
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
  <!--end::Tables Widget 9-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "kt-widget-9",
  components: {},
  props: {
    widgetClasses: String,
  },
  setup() {
    const checked = ref(false);

    const list = [
      {
        image: "media/avatars/150-11.jpg",
        name: "Ana Simmons",
        skills: "HTML, JS, ReactJS",
        companyName: "Intertico",
        companySkills: "Web, UI/UX Design",
        value: "50",
        color: "primary",
      },
      {
        image: "media/avatars/150-3.jpg",
        name: "Jessie Clarcson",
        skills: "C#, ASP.NET, MS SQL",
        companyName: "Agoda",
        companySkills: "Houses & Hotels",
        value: "70",
        color: "danger",
      },
      {
        image: "media/avatars/150-4.jpg",
        name: "Lebron Wayde",
        skills: "PHP, Laravel, VueJS",
        companyName: "RoadGee",
        companySkills: "Transportation",
        value: "60",
        color: "success",
      },
      {
        image: "media/avatars/150-5.jpg",
        name: "Natali Goodwin",
        skills: "Python, PostgreSQL, ReactJS",
        companyName: "The Hill",
        companySkills: "Insurance",
        value: "50",
        color: "warning",
      },
      {
        image: "media/avatars/150-6.jpg",
        name: "Kevin Leonard",
        skills: "HTML, JS, ReactJS",
        companyName: "RoadGee",
        companySkills: "Art Director",
        value: "90",
        color: "info",
      },
    ];

    return {
      list,
      checked,
    };
  },
});
</script>
