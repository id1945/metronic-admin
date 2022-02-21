<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Heading-->
    <div class="pb-10 pb-lg-15">
      <!--begin::Title-->
      <h2 class="fw-bolder d-flex align-items-center text-dark">
        Choose Account Type
        <i
          class="fas fa-exclamation-circle ms-2 fs-7"
          data-bs-toggle="tooltip"
          title="Billing is issued based on your selected account type"
        ></i>
      </h2>
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
    <div class="fv-row">
      <!--begin::Row-->
      <div class="row">
        <!--begin::Col-->
        <div class="col-lg-6">
          <!--begin::Option-->
          <Field
            type="radio"
            class="btn-check"
            name="accountType"
            value="personal"
            id="kt_create_account_form_account_type_personal"
          />
          <label
            class="
              btn btn-outline btn-outline-dashed btn-outline-default
              p-7
              d-flex
              align-items-center
              mb-10
            "
            for="kt_create_account_form_account_type_personal"
          >
            <span class="svg-icon svg-icon-3x me-5">
              <inline-svg src="media/icons/duotune/communication/com005.svg" />
            </span>

            <!--begin::Info-->
            <span class="d-block fw-bold text-start">
              <span class="text-dark fw-bolder d-block fs-4 mb-2">
                Personal Account
              </span>
              <span class="text-gray-400 fw-bold fs-6"
                >If you need more info, please check it out</span
              >
            </span>
            <!--end::Info-->
          </label>
          <!--end::Option-->
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-lg-6">
          <!--begin::Option-->
          <Field
            type="radio"
            class="btn-check"
            name="accountType"
            value="corporate"
            id="kt_create_account_form_account_type_corporate"
          />
          <label
            class="
              btn btn-outline btn-outline-dashed btn-outline-default
              p-7
              d-flex
              align-items-center
            "
            for="kt_create_account_form_account_type_corporate"
          >
            <span class="svg-icon svg-icon-3x me-5">
              <inline-svg src="media/icons/duotune/finance/fin006.svg" />
            </span>

            <!--begin::Info-->
            <span class="d-block fw-bold text-start">
              <span class="text-dark fw-bolder d-block fs-4 mb-2"
                >Corporate Account</span
              >
              <span class="text-gray-400 fw-bold fs-6"
                >Create corporate account to mane users</span
              >
            </span>
            <!--end::Info-->
          </label>
          <!--end::Option-->
        </div>
        <!--end::Col-->

        <ErrorMessage name="accountType"></ErrorMessage>
      </div>
      <!--end::Row-->
    </div>
    <!--end::Input group-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Field, ErrorMessage } from "vee-validate";

export default defineComponent({
  name: "step-1",
  components: {
    Field,
    ErrorMessage,
  },
});
</script>
