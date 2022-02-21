<template>
  <!--begin::Exolore drawer toggle-->
  <button
    id="kt_explore_toggle"
    class="
      btn btn-sm btn-white btn-active-primary
      shadow-sm
      position-fixed
      px-5
      fw-bolder
      zindex-2
      top-50
      mt-10
      end-0
      transform-90
      fs-6
    "
    data-bs-toggle="tooltip"
    data-bs-placement="right"
    data-bs-trigger="hover"
  >
    <span id="kt_explore_toggle_label">Explore</span>
  </button>
  <!--end::Exolore drawer toggle-->

  <!--begin::Exolore drawer-->
  <div
    id="kt_explore"
    class="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="explore"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'350px', 'lg': '475px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_explore_toggle"
    data-kt-drawer-close="#kt_explore_close"
  >
    <!--begin::Card-->
    <div class="card shadow-none w-100">
      <!--begin::Header-->
      <div class="card-header" id="kt_explore_header">
        <h3 class="card-title fw-bolder text-gray-700">
          Explore {{ themeName }}
        </h3>

        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon btn-active-light-primary me-n5"
            id="kt_explore_close"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body" id="kt_explore_body">
        <!--begin::Content-->
        <div
          id="kt_explore_scroll"
          class="scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_explore_body"
          data-kt-scroll-dependencies="#kt_explore_header"
          data-kt-scroll-offset="5px"
        >
          <!--begin::Wrapper-->
          <div class="mb-0">
            <!--begin::Header-->
            <div class="mb-7">
              <div class="d-flex flex-stack">
                <h3 class="mb-0">Metronic Licenses</h3>

                <a
                  href="https://themeforest.net/licenses/standard"
                  class="fw-bold"
                  target="_blank"
                >
                  License FAQs
                </a>
              </div>
            </div>
            <!--end::Header-->

            <!--begin::License-->
            <div
              class="
                rounded
                border border-dashed border-gray-300
                py-4
                px-6
                mb-5
              "
            >
              <div class="d-flex flex-stack">
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-1">
                    <div class="fs-6 fw-bold text-gray-800 fw-bold mb-0 me-1">
                      Regular License
                    </div>

                    <i
                      class="text-gray-400 fas fa-exclamation-circle ms-1 fs-7"
                      data-bs-toggle="popover"
                      data-bs-custom-class="popover-dark"
                      data-bs-trigger="hover"
                      data-bs-placement="top"
                      data-bs-content="Use, by you or one client in a single end product which end users are not charged for."
                    >
                    </i>
                  </div>
                  <div class="fs-7 text-muted">
                    For single end product used by you or one client
                  </div>
                </div>

                <div class="text-nowrap">
                  <span class="text-muted fs-7 fw-bold">$</span>
                  <span class="text-dark fs-1 fw-bolder">39</span>
                </div>
              </div>
            </div>
            <!--end::License-->

            <!--begin::License-->
            <div
              class="
                rounded
                border border-dashed border-gray-300
                py-4
                px-6
                mb-5
              "
            >
              <div class="d-flex flex-stack">
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-1">
                    <div class="fs-6 fw-bold text-gray-800 fw-bold mb-0 me-1">
                      Extended License
                    </div>

                    <i
                      class="text-gray-400 fas fa-exclamation-circle ms-1 fs-7"
                      data-bs-toggle="popover"
                      data-bs-custom-class="popover-dark"
                      data-bs-trigger="hover"
                      data-bs-placement="top"
                      data-bs-content="Use, by you or one client, in a single end product which end users can be charged for."
                    >
                    </i>
                  </div>
                  <div class="fs-7 text-muted">
                    For single end product with paying users.
                  </div>
                </div>

                <div class="text-nowrap">
                  <span class="text-muted fs-7 fw-bold">$</span>
                  <span class="text-dark fs-1 fw-bolder">939</span>
                </div>
              </div>
            </div>
            <!--end::License-->

            <!--begin::License-->
            <div
              class="
                rounded
                border border-dashed border-gray-300
                py-4
                px-6
                mb-5
              "
            >
              <div class="d-flex flex-stack">
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-1">
                    <div class="fs-6 fw-bold text-gray-800 fw-bold mb-0 me-1">
                      Custom License
                    </div>
                  </div>
                  <div class="fs-7 text-muted">
                    Reach us for custom license offers.
                  </div>
                </div>

                <div class="text-nowrap">
                  <a
                    href="https://keenthemes.com/contact/"
                    class="btn btn-sm btn-success"
                    target="_blank"
                    >Contact Us</a
                  >
                </div>
              </div>
            </div>
            <!--end::License-->

            <!--begin::Purchase-->
            <a
              href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469"
              class="btn btn-primary mb-15 w-100"
            >
              Buy Now
            </a>
            <!--end::Purchase-->

            <!--begin::Demos-->
            <div class="mb-0">
              <h3 class="fw-bolder text-center mb-6">{{ themeName }} Demos</h3>

              <!--begin::Row-->
              <div class="row g-5">
                <template v-for="(item, i) in demos" :key="i">
                  <div class="col-6">
                    <!--begin::Demo-->
                    <div
                      :class="`overlay overflow-hidden position-relative ${
                        demo === item.name
                          ? 'border border-4 border-success'
                          : 'border border-4 border-gray-200'
                      } rounded`"
                    >
                      <div class="overlay-wrapper">
                        <img
                          :src="`media/demos/${item.name}.png`"
                          alt="demo"
                          :class="`w-100 ${!item.available && 'opacity-75'}`"
                        />
                      </div>

                      <div class="overlay-layer bg-dark bg-opacity-10">
                        <a
                          v-if="item.available"
                          :href="`https://preview.keenthemes.com/metronic8/vue/${item.name}`"
                          class="btn btn-sm btn-success shadow"
                          >{{
                            item.name.charAt(0).toUpperCase() +
                            item.name.slice(1)
                          }}</a
                        >
                        <div
                          v-else
                          class="
                            badge badge-white
                            px-6
                            py-4
                            fw-bold
                            fs-base
                            shadow
                          "
                        >
                          Coming soon
                        </div>
                      </div>
                    </div>
                    <!--end::Demo-->
                  </div>
                </template>
              </div>
              <!--end::Row-->
            </div>
            <!--end::Demos-->
          </div>
          <!--end::Wrapper-->
        </div>
        <!--end::Content-->
      </div>
      <!--end::Body-->
    </div>
    <!--end::Card-->
  </div>
  <!--end::Exolore drawer-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { themeName, demo } from "@/core/helpers/documentation";

export default defineComponent({
  name: "kt-explore",
  setup() {
    const demos = [
      {
        name: "demo1",
        available: true,
      },
      {
        name: "demo2",
        available: true,
      },
      {
        name: "demo3",
      },
      {
        name: "demo4",
      },
      {
        name: "demo5",
      },
      {
        name: "demo6",
      },
      {
        name: "demo7",
        available: true,
      },
      {
        name: "demo8",
      },
      {
        name: "demo9",
      },
      {
        name: "demo10",
      },
      {
        name: "demo11",
      },
      {
        name: "demo12",
      },
      {
        name: "demo13",
      },
    ];

    return {
      themeName,
      demos,
      demo,
    };
  },
});
</script>
