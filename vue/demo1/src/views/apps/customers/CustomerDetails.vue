<template>
  <!--begin::Layout-->
  <div class="d-flex flex-column flex-xl-row">
    <!--begin::Sidebar-->
    <div class="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
      <!--begin::Card-->
      <div class="card mb-5 mb-xl-8">
        <!--begin::Card body-->
        <div class="card-body pt-15">
          <!--begin::Summary-->
          <div class="d-flex flex-center flex-column mb-5">
            <!--begin::Avatar-->
            <div class="symbol symbol-100px symbol-circle mb-7">
              <img src="media/avatars/150-26.jpg" alt="image" />
            </div>
            <!--end::Avatar-->

            <!--begin::Name-->
            <a
              href="#"
              class="fs-3 text-gray-800 text-hover-primary fw-bolder mb-1"
            >
              Max Smith
            </a>
            <!--end::Name-->

            <!--begin::Position-->
            <div class="fs-5 fw-bold text-muted mb-6">Software Enginer</div>
            <!--end::Position-->

            <!--begin::Info-->
            <div class="d-flex flex-wrap flex-center">
              <!--begin::Stats-->
              <div
                class="
                  border border-gray-300 border-dashed
                  rounded
                  py-3
                  px-3
                  mb-3
                "
              >
                <div class="fs-4 fw-bolder text-gray-700">
                  <span class="w-75px">6,900</span>
                  <span class="svg-icon svg-icon-3 svg-icon-success">
                    <inline-svg src="media/icons/duotune/arrows/arr066.svg" />
                  </span>
                </div>
                <div class="fw-bold text-muted">Earnings</div>
              </div>
              <!--end::Stats-->

              <!--begin::Stats-->
              <div
                class="
                  border border-gray-300 border-dashed
                  rounded
                  py-3
                  px-3
                  mx-4
                  mb-3
                "
              >
                <div class="fs-4 fw-bolder text-gray-700">
                  <span class="w-50px">130</span>
                  <span class="svg-icon svg-icon-3 svg-icon-danger">
                    <inline-svg src="media/icons/duotune/arrows/arr065.svg" />
                  </span>
                </div>
                <div class="fw-bold text-muted">Tasks</div>
              </div>
              <!--end::Stats-->

              <!--begin::Stats-->
              <div
                class="
                  border border-gray-300 border-dashed
                  rounded
                  py-3
                  px-3
                  mb-3
                "
              >
                <div class="fs-4 fw-bolder text-gray-700">
                  <span class="w-50px">500</span>
                  <span class="svg-icon svg-icon-3 svg-icon-success">
                    <inline-svg src="media/icons/duotune/arrows/arr066.svg" />
                  </span>
                </div>
                <div class="fw-bold text-muted">Hours</div>
              </div>
              <!--end::Stats-->
            </div>
            <!--end::Info-->
          </div>
          <!--end::Summary-->

          <!--begin::Details toggle-->
          <div class="d-flex flex-stack fs-4 py-3">
            <div
              class="fw-bolder rotate collapsible"
              data-bs-toggle="collapse"
              href="#kt_customer_view_details"
              role="button"
              aria-expanded="false"
              aria-controls="kt_customer_view_details"
            >
              Details
              <span class="ms-2 rotate-180">
                <span class="svg-icon svg-icon-3">
                  <inline-svg src="media/icons/duotune/arrows/arr072.svg" />
                </span>
              </span>
            </div>

            <span
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              title="Edit customer details"
            >
              <a
                href="#"
                class="btn btn-sm btn-light-primary"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_update_customer"
              >
                Edit
              </a>
            </span>
          </div>
          <!--end::Details toggle-->

          <div class="separator separator-dashed my-3"></div>

          <!--begin::Details content-->
          <div id="kt_customer_view_details" class="collapse show">
            <div class="py-5 fs-6">
              <!--begin::Badge-->
              <div class="badge badge-light-info d-inline">Premium user</div>
              <!--begin::Badge-->
              <!--begin::Details item-->
              <div class="fw-bolder mt-5">Account ID</div>
              <div class="text-gray-600">ID-45453423</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bolder mt-5">Billing Email</div>
              <div class="text-gray-600">
                <a href="#" class="text-gray-600 text-hover-primary"
                  >info@keenthemes.com</a
                >
              </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bolder mt-5">Billing Address</div>
              <div class="text-gray-600">
                101 Collin Street, <br />Melbourne 3000 VIC <br />Australia
              </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bolder mt-5">Language</div>
              <div class="text-gray-600">English</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bolder mt-5">Upcoming Invoice</div>
              <div class="text-gray-600">54238-8693</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bolder mt-5">Tax ID</div>
              <div class="text-gray-600">TX-8674</div>
              <!--begin::Details item-->
            </div>
          </div>
          <!--end::Details content-->
        </div>
        <!--end::Card body-->
      </div>
      <!--end::Card-->

      <!--begin::Connected Accounts-->
      <div class="card mb-5 mb-xl-8">
        <!--begin::Card header-->
        <div class="card-header border-0">
          <div class="card-title">
            <h3 class="fw-bolder m-0">Connected Accounts</h3>
          </div>
        </div>
        <!--end::Card header-->

        <!--begin::Card body-->
        <div class="card-body pt-2">
          <div
            class="
              notice
              d-flex
              bg-light-primary
              rounded
              border-primary border border-dashed
              mb-9
              p-6
            "
          >
            <span class="svg-icon svg-icon-2tx svg-icon-primary me-4">
              <inline-svg src="media/icons/duotune/art/art006.svg" />
            </span>
            <!--begin::Wrapper-->
            <div class="d-flex flex-stack flex-grow-1">
              <!--begin::Content-->
              <div class="fw-bold">
                <div class="fs-6 text-gray-700">
                  By connecting an account, you hereby agree to our
                  <a href="#" class="me-1">privacy policy</a>and
                  <a href="#">terms of use</a>.
                </div>
              </div>
              <!--end::Content-->
            </div>
            <!--end::Wrapper-->
          </div>

          <!--begin::Items-->
          <div class="py-2">
            <!--begin::Item-->
            <div class="d-flex flex-stack">
              <div class="d-flex">
                <img
                  src="media/svg/brand-logos/google-icon.svg"
                  class="w-30px me-6"
                  alt=""
                />

                <div class="d-flex flex-column">
                  <a
                    href="#"
                    class="fs-5 text-dark text-hover-primary fw-bolder"
                    >Google</a
                  >
                  <div class="fs-6 fw-bold text-muted">
                    Plan properly your workflow
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-end">
                <!--begin::Switch-->
                <label
                  class="
                    form-check
                    form-switch
                    form-switch-sm
                    form-check-custom
                    form-check-solid
                  "
                >
                  <!--begin::Input-->
                  <input
                    class="form-check-input"
                    name="google"
                    type="checkbox"
                    value="1"
                    id="kt_modal_connected_accounts_google"
                    checked="checked"
                  />
                  <!--end::Input-->

                  <!--begin::Label-->
                  <span
                    class="form-check-label fw-bold text-muted"
                    for="kt_modal_connected_accounts_google"
                  ></span>
                  <!--end::Label-->
                </label>
                <!--end::Switch-->
              </div>
            </div>
            <!--end::Item-->

            <div class="separator separator-dashed my-5"></div>

            <!--begin::Item-->
            <div class="d-flex flex-stack">
              <div class="d-flex">
                <img
                  src="media/svg/brand-logos/github.svg"
                  class="w-30px me-6"
                  alt=""
                />

                <div class="d-flex flex-column">
                  <a
                    href="#"
                    class="fs-5 text-dark text-hover-primary fw-bolder"
                    >Github</a
                  >
                  <div class="fs-6 fw-bold text-muted">
                    Keep eye on on your Repositories
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-end">
                <!--begin::Switch-->
                <label
                  class="
                    form-check
                    form-switch
                    form-switch-sm
                    form-check-custom
                    form-check-solid
                  "
                >
                  <!--begin::Input-->
                  <input
                    class="form-check-input"
                    name="github"
                    type="checkbox"
                    value="1"
                    id="kt_modal_connected_accounts_github"
                    checked="checked"
                  />
                  <!--end::Input-->

                  <!--begin::Label-->
                  <span
                    class="form-check-label fw-bold text-muted"
                    for="kt_modal_connected_accounts_github"
                  ></span>
                  <!--end::Label-->
                </label>
                <!--end::Switch-->
              </div>
            </div>
            <!--end::Item-->

            <div class="separator separator-dashed my-5"></div>

            <!--begin::Item-->
            <div class="d-flex flex-stack">
              <div class="d-flex">
                <img
                  src="media/svg/brand-logos/slack-icon.svg"
                  class="w-30px me-6"
                  alt=""
                />

                <div class="d-flex flex-column">
                  <a
                    href="#"
                    class="fs-5 text-dark text-hover-primary fw-bolder"
                    >Slack</a
                  >
                  <div class="fs-6 fw-bold text-muted">
                    Integrate Projects Discussions
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-end">
                <!--begin::Switch-->
                <label
                  class="
                    form-check
                    form-switch
                    form-switch-sm
                    form-check-custom
                    form-check-solid
                  "
                >
                  <!--begin::Input-->
                  <input
                    class="form-check-input"
                    name="slack"
                    type="checkbox"
                    value="1"
                    id="kt_modal_connected_accounts_slack"
                  />
                  <!--end::Input-->

                  <!--begin::Label-->
                  <span
                    class="form-check-label fw-bold text-muted"
                    for="kt_modal_connected_accounts_slack"
                  ></span>
                  <!--end::Label-->
                </label>
                <!--end::Switch-->
              </div>
            </div>
            <!--end::Item-->
          </div>
          <!--end::Items-->
        </div>
        <!--end::Card body-->

        <!--begin::Card footer-->
        <div class="card-footer border-0 d-flex justify-content-center pt-0">
          <button class="btn btn-sm btn-light-primary">Save Changes</button>
        </div>
        <!--end::Card footer-->
      </div>
      <!--end::Connected Accounts-->
    </div>
    <!--end::Sidebar-->

    <!--begin::Content-->
    <div class="flex-lg-row-fluid ms-lg-15">
      <!--begin:::Tabs-->
      <ul
        class="
          nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x
          border-0
          fs-4
          fw-bold
          mb-8
        "
      >
        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4 active"
            data-bs-toggle="tab"
            href="#kt_customer_view_overview_tab"
            >Overview</a
          >
        </li>
        <!--end:::Tab item-->

        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4"
            data-bs-toggle="tab"
            href="#kt_customer_view_overview_events_and_logs_tab"
            >Events & Logs</a
          >
        </li>
        <!--end:::Tab item-->

        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4"
            data-kt-countup-tabs="true"
            data-bs-toggle="tab"
            href="#kt_customer_view_overview_statements"
            >Statements</a
          >
        </li>
        <!--end:::Tab item-->

        <!--begin:::Tab item-->
        <li class="nav-item ms-auto">
          <!--begin::Action menu-->
          <a
            href="#"
            class="btn btn-primary ps-7"
            data-kt-menu-trigger="click"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
          >
            Actions
            <span class="svg-icon svg-icon-2 me-0">
              <inline-svg src="media/icons/duotune/arrows/arr072.svg" />
            </span>
          </a>
          <Dropdown3></Dropdown3>
          <!--end::Menu-->
        </li>
        <!--end:::Tab item-->
      </ul>
      <!--end:::Tabs-->

      <!--begin:::Tab content-->
      <div class="tab-content" id="myTabContent">
        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade show active"
          id="kt_customer_view_overview_tab"
          role="tabpanel"
        >
          <PaymentRecords card-classes="mb-6 mb-xl-9"></PaymentRecords>

          <PaymentMethods card-classes="mb-6 mb-xl-9"></PaymentMethods>

          <CreditBalance card-classes="mb-6 mb-xl-9"></CreditBalance>

          <Invoices card-classes="mb-6 mb-xl-9"></Invoices>
        </div>
        <!--end:::Tab pane-->

        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade"
          id="kt_customer_view_overview_events_and_logs_tab"
          role="tabpanel"
        >
          <Logs card-classes="mb-6 mb-xl-9"></Logs>
          <Events card-classes="mb-6 mb-xl-9"></Events>
        </div>
        <!--end:::Tab pane-->

        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade"
          id="kt_customer_view_overview_statements"
          role="tabpanel"
        >
          <Earnings card-classes="mb-6 mb-xl-9"></Earnings>
          <Statement card-classes="mb-6 mb-xl-9"></Statement>
        </div>
        <!--end:::Tab pane-->
      </div>
      <!--end:::Tab content-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Layout-->

  <NewCardModal></NewCardModal>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { MenuComponent } from "@/assets/ts/components";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import NewCardModal from "@/components/modals/forms/NewCardModal.vue";
import PaymentRecords from "@/components/customers/cards/overview/PaymentRecords.vue";
import PaymentMethods from "@/components/customers/cards/overview/PaymentMethods.vue";
import CreditBalance from "@/components/customers/cards/overview/CreditBalance.vue";
import Invoices from "@/components/customers/cards/overview/Invoices.vue";

import Events from "@/components/customers/cards/events-and-logs/Events.vue";
import Logs from "@/components/customers/cards/events-and-logs/Logs.vue";

import Earnings from "@/components/customers/cards/statments/Earnings.vue";
import Statement from "@/components/customers/cards/statments/Statement.vue";

export default defineComponent({
  name: "customer-details",
  components: {
    PaymentRecords,
    PaymentMethods,
    CreditBalance,
    Invoices,
    Events,
    Logs,
    Earnings,
    Statement,
    Dropdown3,
    NewCardModal,
  },
  setup() {
    onMounted(() => {
      MenuComponent.reinitialization();
      setCurrentPageBreadcrumbs("Customer Details", ["Apps", "Customers"]);
    });

    return {};
  },
});
</script>
