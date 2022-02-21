<template>
  <!--begin::Menu-->
  <div
    class="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px"
    data-kt-menu="true"
  >
    <!--begin::Heading-->
    <div
      class="d-flex flex-column bgi-no-repeat rounded-top"
      style="background-image: url('media/misc/pattern-1.jpg')"
    >
      <!--begin::Title-->
      <h3 class="text-white fw-bold px-9 mt-10 mb-6">
        Notifications <span class="fs-8 opacity-75 ps-3">24 reports</span>
      </h3>
      <!--end::Title-->

      <!--begin::Tabs-->
      <ul class="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-bold px-9">
        <li class="nav-item">
          <a
            class="nav-link text-white opacity-75 opacity-state-100 pb-4"
            data-bs-toggle="tab"
            href="#kt_topbar_notifications_1"
            >Alerts</a
          >
        </li>

        <li class="nav-item">
          <a
            class="nav-link text-white opacity-75 opacity-state-100 pb-4 active"
            data-bs-toggle="tab"
            href="#kt_topbar_notifications_2"
            >Updates</a
          >
        </li>

        <li class="nav-item">
          <a
            class="nav-link text-white opacity-75 opacity-state-100 pb-4"
            data-bs-toggle="tab"
            href="#kt_topbar_notifications_3"
            >Logs</a
          >
        </li>
      </ul>
      <!--end::Tabs-->
    </div>
    <!--end::Heading-->

    <!--begin::Tab content-->
    <div class="tab-content">
      <!--begin::Tab panel-->
      <div class="tab-pane fade" id="kt_topbar_notifications_1" role="tabpanel">
        <!--begin::Items-->
        <div class="scroll-y mh-325px my-5 px-8">
          <template v-for="(item, index) in data1" :key="index">
            <!--begin::Item-->
            <div class="d-flex flex-stack py-4">
              <!--begin::Section-->
              <div class="d-flex align-items-center">
                <!--begin::Symbol-->
                <div class="symbol symbol-35px me-4">
                  <span :class="`bg-light-${item.state}`" class="symbol-label">
                    <span
                      :class="`svg-icon-${item.state}`"
                      class="svg-icon svg-icon-2"
                    >
                      <inline-svg :src="item.icon" />
                    </span>
                  </span>
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="mb-0 me-2">
                  <a
                    href="#"
                    class="fs-6 text-gray-800 text-hover-primary fw-bolder"
                    >{{ item.title }}</a
                  >
                  <div class="text-gray-400 fs-7">
                    {{ item.description }}
                  </div>
                </div>
                <!--end::Title-->
              </div>
              <!--end::Section-->

              <!--begin::Label-->
              <span class="badge badge-light fs-8">{{ item.time }}</span>
              <!--end::Label-->
            </div>
            <!--end::Item-->
          </template>
        </div>
        <!--end::Items-->

        <!--begin::View more-->
        <div class="py-3 text-center border-top">
          <a href="#" class="btn btn-color-gray-600 btn-active-color-primary">
            View All
            <span class="svg-icon svg-icon-5">
              <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
            </span>
          </a>
        </div>
        <!--end::View more-->
      </div>
      <!--end::Tab panel-->

      <!--begin::Tab panel-->
      <div
        class="tab-pane fade show active"
        id="kt_topbar_notifications_2"
        role="tabpanel"
      >
        <!--begin::Wrapper-->
        <div class="d-flex flex-column px-9">
          <!--begin::Section-->
          <div class="pt-10 pb-0">
            <!--begin::Title-->
            <h3 class="text-dark text-center fw-bolder">Get Pro Access</h3>
            <!--end::Title-->

            <!--begin::Text-->
            <div class="text-center text-gray-600 fw-bold pt-1">
              Outlines keep you honest. They stoping you from amazing poorly
              about drive
            </div>
            <!--end::Text-->

            <!--begin::Action-->
            <div class="text-center mt-5 mb-9">
              <a
                href="#"
                class="btn btn-sm btn-primary px-6"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_upgrade_plan"
                >Upgrade</a
              >
            </div>
            <!--end::Action-->
          </div>
          <!--end::Section-->

          <!--begin::Illustration-->
          <img
            class="mw-100 mh-200px"
            alt="metronic"
            src="media/illustrations/sketchy-1/1.png"
          />
          <!--end::Illustration-->
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Tab panel-->

      <!--begin::Tab panel-->
      <div class="tab-pane fade" id="kt_topbar_notifications_3" role="tabpanel">
        <!--begin::Items-->
        <div class="scroll-y mh-325px my-5 px-8">
          <template v-for="(item, index) in data2" :key="index">
            <!--begin::Item-->
            <div class="d-flex flex-stack py-4">
              <!--begin::Section-->
              <div class="d-flex align-items-center me-2">
                <!--begin::Code-->
                <span
                  class="w-70px badge me-4"
                  :class="`badge-light-${item.state}`"
                  >{{ item.code }}</span
                >
                <!--end::Code-->

                <!--begin::Title-->
                <a href="#" class="text-gray-800 text-hover-primary fw-bold">{{
                  item.message
                }}</a>
                <!--end::Title-->
              </div>
              <!--end::Section-->

              <!--begin::Label-->
              <span class="badge badge-light fs-8">{{ item.time }}</span>
              <!--end::Label-->
            </div>
            <!--end::Item-->
          </template>
        </div>
        <!--end::Items-->

        <!--begin::View more-->
        <div class="py-3 text-center border-top">
          <a href="#" class="btn btn-color-gray-600 btn-active-color-primary">
            View All
            <span class="svg-icon-svg-icon-5">
              <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
            </span>
          </a>
        </div>
        <!--end::View more-->
      </div>
      <!--end::Tab panel-->
    </div>
    <!--end::Tab content-->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "notifications-menu",
  components: {},
  setup() {
    const data1 = [
      {
        title: "Project Alice",
        description: "Phase 1 development",
        time: "1 hr",
        icon: "media/icons/duotune/technology/teh008.svg",
        state: "primary",
      },
      {
        title: "HR Confidential",
        description: "Confidential staff documents",
        time: "2 hrs",
        icon: "media/icons/duotune/general/gen044.svg",
        state: "danger",
      },
      {
        title: "Company HR",
        description: "Corporeate staff profiles",
        time: "5 hrs",
        icon: "media/icons/duotune/finance/fin006.svg",
        state: "warning",
      },
      {
        title: "Project Redux",
        description: "New frontend admin theme",
        time: "2 days",
        icon: "media/icons/duotune/files/fil023.svg",
        state: "success",
      },
      {
        title: "Project Breafing",
        description: "Product launch status update",
        time: "21 Jan",
        icon: "media/icons/duotune/maps/map001.svg",
        state: "primary",
      },
      {
        title: "Banner Assets",
        description: "Collection of banner images",
        time: "21 Jan",
        icon: "media/icons/duotune/general/gen006.svg",
        state: "info",
      },
      {
        title: "Icon Assets",
        description: "Collection of SVG icons",
        time: "20 March",
        icon: "media/icons/duotune/art/art002.svg",
        state: "warning",
      },
    ];

    const data2 = [
      {
        code: "200 OK",
        state: "success",
        message: "New order",
        time: "Just now",
      },
      {
        code: "500 ERR",
        state: "danger",
        message: "New customer",
        time: "2 hrs",
      },
      {
        code: "200 OK",
        state: "success",
        message: "Payment process",
        time: "5 hrs",
      },
      {
        code: "300 WRN",
        state: "warning",
        message: "Search query",
        time: "2 days",
      },
      {
        code: "200 OK",
        state: "success",
        message: "API connection",
        time: "1 week",
      },
      {
        code: "200 OK",
        state: "success",
        message: "Database restore",
        time: "Mar 5",
      },
      {
        code: "300 WRN",
        state: "warning",
        message: "System update",
        time: "May 15",
      },
      {
        code: "300 WRN",
        state: "warning",
        message: "Server OS update",
        time: "Apr 3",
      },
      {
        code: "300 WRN",
        state: "warning",
        message: "API rollback",
        time: "Jun 30",
      },
      {
        code: "500 ERR",
        state: "danger",
        message: "Refund process",
        time: "Jul 10",
      },
      {
        code: "500 ERR",
        state: "danger",
        message: "Withdrawal process",
        time: "Sep 10",
      },
      {
        code: "500 ERR",
        state: "danger",
        message: "Mail tasks",
        time: "Dec 10",
      },
    ];

    return {
      data1,
      data2,
    };
  },
});
</script>
