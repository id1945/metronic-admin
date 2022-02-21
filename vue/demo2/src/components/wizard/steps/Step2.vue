<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Heading-->
    <div class="pb-10 pb-lg-15">
      <!--begin::Title-->
      <h2 class="fw-bolder text-dark">Account Info</h2>
      <!--end::Title-->

      <!--begin::Notice-->
      <div class="text-gray-400 fw-bold fs-6">
        If you need more info, please check out
        <a href="#" class="link-primary fw-bolder">Help Page</a>.
      </div>
      <!--end::Notice-->
    </div>
    <!--end::Heading-->

    <!--begin::Input group-->
    <div class="mb-10 fv-row">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label mb-3">
        Specify Team Size
        <i
          class="fas fa-exclamation-circle ms-2 fs-7"
          data-bs-toggle="tooltip"
          title="Provide your team size to help us setup your billing"
        ></i>
      </label>
      <!--end::Label-->

      <!--begin::Row-->
      <div class="row mb-2" data-kt-buttons="true">
        <!--begin::Col-->
        <div class="col">
          <!--begin::Option-->
          <label
            class="
              btn btn-outline btn-outline-dashed btn-outline-default
              w-100
              p-4
            "
          >
            <Field
              type="radio"
              class="btn-check"
              name="accountTeamSize"
              value="1-1"
            />
            <span class="fw-bolder fs-3">1-1</span>
          </label>
          <!--end::Option-->
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col">
          <!--begin::Option-->
          <label
            class="
              btn btn-outline btn-outline-dashed btn-outline-default
              w-100
              p-4
              active
            "
          >
            <Field
              type="radio"
              class="btn-check"
              name="accountTeamSize"
              value="2-10"
            />
            <span class="fw-bolder fs-3">2-10</span>
          </label>
          <!--end::Option-->
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col">
          <!--begin::Option-->
          <label
            class="
              btn btn-outline btn-outline-dashed btn-outline-default
              w-100
              p-4
            "
          >
            <Field
              type="radio"
              class="btn-check"
              name="accountTeamSize"
              value="10-50"
            />
            <span class="fw-bolder fs-3">10-50</span>
          </label>
          <!--end::Option-->
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col">
          <!--begin::Option-->
          <label
            class="
              btn btn-outline btn-outline-dashed btn-outline-default
              w-100
              p-4
            "
          >
            <Field
              type="radio"
              class="btn-check"
              name="accountTeamSize"
              checked
              value="50+"
            />
            <span class="fw-bolder fs-3">50+</span>
          </label>
          <!--end::Option-->
        </div>
        <!--end::Col-->
      </div>
      <!--end::Row-->

      <!--begin::Hint-->
      <div class="form-text">
        Customers will see this shortened version of your statement descriptor
      </div>
      <!--end::Hint-->
    </div>
    <!--end::Input group-->

    <!--begin::Input group-->
    <div class="mb-10 fv-row">
      <!--begin::Label-->
      <label class="form-label mb-3">Team Account Name</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        type="text"
        class="form-control form-control-lg form-control-solid"
        name="accountName"
        placeholder=""
        value=""
      />
      <ErrorMessage
        name="accountName"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
      <!--end::Input-->
    </div>
    <!--end::Input group-->

    <!--begin::Input group-->
    <div class="mb-0 fv-row">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label mb-5">
        Select Account Plan
        <i
          class="fas fa-exclamation-circle ms-2 fs-7"
          data-bs-toggle="tooltip"
          title="Monthly billing will be based on your account plan"
        ></i>
      </label>
      <!--end::Label-->

      <!--begin::Options-->
      <div class="mb-0">
        <!--begin:Option-->
        <label class="d-flex flex-stack mb-5 cursor-pointer">
          <!--begin:Label-->
          <span class="d-flex align-items-center me-2">
            <!--begin::Icon-->
            <span class="symbol symbol-50px me-6">
              <span class="symbol-label">
                <span class="svg-icon svg-icon-1 svg-icon-gray-600">
                  <inline-svg src="media/icons/duotune/finance/fin001.svg" />
                </span>
              </span>
            </span>
            <!--end::Icon-->

            <!--begin::Description-->
            <span class="d-flex flex-column">
              <span class="fw-bolder text-gray-800 text-hover-primary fs-5"
                >Company Account</span
              >
              <span class="fs-6 fw-bold text-gray-400"
                >Use images to enhance your post flow</span
              >
            </span>
            <!--end:Description-->
          </span>
          <!--end:Label-->

          <!--begin:Input-->
          <span class="form-check form-check-custom form-check-solid">
            <Field
              class="form-check-input"
              type="radio"
              name="accountPlan"
              value="1"
            />
          </span>
          <!--end:Input-->
        </label>
        <!--end::Option-->

        <!--begin:Option-->
        <label class="d-flex flex-stack mb-5 cursor-pointer">
          <!--begin:Label-->
          <span class="d-flex align-items-center me-2">
            <!--begin::Icon-->
            <span class="symbol symbol-50px me-6">
              <span class="symbol-label">
                <span class="svg-icon svg-icon-1 svg-icon-gray-600">
                  <inline-svg src="media/icons/duotune/graphs/gra006.svg" />
                </span>
              </span>
            </span>
            <!--end::Icon-->

            <!--begin::Description-->
            <span class="d-flex flex-column">
              <span class="fw-bolder text-gray-800 text-hover-primary fs-5"
                >Developer Account</span
              >
              <span class="fs-6 fw-bold text-gray-400"
                >Use images to your post time</span
              >
            </span>
            <!--end:Description-->
          </span>
          <!--end:Label-->

          <!--begin:Input-->
          <span class="form-check form-check-custom form-check-solid">
            <Field
              class="form-check-input"
              type="radio"
              checked
              name="accountPlan"
              value="2"
            />
          </span>
          <!--end:Input-->
        </label>
        <!--end::Option-->

        <!--begin:Option-->
        <label class="d-flex flex-stack mb-0 cursor-pointer">
          <!--begin:Label-->
          <span class="d-flex align-items-center me-2">
            <!--begin::Icon-->
            <span class="symbol symbol-50px me-6">
              <span class="symbol-label">
                <span class="svg-icon svg-icon-1 svg-icon-gray-600">
                  <inline-svg src="media/icons/duotune/graphs/gra008.svg" />
                </span>
              </span>
            </span>
            <!--end::Icon-->

            <!--begin::Description-->
            <span class="d-flex flex-column">
              <span class="fw-bolder text-gray-800 text-hover-primary fs-5"
                >Testing Account</span
              >
              <span class="fs-6 fw-bold text-gray-400"
                >Use images to enhance time travel rivers</span
              >
            </span>
            <!--end:Description-->
          </span>
          <!--end:Label-->

          <!--begin:Input-->
          <span class="form-check form-check-custom form-check-solid">
            <Field
              class="form-check-input"
              type="radio"
              name="accountPlan"
              value="3"
            />
          </span>
          <!--end:Input-->
        </label>
        <!--end::Option-->
      </div>
      <!--end::Options-->
    </div>
    <!--end::Input group-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Field, ErrorMessage } from "vee-validate";

export default defineComponent({
  name: "step-2",
  components: {
    Field,
    ErrorMessage,
  },
});
</script>
