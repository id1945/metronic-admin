<template>
  <!--begin::Modal - Upgrade plan-->
  <div
    class="modal fade"
    id="kt_modal_upgrade_plan"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-xl">
      <!--begin::Modal content-->
      <div class="modal-content rounded">
        <!--begin::Modal header-->
        <div class="modal-header justify-content-end border-0 pb-0">
          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->

        <!--begin::Modal body-->
        <div class="modal-body pt-0 pb-15 px-5 px-xl-20">
          <!--begin::Heading-->
          <div class="mb-13 text-center">
            <h1 class="mb-3">Upgrade a Plan</h1>

            <div class="text-gray-400 fw-bold fs-5">
              If you need more info, please check
              <a href="#" class="link-primary fw-bolder">Pricing Guidelines</a>.
            </div>
          </div>
          <!--end::Heading-->

          <!--begin::Plans-->
          <div class="d-flex flex-column">
            <!--begin::Nav group-->
            <div
              class="nav-group nav-group-outline mx-auto"
              data-kt-buttons="true"
            >
              <button
                @click="current = 'month'"
                :class="[current === 'month' && 'active']"
                class="
                  btn btn-color-gray-400 btn-active btn-active-secondary
                  px-6
                  py-3
                  me-2
                "
              >
                Monthly
              </button>
              <button
                @click="current = 'annual'"
                :class="[current === 'annual' && 'active']"
                class="
                  btn btn-color-gray-400 btn-active btn-active-secondary
                  px-6
                  py-3
                "
              >
                Annual
              </button>
            </div>
            <!--end::Nav group-->

            <!--begin::Row-->
            <div class="row mt-10">
              <!--begin::Col-->
              <div class="col-lg-6 mb-10 mb-lg-0">
                <!--begin::Tabs-->
                <div class="nav flex-column">
                  <template v-for="(plan, index) in plans" :key="index">
                    <!--begin::Tab link-->
                    <div
                      @click="selected = plan.title"
                      class="
                        nav-link
                        btn btn-outline btn-outline-dashed btn-color-dark
                        d-flex
                        flex-stack
                        text-start
                        p-6
                      "
                      :class="[
                        index !== plans.length - 1 && 'mb-6',
                        plan.default && 'active',
                        !plan.custom && 'btn-active btn-active-primary',
                      ]"
                      data-bs-toggle="tab"
                      :data-bs-target="`#kt_upgrade_plan_${index}`"
                    >
                      <!--end::Description-->
                      <div class="d-flex align-items-center me-2">
                        <!--begin::Radio-->
                        <div
                          class="
                            form-check
                            form-check-custom
                            form-check-solid
                            form-check-success
                            me-6
                          "
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            name="plan"
                            :value="plan.title"
                            :checked="selected === plan.title"
                          />
                        </div>
                        <!--end::Radio-->

                        <!--begin::Info-->
                        <div class="flex-grow-1">
                          <h2
                            class="
                              d-flex
                              align-items-center
                              fs-2
                              fw-bolder
                              flex-wrap
                            "
                          >
                            {{ plan.title }}

                            <span
                              v-if="plan.label"
                              class="badge badge-light-success ms-2 fs-7"
                              >{{ plan.label }}</span
                            >
                          </h2>
                          <div class="fw-bold opacity-50">
                            {{ plan.subTitle }}
                          </div>
                        </div>
                        <!--end::Info-->
                      </div>
                      <!--end::Description-->

                      <!--begin::Price-->
                      <div class="ms-5">
                        <button
                          v-if="plan.custom"
                          class="btn btn-sm btn-primary"
                        >
                          Contact Us
                        </button>
                        <template v-else>
                          <span class="mb-2">$</span>

                          <span class="fs-3x fw-bolder">
                            {{
                              current === "month"
                                ? plan.priceMonth
                                : plan.priceAnnual
                            }}
                          </span>

                          <span class="fs-7 opacity-50"
                            >/
                            <span data-kt-element="period">Mon</span>
                          </span>
                        </template>
                      </div>
                      <!--end::Price-->
                    </div>
                    <!--end::Tab link-->
                  </template>
                </div>
                <!--end::Tabs-->
              </div>
              <!--end::Col-->

              <!--begin::Col-->
              <div class="col-lg-6">
                <!--begin::Tab content-->
                <div class="tab-content rounded h-100 bg-light p-10">
                  <template v-for="(plan, index) in plans" :key="index">
                    <!--begin::Tab Pane-->
                    <div
                      v-if="!plan.custom"
                      :class="[plan.default && 'show active']"
                      class="tab-pane fade"
                      :id="`kt_upgrade_plan_${index}`"
                    >
                      <!--begin::Heading-->
                      <div class="pb-5">
                        <h2 class="fw-bolder text-dark">
                          What’s in Startup Plan?
                        </h2>

                        <div class="text-gray-400 fw-bold">
                          {{ plan.description }}
                        </div>
                      </div>
                      <!--end::Heading-->

                      <!--begin::Body-->
                      <div class="pt-1">
                        <template
                          v-for="(feature, i) in plan.features"
                          :key="i"
                        >
                          <!--begin::Item-->
                          <div
                            :class="[i !== plan.features - 1 && 'mb-7']"
                            class="d-flex align-items-center"
                          >
                            <template v-if="feature.supported">
                              <span
                                class="fw-bold fs-5 text-gray-700 flex-grow-1"
                              >
                                {{ feature.title }}
                              </span>

                              <span
                                class="svg-icon svg-icon-1 svg-icon-success"
                              >
                                <inline-svg
                                  src="media/icons/duotune/general/gen043.svg"
                                />
                              </span>
                            </template>
                            <template v-else>
                              <span
                                class="fw-bold fs-5 text-gray-400 flex-grow-1"
                              >
                                {{ feature.title }}
                              </span>
                              <span class="svg-icon svg-icon-1">
                                <inline-svg
                                  src="media/icons/duotune/general/gen040.svg"
                                />
                              </span>
                            </template>
                          </div>
                          <!--end::Item-->
                        </template>
                      </div>
                      <!--end::Body-->
                    </div>
                    <!--end::Tab Pane-->
                  </template>
                </div>
                <!--end::Tab content-->
              </div>
              <!--end::Col-->
            </div>
            <!--end::Row-->
          </div>
          <!--end::Plans-->

          <!--begin::Actions-->
          <div class="d-flex flex-center flex-row-fluid pt-12">
            <button
              type="reset"
              class="btn btn-white me-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>

            <button type="submit" class="btn btn-primary">Upgrade Plan</button>
          </div>
          <!--end::Actions-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - Upgrade plan-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "upgrade-plan-modal",
  components: {},
  setup() {
    const current = ref<"month" | "annual">("month");

    const selected = ref("Startup");

    const plans = [
      {
        title: "Startup",
        subTitle: "Best for startups",
        description: "Optimal for 10+ team size and new startup",
        priceMonth: "39",
        priceAnnual: "399",
        default: true,
        custom: false,
        features: [
          {
            title: "Up to 10 Active Users",
            supported: true,
          },
          {
            title: "Up to 30 Project Integrations",
            supported: true,
          },
          {
            title: "Analytics Module",
            supported: true,
          },
          {
            title: "Finance Module",
            supported: false,
          },
          {
            title: "Accounting Module",
            supported: false,
          },
          {
            title: "Network Platform",
            supported: false,
          },
          {
            title: "Unlimited Cloud Space",
            supported: false,
          },
        ],
      },

      {
        title: "Advanced",
        subTitle: "Best for 100+ team size",
        description: "Optimal for 100+ team size and grown company",
        priceMonth: "339",
        priceAnnual: "3399",
        default: false,
        custom: false,
        features: [
          {
            title: "Up to 10 Active Users",
            supported: true,
          },
          {
            title: "Up to 30 Project Integrations",
            supported: true,
          },
          {
            title: "Analytics Module",
            supported: true,
          },
          {
            title: "Finance Module",
            supported: true,
          },
          {
            title: "Accounting Module",
            supported: true,
          },
          {
            title: "Network Platform",
            supported: false,
          },
          {
            title: "Unlimited Cloud Space",
            supported: false,
          },
        ],
      },

      {
        title: "Enterprise",
        subTitle: "Best value for 1000+ team",
        description: "Optimal for 1000+ team and enterpise",
        priceMonth: "999",
        priceAnnual: "9999",
        label: "Most popular",
        default: false,
        custom: false,
        features: [
          {
            title: "Up to 10 Active Users",
            supported: true,
          },
          {
            title: "Up to 30 Project Integrations",
            supported: true,
          },
          {
            title: "Analytics Module",
            supported: true,
          },
          {
            title: "Finance Module",
            supported: true,
          },
          {
            title: "Accounting Module",
            supported: true,
          },
          {
            title: "Network Platform",
            supported: true,
          },
          {
            title: "Unlimited Cloud Space",
            supported: true,
          },
        ],
      },

      {
        title: "Custom",
        subTitle: "Requet a custom license",
        default: false,
        custom: true,
      },
    ];

    return {
      plans,
      current,
      selected,
    };
  },
});
</script>
