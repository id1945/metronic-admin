<template>
  <!--begin::Navbar-->
  <div class="card mb-5 mb-xxl-8">
    <div class="card-body pt-9 pb-0">
      <!--begin::Details-->
      <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
        <!--begin: Pic-->
        <div class="me-7 mb-4">
          <div
            class="
              symbol symbol-100px symbol-lg-160px symbol-fixed
              position-relative
            "
          >
            <img src="media/avatars/150-2.jpg" alt="image" />
            <div
              class="
                position-absolute
                translate-middle
                bottom-0
                start-100
                mb-6
                bg-success
                rounded-circle
                border border-4 border-white
                h-20px
                w-20px
              "
            ></div>
          </div>
        </div>
        <!--end::Pic-->

        <!--begin::Info-->
        <div class="flex-grow-1">
          <!--begin::Title-->
          <div
            class="
              d-flex
              justify-content-between
              align-items-start
              flex-wrap
              mb-2
            "
          >
            <!--begin::User-->
            <div class="d-flex flex-column">
              <!--begin::Name-->
              <div class="d-flex align-items-center mb-2">
                <a
                  href="#"
                  class="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                  >Max Smith</a
                >
                <a href="#">
                  <span class="svg-icon svg-icon-1 svg-icon-primary">
                    <inline-svg src="media/icons/duotune/general/gen026.svg" />
                  </span>
                </a>
              </div>
              <!--end::Name-->

              <!--begin::Info-->
              <div class="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                <a
                  href="#"
                  class="
                    d-flex
                    align-items-center
                    text-gray-400 text-hover-primary
                    me-5
                    mb-2
                  "
                >
                  <span class="svg-icon svg-icon-4 me-1">
                    <inline-svg
                      src="media/icons/duotune/communication/com006.svg"
                    />
                  </span>
                  Developer
                </a>
                <a
                  href="#"
                  class="
                    d-flex
                    align-items-center
                    text-gray-400 text-hover-primary
                    me-5
                    mb-2
                  "
                >
                  <span class="svg-icon svg-icon-4 me-1">
                    <inline-svg src="media/icons/duotune/general/gen018.svg" />
                  </span>
                  SF, Bay Area
                </a>
                <a
                  href="#"
                  class="
                    d-flex
                    align-items-center
                    text-gray-400 text-hover-primary
                    mb-2
                  "
                >
                  <span class="svg-icon svg-icon-4 me-1">
                    <inline-svg
                      src="media/icons/duotune/communication/com011.svg"
                    />
                  </span>
                  max@kt.com
                </a>
              </div>
              <!--end::Info-->
            </div>
            <!--end::User-->

            <!--begin::Actions-->
            <div class="d-flex my-4">
              <a
                href="#"
                class="btn btn-sm btn-light me-2"
                id="kt_user_follow_button"
              >
                <span class="svg-icon svg-icon-3 d-none">
                  <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                </span>
                Follow
              </a>

              <a
                href="#"
                class="btn btn-sm btn-primary me-3"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_offer_a_deal"
                >Hire Me</a
              >

              <!--begin::Menu-->
              <div class="me-0">
                <button
                  class="
                    btn btn-sm btn-icon btn-bg-light btn-active-color-primary
                  "
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-flip="top-end"
                >
                  <i class="bi bi-three-dots fs-3"></i>
                </button>
                <Dropdown3></Dropdown3>
              </div>
              <!--end::Menu-->
            </div>
            <!--end::Actions-->
          </div>
          <!--end::Title-->

          <!--begin::Stats-->
          <div class="d-flex flex-wrap flex-stack">
            <!--begin::Wrapper-->
            <div class="d-flex flex-column flex-grow-1 pe-8">
              <!--begin::Stats-->
              <div class="d-flex flex-wrap">
                <!--begin::Stat-->
                <div
                  class="
                    border border-gray-300 border-dashed
                    rounded
                    min-w-125px
                    py-3
                    px-4
                    me-6
                    mb-3
                  "
                >
                  <!--begin::Number-->
                  <div class="d-flex align-items-center">
                    <span class="svg-icon svg-icon-3 svg-icon-success me-2">
                      <inline-svg src="media/icons/duotune/arrows/arr066.svg" />
                    </span>
                    <div
                      class="fs-2 fw-bolder"
                      data-kt-countup="true"
                      data-kt-countup-value="4500"
                      data-kt-countup-prefix="$"
                    >
                      4,500$
                    </div>
                  </div>
                  <!--end::Number-->

                  <!--begin::Label-->
                  <div class="fw-bold fs-6 text-gray-400">Earnings</div>
                  <!--end::Label-->
                </div>
                <!--end::Stat-->

                <!--begin::Stat-->
                <div
                  class="
                    border border-gray-300 border-dashed
                    rounded
                    min-w-125px
                    py-3
                    px-4
                    me-6
                    mb-3
                  "
                >
                  <!--begin::Number-->
                  <div class="d-flex align-items-center">
                    <span class="svg-icon svg-icon-3 svg-icon-danger me-2">
                      <inline-svg src="media/icons/duotune/arrows/arr065.svg" />
                    </span>
                    <div
                      class="fs-2 fw-bolder"
                      data-kt-countup="true"
                      data-kt-countup-value="75"
                    >
                      75
                    </div>
                  </div>
                  <!--end::Number-->

                  <!--begin::Label-->
                  <div class="fw-bold fs-6 text-gray-400">Projects</div>
                  <!--end::Label-->
                </div>
                <!--end::Stat-->

                <!--begin::Stat-->
                <div
                  class="
                    border border-gray-300 border-dashed
                    rounded
                    min-w-125px
                    py-3
                    px-4
                    me-6
                    mb-3
                  "
                >
                  <!--begin::Number-->
                  <div class="d-flex align-items-center">
                    <span class="svg-icon svg-icon-3 svg-icon-success me-2">
                      <inline-svg src="media/icons/duotune/arrows/arr066.svg" />
                    </span>
                    <div
                      class="fs-2 fw-bolder"
                      data-kt-countup="true"
                      data-kt-countup-value="60"
                      data-kt-countup-prefix="%"
                    >
                      60%
                    </div>
                  </div>
                  <!--end::Number-->

                  <!--begin::Label-->
                  <div class="fw-bold fs-6 text-gray-400">Success Rate</div>
                  <!--end::Label-->
                </div>
                <!--end::Stat-->
              </div>
              <!--end::Stats-->
            </div>
            <!--end::Wrapper-->

            <!--begin::Progress-->
            <div
              class="
                d-flex
                align-items-center
                w-200px w-sm-300px
                flex-column
                mt-3
              "
            >
              <div class="d-flex justify-content-between w-100 mt-auto mb-2">
                <span class="fw-bold fs-6 text-gray-400"
                  >Profile Compleation</span
                >
                <span class="fw-bolder fs-6">50%</span>
              </div>

              <div class="h-5px mx-3 w-100 bg-light mb-3">
                <div
                  class="bg-success rounded h-5px"
                  role="progressbar"
                  style="width: 50%"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <!--end::Progress-->
          </div>
          <!--end::Stats-->
        </div>
        <!--end::Info-->
      </div>
      <!--end::Details-->

      <!--begin::Navs-->
      <div class="d-flex overflow-auto h-55px">
        <ul
          class="
            nav nav-stretch nav-line-tabs nav-line-tabs-2x
            border-transparent
            fs-5
            fw-bolder
            flex-nowrap
          "
        >
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              to="/crafted/pages/profile/overview"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              Overview
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              class="nav-link text-active-primary me-6"
              to="/crafted/pages/profile/projects"
              active-class="active"
            >
              Projects
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              class="nav-link text-active-primary me-6"
              to="/crafted/pages/profile/campaigns"
              active-class="active"
            >
              Campaigns
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              class="nav-link text-active-primary me-6"
              to="/crafted/pages/profile/documents"
              active-class="active"
            >
              Documents
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              class="nav-link text-active-primary me-6"
              to="/crafted/pages/profile/connections"
              active-class="active"
            >
              Connections
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              class="nav-link text-active-primary me-6"
              to="/crafted/pages/profile/activity"
              active-class="active"
            >
              Activity
            </router-link>
          </li>
          <!--end::Nav item-->
        </ul>
      </div>
      <!--begin::Navs-->
    </div>
  </div>
  <!--end::Navbar-->
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "profile",
  components: {
    Dropdown3,
  },
});
</script>
