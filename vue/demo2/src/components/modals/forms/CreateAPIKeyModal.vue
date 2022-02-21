<template>
  <!--begin::Modal - Create Api Key-->
  <div
    class="modal fade"
    id="kt_modal_create_api_key"
    ref="createAPIKeyModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_create_api_key_header">
          <!--begin::Modal title-->
          <h2>Create API Key</h2>
          <!--end::Modal title-->

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

        <!--begin::Form-->
        <Form
          id="kt_modal_create_api_key_form"
          class="form"
          @submit="submit"
          :validation-schema="validationSchema"
        >
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->
            <div
              class="scroll-y me-n7 pe-7"
              id="kt_modal_create_api_key_scroll"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_create_api_key_header"
              data-kt-scroll-wrappers="#kt_modal_create_api_key_scroll"
              data-kt-scroll-offset="300px"
            >
              <div
                class="
                  notice
                  d-flex
                  bg-light-warning
                  rounded
                  border-warning border border-dashed
                  mb-10
                  p-6
                "
              >
                <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
                  <inline-svg src="media/icons/duotune/general/gen044.svg" />
                </span>
                <!--begin::Wrapper-->
                <div class="d-flex flex-stack flex-grow-1">
                  <!--begin::Content-->
                  <div class="fw-bold">
                    <h4 class="text-gray-800 fw-bolder">Please Note!</h4>
                    <div class="fs-6 text-gray-600">
                      Adding new API key may afftect to your
                      <a href="#">Affiliate Income</a>
                    </div>
                  </div>
                  <!--end::Content-->
                </div>
                <!--end::Wrapper-->
              </div>

              <!--begin::Input group-->
              <div class="mb-5 fv-row">
                <!--begin::Label-->
                <label class="required fs-5 fw-bold mb-2">API Name</label>
                <!--end::Label-->

                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  placeholder="Your API Name"
                  name="apiName"
                  v-model="apiData.apiName"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="apiName" />
                  </div>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="d-flex flex-column mb-5 fv-row">
                <!--begin::Label-->
                <label class="required fs-5 fw-bold mb-2"
                  >Short Description</label
                >
                <!--end::Label-->

                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  rows="3"
                  name="shortDescription"
                  placeholder="Describe your API"
                  v-model="apiData.shortDescription"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="shortDescription" />
                  </div>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="d-flex flex-column mb-10 fv-row">
                <!--begin::Label-->
                <label class="required fs-5 fw-bold mb-2">Category</label>
                <!--end::Label-->

                <!--begin::Select-->
                <Field
                  name="category"
                  data-control="select2"
                  data-hide-search="true"
                  data-placeholder="Select a Category..."
                  class="form-select form-select-solid"
                  as="select"
                  v-model="apiData.category"
                >
                  <option value="">Select a Category...</option>
                  <option value="1">CRM</option>
                  <option value="2">Project Alice</option>
                  <option value="3">Keenthemes</option>
                  <option value="4">General</option>
                </Field>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="category" />
                  </div>
                </div>
                <!--end::Select-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="mb-10">
                <!--begin::Heading-->
                <div class="mb-3">
                  <!--begin::Label-->
                  <label class="d-flex align-items-center fs-5 fw-bold">
                    <span class="required">Specify Your API Method</span>

                    <i
                      class="fas fa-exclamation-circle ms-2 fs-7"
                      data-bs-toggle="tooltip"
                      title="Your billing numbers will be calculated based on your API method"
                    ></i>
                  </label>
                  <!--end::Label-->

                  <!--begin::Description-->
                  <div class="fs-7 fw-bold text-gray-400">
                    If you need more info, please check budget planning
                  </div>
                  <!--end::Description-->
                </div>
                <!--end::Heading-->

                <!--begin::Row-->
                <div class="fv-row">
                  <!--begin::Select-->
                  <Field
                    name="apiMethod"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Select a Category..."
                    class="form-select form-select-solid"
                    as="select"
                    v-model="apiData.apiMethod"
                  >
                    <option value="">Select a API method...</option>
                    <option value="1">Open API</option>
                    <option value="2">SQL Call</option>
                    <option value="3">UI/UX</option>
                    <option value="4">Docs</option>
                  </Field>
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="apiMethod" />
                    </div>
                  </div>
                  <!--end::Select-->
                </div>
                <!--end::Row-->
              </div>
              <!--end::Input group-->
            </div>
            <!--end::Scroll-->
          </div>
          <!--end::Modal body-->

          <!--begin::Modal footer-->
          <div class="modal-footer flex-center">
            <!--begin::Button-->
            <button
              type="reset"
              id="kt_modal_create_api_key_cancel"
              class="btn btn-white me-3"
            >
              Discard
            </button>
            <!--end::Button-->

            <!--begin::Button-->
            <button
              ref="submitButtonRef"
              type="submit"
              id="kt_modal_create_api_key_submit"
              class="btn btn-primary"
            >
              <span class="indicator-label"> Submit </span>
              <span class="indicator-progress">
                Please wait...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
            <!--end::Button-->
          </div>
          <!--end::Modal footer-->
        </Form>
        <!--end::Form-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - Create Api Key-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { hideModal } from "@/core/helpers/dom";
import { ErrorMessage, Field, Form } from "vee-validate";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";

interface APIData {
  apiName: string;
  shortDescription: string;
  category: string;
  apiMethod: string;
}

export default defineComponent({
  name: "create-api-key-modal",
  components: {
    ErrorMessage,
    Field,
    Form,
  },
  setup() {
    const submitButtonRef = ref<null | HTMLButtonElement>(null);
    const modalRef = ref<null | HTMLElement>(null);
    const createAPIKeyModalRef = ref<null | HTMLElement>(null);

    const apiData = ref<APIData>({
      apiName: "",
      shortDescription: "",
      category: "",
      apiMethod: "",
    });

    const validationSchema = Yup.object().shape({
      apiName: Yup.string().required().label("API name"),
      shortDescription: Yup.string().required().label("Description"),
      category: Yup.string().required().label("Category"),
      apiMethod: Yup.string().required().label("API method"),
    });

    const submit = () => {
      if (!submitButtonRef.value) {
        return;
      }

      //Disable button
      submitButtonRef.value.disabled = true;
      // Activate indicator
      submitButtonRef.value.setAttribute("data-kt-indicator", "on");

      setTimeout(() => {
        if (submitButtonRef.value) {
          submitButtonRef.value.disabled = false;

          submitButtonRef.value?.removeAttribute("data-kt-indicator");
        }

        Swal.fire({
          text: "Form has been successfully submitted!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok, got it!",
          customClass: {
            confirmButton: "btn btn-primary",
          },
        }).then(() => {
          hideModal(createAPIKeyModalRef.value);
        });
      }, 2000);
    };

    return {
      apiData,
      validationSchema,
      submit,
      submitButtonRef,
      modalRef,
      createAPIKeyModalRef,
    };
  },
});
</script>
