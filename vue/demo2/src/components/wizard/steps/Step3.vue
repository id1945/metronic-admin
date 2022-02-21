<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Heading-->
    <div class="pb-10 pb-lg-12">
      <!--begin::Title-->
      <h2 class="fw-bolder text-dark">Business Details</h2>
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
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="form-label required">Business Name</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        name="businessName"
        class="form-control form-control-lg form-control-solid"
        value="Keenthemes Inc."
      />
      <ErrorMessage
        name="businessName"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
      <!--end::Input-->
    </div>
    <!--end::Input group-->

    <!--begin::Input group-->
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label">
        <span class="required">Shortened Descriptor</span>

        <i
          class="fas fa-exclamation-circle ms-2 fs-7"
          data-bs-toggle="popover"
          data-bs-trigger="hover"
          data-bs-html="true"
        >
        </i>
      </label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        name="businessDescriptor"
        class="form-control form-control-lg form-control-solid"
        value="KEENTHEMES"
      />
      <!--end::Input-->
      <ErrorMessage
        name="businessDescriptor"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>

      <!--begin::Hint-->
      <div class="form-text">
        Customers will see this shortened version of your statement descriptor
      </div>
      <!--end::Hint-->
    </div>
    <!--end::Input group-->

    <!--begin::Input group-->
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="form-label required">Corporation Type</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        name="businessType"
        class="form-select form-select-lg form-select-solid"
        data-control="select2"
        data-placeholder="Select..."
        data-allow-clear="true"
        data-hide-search="true"
        as="select"
      >
        <option></option>
        <option value="1">S Corporation</option>
        <option value="1">C Corporation</option>
        <option value="2">Sole Proprietorship</option>
        <option value="3">Non-profit</option>
        <option value="4">Limited Liability</option>
        <option value="5">General Partnership</option>
      </Field>
      <!--end::Input-->
      <ErrorMessage
        name="businessType"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <!--end::Input group-->

    <!--begin::Input group-->
    <div class="fv-row mb-10">
      <!--end::Label-->
      <label class="form-label">Business Description</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        type="text"
        name="businessDescription"
        class="form-control form-control-lg form-control-solid"
        rows="3"
      ></Field>
      <!--end::Input-->
    </div>
    <!--end::Input group-->

    <!--begin::Input group-->
    <div class="fv-row mb-0">
      <!--begin::Label-->
      <label class="fs-6 fw-bold form-label required">Contact Email</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        name="businessEmail"
        class="form-control form-control-lg form-control-solid"
        value="corp@support.com"
      />
      <!--end::Input-->
      <ErrorMessage
        name="businessEmail"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <!--end::Input group-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Field, ErrorMessage } from "vee-validate";

export default defineComponent({
  name: "step-3",
  components: {
    Field,
    ErrorMessage,
  },
});
</script>
