<template>
  <div :class="`card pt-4 ${cardClasses}`">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title">
        <h2 class="fw-bolder mb-0">Payment Methods</h2>
      </div>
      <!--end::Card title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <a
          href="#"
          class="btn btn-sm btn-flex btn-light-primary"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_new_card"
        >
          <span class="svg-icon svg-icon-3">
            <inline-svg src="media/icons/duotune/general/gen035.svg" />
          </span>
          Add new method</a
        >
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->
    <!--begin::Card body-->
    <div id="kt_customer_view_payment_method" class="card-body pt-0">
      <!--begin::Option-->
      <div class="py-0" data-kt-customer-payment-method="row">
        <!--begin::Header-->
        <div class="py-3 d-flex flex-stack flex-wrap">
          <!--begin::Toggle-->
          <div
            class="d-flex align-items-center collapsible rotate collapsed"
            data-bs-toggle="collapse"
            href="#kt_customer_view_payment_method_1"
            role="button"
            aria-expanded="false"
            aria-controls="kt_customer_view_payment_method_1"
          >
            <!--begin::Arrow-->
            <div class="me-3 rotate-90">
              <span class="svg-icon svg-icon-3">
                <inline-svg src="media/icons/duotune/arrows/arr071.svg" />
              </span>
            </div>
            <!--end::Arrow-->
            <!--begin::Logo-->
            <img
              src="media/svg/card-logos/mastercard.svg"
              class="w-40px me-3"
              alt=""
            />
            <!--end::Logo-->
            <!--begin::Summary-->
            <div class="me-3">
              <div class="d-flex align-items-center">
                <div class="text-gray-800 fw-bolder">Mastercard</div>
                <div class="badge badge-light-primary ms-5">Primary</div>
              </div>
              <div class="text-muted">Expires Dec 2024</div>
            </div>
            <!--end::Summary-->
          </div>
          <!--end::Toggle-->
          <!--begin::Toolbar-->
          <div class="d-flex my-3 ms-9">
            <!--begin::Edit-->
            <a
              href="#"
              class="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_new_card"
            >
              <span
                data-bs-toggle="tooltip"
                data-bs-trigger="hover"
                title=""
                data-bs-original-title="Edit"
              >
                <span class="svg-icon svg-icon-3">
                  <inline-svg src="media/icons/duotune/art/art005.svg" />
                </span>
              </span>
            </a>
            <!--end::Edit-->
            <!--begin::Delete-->
            <a
              href="#"
              class="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
              data-bs-toggle="tooltip"
              title=""
              data-kt-customer-payment-method="delete"
              data-bs-original-title="Delete"
            >
              <!--begin::Svg Icon | path: icons/duotune/general/gen027.svg-->
              <span class="svg-icon svg-icon-3">
                <inline-svg src="media/icons/duotune/general/gen027.svg" />
              </span>
            </a>
            <!--end::Delete-->
            <!--begin::More-->
            <a
              href="#"
              class="btn btn-icon btn-active-light-primary w-30px h-30px"
              data-bs-toggle="tooltip"
              title=""
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
              data-bs-original-title="More Options"
            >
              <span class="svg-icon svg-icon-3">
                <inline-svg src="media/icons/duotune/general/gen019.svg" />
              </span>
            </a>
            <!--begin::Menu-->
            <div
              class="
                menu
                menu-sub
                menu-sub-dropdown
                menu-column
                menu-rounded
                menu-gray-600
                menu-state-bg-light-primary
                fw-bold
                w-150px
                py-3
              "
              data-kt-menu="true"
            >
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <a
                  href="#"
                  class="menu-link px-3"
                  data-kt-payment-mehtod-action="set_as_primary"
                  >Set as Primary</a
                >
              </div>
              <!--end::Menu item-->
            </div>
            <!--end::Menu-->
            <!--end::More-->
          </div>
          <!--end::Toolbar-->
        </div>
        <!--end::Header-->
        <!--begin::Body-->
        <div
          id="kt_customer_view_payment_method_1"
          class="fs-6 ps-10 collapse"
          data-bs-parent="#kt_customer_view_payment_method"
          style=""
        >
          <!--begin::Details-->
          <div class="d-flex flex-wrap py-5">
            <!--begin::Col-->
            <div class="flex-equal me-5">
              <table class="table table-flush fw-bold gy-1">
                <tbody>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Name</td>
                    <td class="text-gray-800">Emma Smith</td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Number</td>
                    <td class="text-gray-800">**** 9916</td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Expires</td>
                    <td class="text-gray-800">12/2024</td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Type</td>
                    <td class="text-gray-800">Mastercard credit card</td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Issuer</td>
                    <td class="text-gray-800">VICBANK</td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">ID</td>
                    <td class="text-gray-800">id_4325df90sdf8</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--end::Col-->
            <!--begin::Col-->
            <div class="flex-equal">
              <table class="table table-flush fw-bold gy-1">
                <tbody>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">
                      Billing address
                    </td>
                    <td class="text-gray-800">AU</td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Phone</td>
                    <td class="text-gray-800">No phone provided</td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Email</td>
                    <td class="text-gray-800">
                      <a href="#" class="text-gray-900 text-hover-primary"
                        >e.smith@kpmg.com.au</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Origin</td>
                    <td class="text-gray-800">
                      Australia
                      <div class="symbol symbol-20px symbol-circle ms-2">
                        <img src="media/flags/australia.svg" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">CVC check</td>
                    <td class="text-gray-800">
                      Passed
                      <span class="svg-icon svg-icon-2 svg-icon-success">
                        <inline-svg
                          src="media/icons/duotune/general/gen043.svg"
                        />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Details-->
        </div>
        <!--end::Body-->
      </div>
      <!--end::Option-->
      <div class="separator separator-dashed"></div>
      <!--begin::Option-->
      <div class="py-0" data-kt-customer-payment-method="row">
        <!--begin::Header-->
        <div class="py-3 d-flex flex-stack flex-wrap">
          <!--begin::Toggle-->
          <div
            class="d-flex align-items-center collapsible rotate collapsed"
            data-bs-toggle="collapse"
            href="#kt_customer_view_payment_method_2"
            role="button"
            aria-expanded="false"
            aria-controls="kt_customer_view_payment_method_2"
          >
            <!--begin::Arrow-->
            <div class="me-3 rotate-90">
              <span class="svg-icon svg-icon-3">
                <inline-svg src="media/icons/duotune/arrows/arr071.svg" />
              </span>
            </div>
            <!--end::Arrow-->
            <!--begin::Logo-->
            <img
              src="media/svg/card-logos/visa.svg"
              class="w-40px me-3"
              alt=""
            />
            <!--end::Logo-->
            <!--begin::Summary-->
            <div class="me-3">
              <div class="d-flex align-items-center">
                <div class="text-gray-800 fw-bolder">Visa</div>
              </div>
              <div class="text-muted">Expires Feb 2022</div>
            </div>
            <!--end::Summary-->
          </div>
          <!--end::Toggle-->
          <!--begin::Toolbar-->
          <div class="d-flex my-3 ms-9">
            <!--begin::Edit-->
            <a
              href="#"
              class="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_new_card"
            >
              <span
                data-bs-toggle="tooltip"
                data-bs-trigger="hover"
                title=""
                data-bs-original-title="Edit"
              >
                <span class="svg-icon svg-icon-3">
                  <inline-svg src="media/icons/duotune/art/art005.svg" />
                </span>
              </span>
            </a>
            <!--end::Edit-->
            <!--begin::Delete-->
            <a
              href="#"
              class="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
              data-bs-toggle="tooltip"
              title=""
              data-kt-customer-payment-method="delete"
              data-bs-original-title="Delete"
            >
              <span class="svg-icon svg-icon-3">
                <inline-svg src="media/icons/duotune/general/gen027.svg" />
              </span>
            </a>
            <!--end::Delete-->
            <!--begin::More-->
            <a
              href="#"
              class="btn btn-icon btn-active-light-primary w-30px h-30px"
              data-bs-toggle="tooltip"
              title=""
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
              data-bs-original-title="More Options"
            >
              <span class="svg-icon svg-icon-3">
                <inline-svg src="media/icons/duotune/general/gen019.svg" />
              </span>
            </a>
            <!--begin::Menu-->
            <div
              class="
                menu
                menu-sub
                menu-sub-dropdown
                menu-column
                menu-rounded
                menu-gray-600
                menu-state-bg-light-primary
                fw-bold
                w-150px
                py-3
              "
              data-kt-menu="true"
            >
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <a
                  href="#"
                  class="menu-link px-3"
                  data-kt-payment-mehtod-action="set_as_primary"
                  >Set as Primary</a
                >
              </div>
              <!--end::Menu item-->
            </div>
            <!--end::Menu-->
            <!--end::More-->
          </div>
          <!--end::Toolbar-->
        </div>
        <!--end::Header-->
        <!--begin::Body-->
        <div
          id="kt_customer_view_payment_method_2"
          class="fs-6 ps-10 collapse"
          data-bs-parent="#kt_customer_view_payment_method"
          style=""
        >
          <!--begin::Details-->
          <div class="d-flex flex-wrap py-5">
            <!--begin::Col-->
            <div class="flex-equal me-5">
              <table class="table table-flush fw-bold gy-1">
                <tbody>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Name</td>
                    <td class="text-gray-800">Melody Macy</td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Number</td>
                    <td class="text-gray-800">**** 5459</td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Expires</td>
                    <td class="text-gray-800">02/2022</td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Type</td>
                    <td class="text-gray-800">Visa credit card</td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Issuer</td>
                    <td class="text-gray-800">ENBANK</td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">ID</td>
                    <td class="text-gray-800">id_w2r84jdy723</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--end::Col-->
            <!--begin::Col-->
            <div class="flex-equal">
              <table class="table table-flush fw-bold gy-1">
                <tbody>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">
                      Billing address
                    </td>
                    <td class="text-gray-800">UK</td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Phone</td>
                    <td class="text-gray-800">No phone provided</td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Email</td>
                    <td class="text-gray-800">
                      <a href="#" class="text-gray-900 text-hover-primary"
                        >melody@altbox.com</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Origin</td>
                    <td class="text-gray-800">
                      United Kingdom
                      <div class="symbol symbol-20px symbol-circle ms-2">
                        <img src="media/flags/united-kingdom.svg" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">CVC check</td>
                    <td class="text-gray-800">
                      Passed

                      <span class="svg-icon svg-icon-2 svg-icon-success">
                        <inline-svg
                          src="media/icons/duotune/arrows/arr012.svg"
                        />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Details-->
        </div>
        <!--end::Body-->
      </div>
      <!--end::Option-->
      <div class="separator separator-dashed"></div>
      <!--begin::Option-->
      <div class="py-0" data-kt-customer-payment-method="row">
        <!--begin::Header-->
        <div class="py-3 d-flex flex-stack flex-wrap">
          <!--begin::Toggle-->
          <div
            class="d-flex align-items-center collapsible collapsed rotate"
            data-bs-toggle="collapse"
            href="#kt_customer_view_payment_method_3"
            role="button"
            aria-expanded="false"
            aria-controls="kt_customer_view_payment_method_3"
          >
            <!--begin::Arrow-->
            <div class="me-3 rotate-90">
              <span class="svg-icon svg-icon-3">
                <inline-svg src="media/icons/duotune/arrows/arr071.svg" />
              </span>
            </div>
            <!--end::Arrow-->
            <!--begin::Logo-->
            <img
              src="media/svg/card-logos/american-express.svg"
              class="w-40px me-3"
              alt=""
            />
            <!--end::Logo-->
            <!--begin::Summary-->
            <div class="me-3">
              <div class="d-flex align-items-center">
                <div class="text-gray-800 fw-bolder">American Express</div>
                <div class="badge badge-light-danger ms-5">Expired</div>
              </div>
              <div class="text-muted">Expires Aug 2021</div>
            </div>
            <!--end::Summary-->
          </div>
          <!--end::Toggle-->
          <!--begin::Toolbar-->
          <div class="d-flex my-3 ms-9">
            <!--begin::Edit-->
            <a
              href="#"
              class="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_new_card"
            >
              <span
                data-bs-toggle="tooltip"
                data-bs-trigger="hover"
                title=""
                data-bs-original-title="Edit"
              >
                <span class="svg-icon svg-icon-3">
                  <inline-svg src="media/icons/duotune/art/art005.svg" />
                </span>
              </span>
            </a>
            <!--end::Edit-->
            <!--begin::Delete-->
            <a
              href="#"
              class="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
              data-bs-toggle="tooltip"
              title=""
              data-kt-customer-payment-method="delete"
              data-bs-original-title="Delete"
            >
              <span class="svg-icon svg-icon-3">
                <inline-svg src="media/icons/duotune/general/gen027.svg" />
              </span>
            </a>
            <!--end::Delete-->
            <!--begin::More-->
            <a
              href="#"
              class="btn btn-icon btn-active-light-primary w-30px h-30px"
              data-bs-toggle="tooltip"
              title=""
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
              data-bs-original-title="More Options"
            >
              <span class="svg-icon svg-icon-3">
                <inline-svg src="media/icons/duotune/general/gen019.svg" />
              </span>
            </a>
            <!--begin::Menu-->
            <div
              class="
                menu
                menu-sub
                menu-sub-dropdown
                menu-column
                menu-rounded
                menu-gray-600
                menu-state-bg-light-primary
                fw-bold
                w-150px
                py-3
              "
              data-kt-menu="true"
            >
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <a
                  href="#"
                  class="menu-link px-3"
                  data-kt-payment-mehtod-action="set_as_primary"
                  >Set as Primary</a
                >
              </div>
              <!--end::Menu item-->
            </div>
            <!--end::Menu-->
            <!--end::More-->
          </div>
          <!--end::Toolbar-->
        </div>
        <!--end::Header-->
        <!--begin::Body-->
        <div
          id="kt_customer_view_payment_method_3"
          class="collapse fs-6 ps-10"
          data-bs-parent="#kt_customer_view_payment_method"
        >
          <!--begin::Details-->
          <div class="d-flex flex-wrap py-5">
            <!--begin::Col-->
            <div class="flex-equal me-5">
              <table class="table table-flush fw-bold gy-1">
                <tbody>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Name</td>
                    <td class="text-gray-800">Max Smith</td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Number</td>
                    <td class="text-gray-800">**** 5029</td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Expires</td>
                    <td class="text-gray-800">08/2021</td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Type</td>
                    <td class="text-gray-800">American express credit card</td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Issuer</td>
                    <td class="text-gray-800">USABANK</td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">ID</td>
                    <td class="text-gray-800">id_89457jcje63</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--end::Col-->
            <!--begin::Col-->
            <div class="flex-equal">
              <table class="table table-flush fw-bold gy-1">
                <tbody>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">
                      Billing address
                    </td>
                    <td class="text-gray-800">US</td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Phone</td>
                    <td class="text-gray-800">No phone provided</td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Email</td>
                    <td class="text-gray-800">
                      <a href="#" class="text-gray-900 text-hover-primary"
                        >max@kt.com</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Origin</td>
                    <td class="text-gray-800">
                      United States of America
                      <div class="symbol symbol-20px symbol-circle ms-2">
                        <img src="media/flags/united-states.svg" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">CVC check</td>
                    <td class="text-gray-800">
                      Failed

                      <span class="svg-icon svg-icon-2 svg-icon-danger">
                        <inline-svg
                          src="media/icons/duotune/arrows/arr061.svg"
                        />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Details-->
        </div>
        <!--end::Body-->
      </div>
      <!--end::Option-->
    </div>
    <!--end::Card body-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "payment-methods",
  props: {
    cardClasses: String,
  },
  components: {},
});
</script>
